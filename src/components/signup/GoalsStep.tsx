import { UseFormReturn } from "react-hook-form";
import { SignupFormData } from "@/types/signup";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface GoalsStepProps {
  form: UseFormReturn<SignupFormData>;
}

const GoalsStep = ({ form }: GoalsStepProps) => {
  const { register, setValue, watch, formState: { errors } } = form;
  const emailConsent = watch("goals.emailConsent");

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="achievements" className="text-foreground">
          What do you hope to achieve with this training / consultation? <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="achievements"
          {...register("goals.achievements")}
          placeholder="Describe your goals and what you hope to learn..."
          className="mt-2 min-h-[100px]"
          maxLength={500}
        />
        {errors.goals?.achievements && (
          <p className="text-sm text-destructive mt-1">{errors.goals.achievements.message}</p>
        )}
      </div>

      <div>
        <Label className="text-foreground">
          How did you hear about us? <span className="text-destructive">*</span>
        </Label>
        <Select onValueChange={(value) => setValue("goals.referralSource", value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="search">Search Engine</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
            <SelectItem value="friend">Friend or Colleague</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.goals?.referralSource && (
          <p className="text-sm text-destructive mt-1">{errors.goals.referralSource.message}</p>
        )}
      </div>

      <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
        <Checkbox
          id="emailConsent"
          checked={emailConsent}
          onCheckedChange={(checked) => setValue("goals.emailConsent", checked as boolean)}
        />
        <div className="flex-1">
          <label htmlFor="emailConsent" className="text-sm text-foreground cursor-pointer leading-relaxed">
            I agree to receive course updates and materials via email <span className="text-destructive">*</span>
          </label>
        </div>
      </div>
      {errors.goals?.emailConsent && (
        <p className="text-sm text-destructive">{errors.goals.emailConsent.message}</p>
      )}
    </div>
  );
};

export default GoalsStep;
