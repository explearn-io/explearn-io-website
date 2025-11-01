import { UseFormReturn } from "react-hook-form";
import { SignupFormData } from "@/types/signup";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ExperienceStepProps {
  form: UseFormReturn<SignupFormData>;
}

const ExperienceStep = ({ form }: ExperienceStepProps) => {
  const { register, setValue, watch, formState: { errors } } = form;
  const [otherTech, setOtherTech] = useState("");
  const technologies = watch("experience.technologies") || [];
  const programmingYears = watch("experience.programmingYears") || 0;

  const techOptions = ["Python", "JavaScript", "Java", "C#", "Go", "Rust", "TypeScript"];

  const handleTechToggle = (tech: string) => {
    const updated = technologies.includes(tech)
      ? technologies.filter((t) => t !== tech)
      : [...technologies, tech];
    setValue("experience.technologies", updated);
  };

  const handleOtherTech = () => {
    if (otherTech.trim()) {
      setValue("experience.technologies", [...technologies, otherTech.trim()]);
      setOtherTech("");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-foreground">
          Current Role <span className="text-destructive">*</span>
        </Label>
        <Select onValueChange={(value) => setValue("experience.currentRole", value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="junior">Junior Developer</SelectItem>
            <SelectItem value="mid">Mid-level Developer</SelectItem>
            <SelectItem value="senior">Senior Developer</SelectItem>
            <SelectItem value="architect">Architect</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.experience?.currentRole && (
          <p className="text-sm text-destructive mt-1">{errors.experience.currentRole.message}</p>
        )}
      </div>

      <div>
        <Label className="text-foreground">
          Programming Experience: {programmingYears === 10 ? "10+" : programmingYears} years <span className="text-destructive">*</span>
        </Label>
        <Slider
          value={[programmingYears]}
          onValueChange={(value) => setValue("experience.programmingYears", value[0])}
          max={10}
          step={1}
          className="mt-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0</span>
          <span>5</span>
          <span>10+</span>
        </div>
      </div>

      <div>
        <Label className="text-foreground">
          Technologies You've Worked With <span className="text-destructive">*</span>
        </Label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {techOptions.map((tech) => (
            <div key={tech} className="flex items-center space-x-2">
              <Checkbox
                id={tech}
                checked={technologies.includes(tech)}
                onCheckedChange={() => handleTechToggle(tech)}
              />
              <label htmlFor={tech} className="text-sm text-foreground cursor-pointer">
                {tech}
              </label>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <Input
            placeholder="Other technology"
            value={otherTech}
            onChange={(e) => setOtherTech(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleOtherTech())}
          />
          <button
            type="button"
            onClick={handleOtherTech}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-secondary/80"
          >
            Add
          </button>
        </div>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
        {errors.experience?.technologies && (
          <p className="text-sm text-destructive mt-1">{errors.experience.technologies.message}</p>
        )}
      </div>

      <div>
        <Label className="text-foreground">
          Experience with LLMs <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          onValueChange={(value) => setValue("experience.llmExperience", value)}
          className="mt-2 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="llm-none" />
            <Label htmlFor="llm-none" className="font-normal cursor-pointer">No experience</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="basic" id="llm-basic" />
            <Label htmlFor="llm-basic" className="font-normal cursor-pointer">Basic (used ChatGPT/APIs)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="intermediate" id="llm-intermediate" />
            <Label htmlFor="llm-intermediate" className="font-normal cursor-pointer">Intermediate (built simple apps)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="advanced" id="llm-advanced" />
            <Label htmlFor="llm-advanced" className="font-normal cursor-pointer">Advanced (production systems)</Label>
          </div>
        </RadioGroup>
        {errors.experience?.llmExperience && (
          <p className="text-sm text-destructive mt-1">{errors.experience.llmExperience.message}</p>
        )}
      </div>

      <div>
        <Label className="text-foreground">
          Experience with Software Architecture <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          onValueChange={(value) => setValue("experience.architectureExperience", value)}
          className="mt-2 space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="arch-none" />
            <Label htmlFor="arch-none" className="font-normal cursor-pointer">No experience</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="basic" id="arch-basic" />
            <Label htmlFor="arch-basic" className="font-normal cursor-pointer">Basic (understand patterns)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="intermediate" id="arch-intermediate" />
            <Label htmlFor="arch-intermediate" className="font-normal cursor-pointer">Intermediate (designed systems)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="advanced" id="arch-advanced" />
            <Label htmlFor="arch-advanced" className="font-normal cursor-pointer">Advanced (architect role)</Label>
          </div>
        </RadioGroup>
        {errors.experience?.architectureExperience && (
          <p className="text-sm text-destructive mt-1">{errors.experience.architectureExperience.message}</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceStep;
