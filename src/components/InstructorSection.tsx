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
      title: "AI & Robotics System Architect",
      bio: "With 10+ years in AI and robotics, Arturo Gomez-Chavez has led engineering teams and built scalable AI platforms for research and industry. As a co-founder and CTO, he’s architected real-time data systems used in European research projects and commercial deployments. At Explearn.io, he shares practical frameworks for building robust AI and software architectures that move from prototype to production.",
      tags: ["AI/ML Architecture", "Robotics & Computer Vision", "MLOps Engineering", "Scalable Software Design", "Technical Leadership"],
      photoUrl: ins1,
      linkedInUrl: "https://www.linkedin.com/in/gomezchavez-arturo/",
    },
    {
      id: "2",
      name: "Vincent Sortoh, MSc",
      title: "Solution & Software Solution Architect",
      bio: "Vincent Sortoh is a Software Architect and Data Engineer with over a 15 years of experience designing and delivering scalable systems across fintech, telecommunications, and AI-driven platforms. His background spans full-stack engineering, data infrastructure, and cloud-based application development for organizations such as Vodafone and national banks. At Explearn.io, Vincent brings hands-on expertise in software design, data engineering, and system scalability-helping learners bridge the gap between robust architecture and real-world deployment.",
      tags: ["Software Architecture", "Enterprise Applications", "Cloud Systems", "Data Engineering", "Full-Stack Development"],
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
