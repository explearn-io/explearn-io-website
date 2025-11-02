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
                Perfect for beginners. Demonstrate a solid understanding of core concepts through hands-on demos for your portfolio.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
            <RadioGroupItem value="development" id="track-development" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="track-development" className="font-semibold cursor-pointer">
                AI Production Ready
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                For developers ready to turn prototypes into production-grade apps using robust data pipelines, MLOps, and cloud engineering practices.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
            <RadioGroupItem value="architecture" id="track-architecture" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="track-architecture" className="font-semibold cursor-pointer">
                Enterprise Solutions
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                For enterprises and teams looking for tailor-made solutions, built for reliability, scalability and real impact in your business
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
              Live Online Classes / Mentoring
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="self-paced" id="format-self" />
            <Label htmlFor="format-self" className="font-normal cursor-pointer">
              Self-paced with Mentorship / Support for enterprise teams
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
