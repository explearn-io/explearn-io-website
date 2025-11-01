import { Instructor } from "@/types/instructor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";
import patternImage from "@/assets/expLearn-icon-geometry-black.svg";
import iconPattern from "@/assets/Explearn_icon_black.png";

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  const initials = instructor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
      {/* Pattern Header Section */}
      <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200">
        {/* Geometric Pattern Background */}
        {/* <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='40,5 60,20 60,40 40,55 20,40 20,20' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpolygon points='40,55 50,65 50,75 40,80 30,75 30,65' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpolygon points='20,60 28,68 28,76 20,80 12,76 12,68' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpolygon points='60,60 68,68 68,76 60,80 52,76 52,68' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        /> */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Avatar positioned over pattern */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
          <Avatar className="w-48 h-48 border-4 border-background shadow-lg">
            <AvatarImage src={instructor.photoUrl} alt={instructor.name} />
            <AvatarFallback className="text-5xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-28 px-8 pb-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">{instructor.name}</h3>
          <p className="text-lg text-muted-foreground mb-4">{instructor.title}</p>
          <p className="text-sm text-foreground leading-relaxed mb-6">{instructor.bio}</p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {instructor.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs  bg-[#E6ECF3] hover:bg-[#E6ECF3] border-[1px]">
                {tag}
              </Badge>
            ))}
          </div>
          {instructor.linkedInUrl && (
            <a
              href={instructor.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label={`${instructor.name} LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
