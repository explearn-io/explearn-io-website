import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TargetGroupCards from "@/components/TargetGroupCards";
import InstructorSection from "@/components/InstructorSection";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";

const Index = () => {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [preSelectedTrack, setPreSelectedTrack] = useState<'foundations' | 'development' | 'architecture' | undefined>();

  const handleOpenSignup = (track?: 'foundations' | 'development' | 'architecture') => {
    setPreSelectedTrack(track);
    setSignupModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation onContactClick={() => handleOpenSignup()} />
      
      <main className="flex-1">
        <Hero onStartLearning={() => handleOpenSignup()} />
        <TargetGroupCards onLearnMore={handleOpenSignup} />
        <InstructorSection />
        <Footer />
      </main>

      <SignupModal 
        open={signupModalOpen} 
        onOpenChange={setSignupModalOpen}
        preSelectedTrack={preSelectedTrack}
      />
    </div>
  );
};

export default Index;
