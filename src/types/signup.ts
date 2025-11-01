export interface PersonalInfo {
  fullName: string;
  email: string;
  phone?: string;
}

export interface Experience {
  currentRole: string;
  programmingYears: number;
  technologies: string[];
  llmExperience: string;
  architectureExperience: string;
}

export interface CourseSelection {
  track: 'foundations' | 'development' | 'architecture';
  format: 'live' | 'self-paced' | 'hybrid';
}

export interface Goals {
  achievements: string;
  referralSource: string;
  emailConsent: boolean;
}

export interface SignupFormData {
  personal: PersonalInfo;
  experience: Experience;
  courseSelection: CourseSelection;
  goals: Goals;
}
