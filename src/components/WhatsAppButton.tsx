import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "966554467464";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Blinking Animation Rings */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
        
        {/* WhatsApp Button */}
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="text-white" size={32} />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
