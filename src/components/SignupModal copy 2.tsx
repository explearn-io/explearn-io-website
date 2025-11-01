import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { SignupFormData } from "@/types/signup";
import { signupFormSchema } from "@/lib/validationSchemas";
import PersonalInfoStep from "./signup/PersonalInfoStep";
import ExperienceStep from "./signup/ExperienceStep";
import CourseSelectionStep from "./signup/CourseSelectionStep";
import GoalsStep from "./signup/GoalsStep";
import SuccessMessage from "./signup/SuccessMessage";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedTrack?: 'foundations' | 'development' | 'architecture';
}

const STORAGE_KEY = "explearn-signup-form";

const SignupModal = ({ open, onOpenChange, preSelectedTrack }: SignupModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      courseSelection: {
        track: preSelectedTrack || undefined,
        format: undefined
      },
      personal: { fullName: "", email: "", phone: "" },
      experience: {
        currentRole: "",
        programmingYears: 0,
        technologies: [],
        llmExperience: "",
        architectureExperience: ""
      },
      goals: {
        achievements: "",
        referralSource: "",
        emailConsent: false
      }
    }
  });

  // Load saved form data from localStorage
  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const data = JSON.parse(saved);
          form.reset(data);
        } catch (e) {
          console.error("Failed to load saved form data");
        }
      }
      
      // Set pre-selected track if provided
      if (preSelectedTrack) {
        form.setValue("courseSelection.track", preSelectedTrack);
      }
    }
  }, [open, preSelectedTrack, form]);

  // Save form data to localStorage on changes
  useEffect(() => {
    if (open) {
      const subscription = form.watch((data) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      });
      return () => subscription.unsubscribe();
    }
  }, [open, form]);

  const validateStep = async (step: number) => {
    let isValid = false;
    
    switch (step) {
      case 1:
        isValid = await form.trigger(["courseSelection.track", "courseSelection.format"]);
        break;
      case 2:
        isValid = await form.trigger(["personal.fullName", "personal.email", "personal.phone"]);
        break;
      case 3:
        isValid = await form.trigger([
          "experience.currentRole",
          "experience.programmingYears",
          "experience.technologies",
          "experience.llmExperience",
          "experience.architectureExperience"
        ]);
        break;
      case 4:
        isValid = await form.trigger([
          "goals.achievements",
          "goals.referralSource",
          "goals.emailConsent"
        ]);
        break;
    }
    
    return isValid;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: SignupFormData) => {
    console.log("Form submitted:", data);
    
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    
    // Show success message
    setIsSuccess(true);
    
    // Here you would typically send data to your backend
    // await fetch('/api/signup', { method: 'POST', body: JSON.stringify(data) });
  };

  const handleClose = () => {
    if (!isSuccess) {
      const hasData = Object.values(form.getValues()).some(val => 
        typeof val === 'object' ? Object.values(val).some(v => v) : val
      );
      
      if (hasData) {
        setShowExitConfirm(true);
        return;
      }
    }
    
    onOpenChange(false);
    setTimeout(() => {
      setCurrentStep(1);
      setIsSuccess(false);
      if (isSuccess) {
        form.reset();
      }
    }, 300);
  };

  const confirmClose = () => {
    setShowExitConfirm(false);
    onOpenChange(false);
    setTimeout(() => {
      setCurrentStep(1);
      setIsSuccess(false);
      form.reset();
    }, 300);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {isSuccess ? "" : "Master LLM & Software Architecture"}
            </DialogTitle>
          </DialogHeader>

          {!isSuccess && (
            <div className="flex justify-center gap-2 my-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    step === currentStep
                      ? "bg-primary"
                      : step < currentStep
                      ? "bg-secondary"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="py-6">
            {isSuccess ? (
              <SuccessMessage onClose={handleClose} />
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {currentStep === 1 && <CourseSelectionStep form={form} preSelectedTrack={preSelectedTrack} />}
                {currentStep === 2 && <PersonalInfoStep form={form} />}
                {currentStep === 3 && <ExperienceStep form={form} />}
                {currentStep === 4 && <GoalsStep form={form} />}

                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>

                  {currentStep < 4 ? (
                    <Button type="button" onClick={handleNext}>
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit">
                      Submit Registration
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showExitConfirm} onOpenChange={setShowExitConfirm}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Save your progress?</AlertDialogTitle>
            <AlertDialogDescription>
              Your information has been saved automatically. You can come back and continue your registration anytime.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep Editing</AlertDialogCancel>
            <AlertDialogAction onClick={confirmClose}>
              Exit Anyway
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SignupModal;