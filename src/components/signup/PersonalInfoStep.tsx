import { UseFormReturn } from "react-hook-form";
import { SignupFormData } from "@/types/signup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoStepProps {
  form: UseFormReturn<SignupFormData>;
}

const PersonalInfoStep = ({ form }: PersonalInfoStepProps) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="fullName" className="text-foreground">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="fullName"
          {...register("personal.fullName")}
          placeholder="John Doe"
          className="mt-2"
        />
        {errors.personal?.fullName && (
          <p className="text-sm text-destructive mt-1">
            {errors.personal.fullName.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register("personal.email")}
          placeholder="john@example.com"
          className="mt-2"
        />
        {errors.personal?.email && (
          <p className="text-sm text-destructive mt-1">
            {errors.personal.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-foreground">
          Phone <span className="text-muted-foreground text-sm">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register("personal.phone")}
          placeholder="+1 (555) 123-4567"
          className="mt-2"
        />
        {errors.personal?.phone && (
          <p className="text-sm text-destructive mt-1">
            {errors.personal.phone.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoStep;
