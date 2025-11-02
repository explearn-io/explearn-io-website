import { GraduationCap, Code, Network, BookOpen, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import iconPattern from "@/assets/Explearn_icon_black.png";
interface TargetGroupCardsProps {
  onLearnMore: (track: 'foundations' | 'development' | 'architecture') => void;
}

const TargetGroupCards = ({ onLearnMore }: TargetGroupCardsProps) => {
  const features = [
    {
      id: 'foundations' as const,
      number: "01",
      icon: BookOpen,
      title: "AI Fundamentals",
      bullets: [
        "Master AI concepts from scratch",
        "Build your first ML models",
        "Hands-on Python projects"
      ]
    },
    {
      id: 'development' as const,
      number: "02",
      icon: TrendingUp,
      title: "AI Production Ready",
      bullets: [
        "Integrate LLMs into applications",
        "API design & optimization",
        "Production deployment strategies"
      ]
    },
    {
      id: 'architecture' as const,
      number: "03",
      icon: Award,
      title: "Enterprise Solutions",
      bullets: [
        "Design scalable AI systems",
        "Microservices & cloud patterns",
        "Lead AI transformation projects"
      ]
    }
  ];

  return (
    <section id="courses" className="bg-gradient-to-br from-[#FAF8F3] to-[#F5F1E8] py-20 px-5">

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From fundamentals to advanced architecture  & enterprise solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <span className="text-5xl font-bold text-muted/20 group-hover:text-muted/40 transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent text-foreground hover:bg-foreground hover:text-background border-2 border-foreground transition-all duration-300"
                    onClick={() => onLearnMore(feature.id)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetGroupCards;
