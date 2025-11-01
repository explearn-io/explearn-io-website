import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessMessageProps {
  onClose: () => void;
}

const SuccessMessage = ({ onClose }: SuccessMessageProps) => {
  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-6">
        <CheckCircle className="w-20 h-20 text-secondary" />
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-4">
        Registration Successful!
      </h3>
      
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Thank you for registering! We'll contact you within 24 hours with next steps and course details.
      </p>
      
      <Button onClick={onClose} size="lg">
        Close
      </Button>
    </div>
  );
};

export default SuccessMessage;
