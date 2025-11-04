import icon from "@/assets/expLearn-logo-icon-black.svg";
import gradient2 from "@/assets/gradient-2.jpg";
import { Button } from "@/components/ui/button";
import LearningTimeline from "@/components/LearningTimeline";

interface HeroProps {
  onStartLearning: () => void;
}

const Hero = ({ onStartLearning }: HeroProps) => {
  const scrollToCourses = () => {
    const element = document.querySelector("#courses");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToInstructors = () => {
    const element = document.querySelector("#instructors");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden -mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={gradient2} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/10" />

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-[2] pt-28 md:pt-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Expert Teaching<br />
              Simple Learning
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-6 font-medium">
              Learn by building: where curiosity meets real-world engineering.
            </p>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Gain strong fundamentals to navigate the ever-evolving space of AI with confidence.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={onStartLearning} className="text-lg px-8 py-6">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToCourses} className="text-lg px-8 py-6">
                Explore Courses
              </Button>
              <Button size="lg" variant="destructive" onClick={scrollToInstructors} className="text-lg px-8 py-6">
                Meet the Instructors
              </Button>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card/90 backdrop-blur-sm rounded-2xl border border-border max-w-2xl mb-8">
    
              <img src={icon} alt="ExpLearn Icon" className="w-12 h-12" />
              <div>
                <p className="text-lg text-foreground leading-relaxed">
                  At Explearn, we believe <strong>strong fundamentals</strong> never go out of date.<br />
                  Our mission is to make <strong>high-quality AI education accessible</strong> to young professionals everywhere - empowering them to <strong>grow, adapt, and stay relevant</strong> in a fast-changing world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 40% - Interactive Timeline */}
          <div className="lg:col-span-2">
            <LearningTimeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
