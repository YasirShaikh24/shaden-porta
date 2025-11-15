import * as React from "react";
// FIX: Removed useState and useEffect as all loading/timing logic is now obsolete.

interface VideoBackgroundProps {
  videoUrl: string;
  posterImage?: string;
  className?: string;
}

const VideoBackground = ({ videoUrl, posterImage, className = "" }: VideoBackgroundProps) => {
  // FIX: All loading states and hooks are removed. The video renders instantly.
  
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Video Element - Renders Immediately with Autoplay and Loop */}
      <video
        // These attributes ensure immediate, looped, and silent playback as soon as the browser can load the asset.
        autoPlay
        loop
        muted
        playsInline
        poster={posterImage}
        className="absolute inset-0 w-full h-full object-cover animate-video-fade"
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlays - Better video visibility with darker overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/95"></div> 
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
    </div>
  );
};

export default VideoBackground;