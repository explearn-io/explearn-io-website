import { useState } from "react";
import { BookOpen, TrendingUp, Award } from "lucide-react";

interface Level {
  name: string;
  duration: string;
  icon: typeof BookOpen;
}

interface TimelineLevelProps {
  level: Level;
  icon: typeof BookOpen;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const TimelineLevel = ({ level, icon: Icon, isActive, onClick, index }: TimelineLevelProps) => {
  return (
    <div className="relative flex items-center mb-8 last:mb-0 w-full">
      {/* Connecting line */}
      {index < 2 && (
        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-primary/30" />
      )}

      {/* Timeline node */}
      <div
        onClick={onClick}
        className={`
          relative z-10 flex items-center gap-4 cursor-pointer w-full
          transition-all duration-300 ease-out
          ${isActive ? "scale-105" : "hover:scale-102"}
        `}
      >
        {/* Icon circle */}
        <div
          className={`
          w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
          transition-all duration-300
          ${
            isActive
              ? "bg-card shadow-lg shadow-primary/50 border-2 border-primary"
              : "bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50"
          }
        `}
        >
          <Icon className={`w-6 h-6 ${isActive ? "text-primary" : "text-foreground"}`} />
        </div>

        {/* Level box */}
        <div
          className={`
          px-8 py-4 rounded-xl backdrop-blur-md
          transition-all duration-300 flex-1
          ${
            isActive
              ? "bg-card shadow-xl shadow-primary/30 border-2 border-primary"
              : "bg-card/20 border border-border hover:bg-card/30 hover:border-primary/50"
          }
        `}
        >
          <p
            className={`
            text-sm font-semibold transition-colors duration-300
            ${isActive ? "text-foreground" : "text-foreground/90"}
          `}
          >
            {level.name}
          </p>
          {level.duration && (
            <p
              className={`
              text-xs mt-1 transition-colors duration-300
              ${isActive ? "text-primary" : "text-muted-foreground"}
            `}
            >
              {level.duration}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const LearningTimeline = () => {
  const [activeLevel, setActiveLevel] = useState(0);

  const levels: Level[] = [
    { name: "AI Fundamentals", duration: "8 semanas", icon: BookOpen },
    { name: "AI Production Ready", duration: "12 semanas", icon: TrendingUp },
    { name: "Enterprise Solutions", duration: "16 semanas", icon: Award },
  ];

  return (
    <div className="hidden lg:flex flex-col pt-8 animate-fade-in w-full">
      <div className="mb-6">
        <h3 className="text-foreground/80 text-lg font-semibold uppercase tracking-wider mb-4">Learning Journey</h3>
      </div>

      <div className="relative w-full">
        {levels.map((level, index) => (
          <TimelineLevel
            key={index}
            level={level}
            icon={level.icon}
            isActive={activeLevel === index}
            onClick={() => setActiveLevel(index)}
            index={index}
          />
        ))}
      </div>

      {/* Additional info box */}
      <div className="mt-8 p-5 bg-card/20 backdrop-blur-sm rounded-xl border border-border">
        <p className="text-muted-foreground text-sm">✨ Progresión personalizada</p>
      </div>
    </div>
  );
};

export default LearningTimeline;
