import { useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    // Complete after 2 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Truck Video - Full Screen */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/truck.mp4" type="video/mp4" />
      </video>
      
      {/* Optional: Subtle fade overlay at the end */}
      <div className="absolute inset-0 bg-black/0 animate-fade-in pointer-events-none" 
           style={{ animationDelay: "1.5s", animationDuration: "0.5s" }}></div>
    </div>
  );
};

export default LoadingScreen;
