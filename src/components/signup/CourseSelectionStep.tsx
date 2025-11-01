import { UseFormReturn } from "react-hook-form";
import { SignupFormData } from "@/types/signup";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CourseSelectionStepProps {
  form: UseFormReturn<SignupFormData>;
  preSelectedTrack?: 'foundations' | 'development' | 'architecture';
}

const CourseSelectionStep = ({ form, preSelectedTrack }: CourseSelectionStepProps) => {
  const { setValue, watch, formState: { errors } } = form;
  const selectedTrack = watch("courseSelection.track") || preSelectedTrack;

  return (
    <div className="space-y-6 bg-white">
      <div>
        <Label className="text-foreground">
          Which track interests you most? <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={selectedTrack}
          onValueChange={(value) => setValue("courseSelection.track", value as any)}
          className="mt-3 space-y-3"
        >
          <div className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
            <RadioGroupItem value="foundations" id="track-foundations" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="track-foundations" className="font-semibold cursor-pointer">
                AI Fundamentals
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                Perfect for beginners. Learn AI concepts from scratch and build your first ML models.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
            <RadioGroupItem value="development" id="track-development" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="track-development" className="font-semibold cursor-pointer">
                LLM Development
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                For developers ready to integrate LLMs into applications with production-ready strategies.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
            <RadioGroupItem value="architecture" id="track-architecture" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="track-architecture" className="font-semibold cursor-pointer">
                AI Architecture
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                Advanced track for architects designing scalable AI systems and leading transformations.
              </p>
            </div>
          </div>
        </RadioGroup>
        {errors.courseSelection?.track && (
          <p className="text-sm text-destructive mt-1">{errors.courseSelection.track.message}</p>
        )}
      </div>

      <div>
        <Label className="text-foreground">
          What format do you prefer? <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          onValueChange={(value) => setValue("courseSelection.format", value as any)}
          className="mt-3 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="live" id="format-live" />
            <Label htmlFor="format-live" className="font-normal cursor-pointer">
              Live Online Classes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="self-paced" id="format-self" />
            <Label htmlFor="format-self" className="font-normal cursor-pointer">
              Self-paced with Mentorship
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hybrid" id="format-hybrid" />
            <Label htmlFor="format-hybrid" className="font-normal cursor-pointer">
              Hybrid (Both)
            </Label>
          </div>
        </RadioGroup>
        {errors.courseSelection?.format && (
          <p className="text-sm text-destructive mt-1">{errors.courseSelection.format.message}</p>
        )}
      </div>
    </div>
  );
};

export default CourseSelectionStep;
