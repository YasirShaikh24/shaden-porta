import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const whatsappNumber = "966554467464";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const [isHovered, setIsHovered] = useState(false);
  const [isBumping, setIsBumping] = useState(false);

  // Auto bump every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBumping(true);
      setTimeout(() => setIsBumping(false), 500); // bump duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

        {/* ONLY ICON */}
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className={`
            w-16 h-16 object-contain 
            transition-all duration-300
            ${isHovered ? "scale-125" : "scale-110"}
            ${isBumping ? "animate-bump" : ""}
          `}
        />

        {/* Glow Behind Icon */}
        <div
          className={`
            absolute inset-0 rounded-full bg-green-500/40 blur-xl 
            transition-opacity duration-300 
            ${isHovered ? "opacity-80" : "opacity-40"}
            ${isBumping ? "animate-softblink" : ""}
          `}
          style={{ zIndex: -1 }}
        />

        {/* Notification */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center animate-bounce shadow-md">
          <span className="text-white text-xs font-bold">1</span>
        </div>

      </div>
    </a>
  );
};

export default WhatsAppButton;
