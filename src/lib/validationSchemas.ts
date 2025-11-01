import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional().refine((val) => !val || /^[\d\s\-\+\(\)]+$/.test(val), {
    message: "Invalid phone number format"
  })
});

export const experienceSchema = z.object({
  currentRole: z.string().min(1, "Please select your current role"),
  programmingYears: z.number().min(0).max(10),
  technologies: z.array(z.string()).min(1, "Please select at least one technology"),
  llmExperience: z.string().min(1, "Please select your LLM experience level"),
  architectureExperience: z.string().min(1, "Please select your architecture experience level")
});

export const courseSelectionSchema = z.object({
  track: z.enum(['foundations', 'development', 'architecture'], {
    required_error: "Please select a track"
  }),
  format: z.enum(['live', 'self-paced', 'hybrid'], {
    required_error: "Please select a preferred format"
  })
});

export const goalsSchema = z.object({
  achievements: z.string().min(20, "Please provide at least 20 characters").max(500, "Maximum 500 characters"),
  referralSource: z.string().min(1, "Please tell us how you heard about us"),
  emailConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive course updates"
  })
});

export const signupFormSchema = z.object({
  personal: personalInfoSchema,
  experience: experienceSchema,
  courseSelection: courseSelectionSchema,
  goals: goalsSchema
});
