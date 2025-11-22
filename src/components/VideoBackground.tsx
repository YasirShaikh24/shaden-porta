import * as React from "react";

interface VideoBackgroundProps {
  videoUrl: string;
  posterImage?: string;
  className?: string;
}

const VideoBackground = ({
  videoUrl,
  posterImage = "/videos/truck-poster.jpg",
  className = ""
}: VideoBackgroundProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force preload immediately
    video.preload = "auto";

    // Force immediate load
    video.load();

    // Try to autoplay instantly
    const tryPlay = async () => {
      try {
        await video.play();
      } catch (e) {
        // Autoplay blocked on some devices (Android/iOS)
        console.log("Autoplay prevented, waiting for user interaction");
        const resumePlay = () => {
          video.play().catch(() => {});
          window.removeEventListener("touchstart", resumePlay);
          window.removeEventListener("click", resumePlay);
        };
        window.addEventListener("touchstart", resumePlay, { once: true });
        window.addEventListener("click", resumePlay, { once: true });
      }
    };

    tryPlay();
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      
      {/* Ultra-Optimized Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterImage}
        className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform will-change-opacity"
        style={{
          filter: "brightness(0.68)",
          WebkitTransform: "translateZ(0)",
        }}
      >
        {/* WebM first (faster if available) */}
        <source src={videoUrl.replace(".mp4", ".webm")} type="video/webm" />

        {/* MP4 fallback */}
        <source src={videoUrl} type="video/mp4" />

        Your browser does not support HTML5 video.
      </video>

      {/* Soft Gradients for visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
    </div>
  );
};

export default VideoBackground;
