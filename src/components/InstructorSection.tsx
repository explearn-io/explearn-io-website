import InstructorCard from "./InstructorCard";
import { Instructor } from "@/types/instructor";
// import iconPattern from "@/assets/explearn-icon-pattern.svg";
// import patternImage from "@/assets/expLearn-icon-geometry-black.svg";
// import iconPattern from "@/assets/Explearn_icon_black.png";
import ins1 from "@/assets/ins1.jpeg";
import ins2 from "@/assets/ins2.jpeg";

const InstructorSection = () => {
  const instructors: Instructor[] = [
    {
      id: "1",
      name: "Arturo Gomez Chavez, PhD",
      title: "AI & Robotics Solution Architect",
      bio: "With over 15 years in AI research and development, Arturo Gomez Chavez has led the implementation of large language models at Fortune 500 companies. He specializes in production-ready LLM systems and has published extensively on AI safety and scalability.",
      tags: ["LLM Integration", "AI Safety", "Microservices", "Cloud Architecture", "Python", "PyTorch"],
      photoUrl: ins1,
      linkedInUrl: "https://www.linkedin.com/in/gomezchavez-arturo/",
    },
    {
      id: "2",
      name: "Vincent Sortoh, MSc",
      title: "Software Architecture | Solution Architect",
      bio: "Vinent has over 10 years of experience architecting enterprise systems and leading engineering teams. He's passionate about teaching developers how to design scalable, maintainable systems using modern architectural patterns and AI-powered tools.",
      tags: ["System Design", "Microservices", "DevOps", "Kubernetes", "Go", "TypeScript"],
      photoUrl: ins2,
      linkedInUrl: "https://www.linkedin.com/in/vincentsortoh/",
    },
  ];

  return (
    <section id="instructors" className="relative py-20 bg-white overflow-hidden">
      {/* Background pattern layer */}
      {/* <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `url(${patternImage})`,
          backgroundPosition: "top",
        }}
      /> */}

      {/* Content */}
      <div className="relative z-[2] container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Your Instructors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts with decades of combined experience in AI and software architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
