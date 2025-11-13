import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const whatsappNumber = "966554467464";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Animated Rings */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 animate-pulse opacity-50"></div>
        
        {/* Main Button */}
        <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isHovered ? 'scale-110 shadow-green-500/50' : 'scale-100'
        }`}>
          <MessageCircle 
            className={`text-white transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`} 
            size={32} 
            strokeWidth={2}
          />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Tooltip */}
        <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 bg-card border border-border rounded-lg shadow-xl transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}>
          <p className="text-sm font-medium text-foreground">Chat with us on WhatsApp</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-border"></div>
          </div>
        </div>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;