import { useEffect, useState } from "react";

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload the video
    const video = document.createElement('video');
    video.src = '/videos/truck.mp4';
    video.preload = 'auto';
    
    video.onloadeddata = () => {
      setVideoLoaded(true);
    };

    // Start fade out after 3.7 seconds (accounting for fade animation)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3700);

    // Complete intro after 4 seconds total
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-300 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/videos/truck.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for Cinematic Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
      
      {/* Cinematic Letterbox Bars */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-black"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-black"></div>
      
      {/* Animated Film Grain Effect */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </div>
      
      {/* Vignette Effect - Enhanced */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>

      {/* Animated Logo/Brand - Cinematic Entrance */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
        fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="text-center">
          {/* Animated Logo with Cinematic Glow */}
          <div className="relative mb-6 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl opacity-60 animate-pulse-glow"></div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border-2 border-white/40 flex items-center justify-center shadow-2xl">
              <span className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">SH</span>
            </div>
          </div>
          
          {/* Company Name with Staggered Animation */}
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-3 tracking-wider animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
            SHADEN HOUSE
          </h1>
          
          {/* Subtitle with Delayed Entrance */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'backwards' }}>
            <p className="text-xl md:text-2xl text-white/95 font-light tracking-widest drop-shadow-lg uppercase">
              Porta Cabin Solutions
            </p>
            <div className="mt-4 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Cinematic Corner Frames - Animated */}
      <div className="absolute top-16 md:top-24 left-8 w-20 h-20 border-t-2 border-l-2 border-white/30 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute top-16 md:top-24 right-8 w-20 h-20 border-t-2 border-r-2 border-white/30 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-16 md:bottom-24 left-8 w-20 h-20 border-b-2 border-l-2 border-white/30 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-16 md:bottom-24 right-8 w-20 h-20 border-b-2 border-r-2 border-white/30 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
};

export default VideoIntro;