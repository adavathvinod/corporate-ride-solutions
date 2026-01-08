import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      
      {/* Phone Call */}
      <a
        href="tel:+919876543210"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
