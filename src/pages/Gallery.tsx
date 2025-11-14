import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Play, Image as ImageIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import image1 from "@/assets/img/image1.jpg";
import image2 from "@/assets/img/image2.jpg";
import image3 from "@/assets/img/image3.jpg";
import image4 from "@/assets/img/image4.jpg";
import image5 from "@/assets/img/image5.jpg";
import image6 from "@/assets/img/image6.jpg";
import image7 from "@/assets/img/image7.jpg";
import image8 from "@/assets/img/image8.jpg";
import image9 from "@/assets/img/image9.jpg";
import image10 from "@/assets/img/image10.jpeg";
import image11 from "@/assets/img/image11.jpeg";
import image12 from "@/assets/img/image12.webp";
import image13 from "@/assets/img/image13.jpg";
import image14 from "@/assets/img/image14.jpg";
import image15 from "@/assets/img/image15.jpg";
import image16 from "@/assets/img/image16.jpg";
import image17 from "@/assets/img/image17.jpg";
import image18 from "@/assets/img/image18.jpg";
import image19 from "@/assets/img/image19.jpg";
import image20 from "@/assets/img/image20.jpg";
import image21 from "@/assets/img/image21.jpg";
import image22 from "@/assets/img/image22.jpg";

type MediaItem = {
  src: string;
  type: 'image' | 'video';
  thumbnail?: string;
  title: string;
};

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Gallery items - Mix of images and videos
  const galleryItems: MediaItem[] = [
    { src: image1, type: 'image', title: "Steel Frame Construction 1" },
    { src: image2, type: 'image', title: "Modern Porta Cabin 1" },
    { src: image3, type: 'image', title: "Office Interior 1" },
    // Placeholder for videos - Replace with actual video URLs
    { src: "/videos/video1.mp4", type: 'video', thumbnail: image4, title: "Construction Process Video" },
    { src: image5, type: 'image', title: "Steel Frame Construction 2" },
    { src: image6, type: 'image', title: "Modern Porta Cabin 2" },
    { src: image7, type: 'image', title: "Office Interior 2" },
    { src: image8, type: 'image', title: "Installation Site 1" },
    { src: image9, type: 'image', title: "Completed Project 1" },
    // Placeholder for video 2
    { src: "/videos/video2.mp4", type: 'video', thumbnail: image10, title: "Site Tour Video" },
    { src: image11, type: 'image', title: "Interior Design 1" },
    { src: image12, type: 'image', title: "Exterior View 1" },
    { src: image13, type: 'image', title: "Construction Detail 1" },
    { src: image14, type: 'image', title: "Modular Unit 1" },
    { src: image15, type: 'image', title: "Installation Process 1" },
    // Placeholder for video 3
    { src: "/videos/video3.mp4", type: 'video', thumbnail: image16, title: "Project Showcase Video" },
    { src: image17, type: 'image', title: "Finished Project 2" },
    { src: image18, type: 'image', title: "Interior Detail 1" },
    { src: image19, type: 'image', title: "Exterior Detail 1" },
    { src: image20, type: 'image', title: "Construction Site 2" },
    { src: image21, type: 'image', title: "Modern Design 1" },
    { src: image22, type: 'image', title: "Completed Installation 1" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index]!);
        }
      });
    };
  }, []);

  const openLightbox = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[hsl(var(--header-background))]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button 
              variant="ghost" 
              className="gap-2 text-[hsl(var(--header-foreground))] hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">{t.home}</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="container mx-auto px-4 pt-32 pb-12">
        {/* Title Section with Entrance Animation */}
        <div className="text-center mb-16 opacity-0 translate-y-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.gallery}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.featuredDescription}
          </p>
        </div>

        {/* Image Grid with Individual Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => {
            const isVisible = visibleImages.has(index);
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                data-index={index}
                className={`group relative overflow-hidden rounded-2xl border-2 border-border bg-card hover:border-transparent cursor-pointer aspect-video hover:shadow-2xl transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-20 scale-95'
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index % 3) * 100}ms` : '0ms',
                  transform: isHovered ? 'translateY(-12px) scale(1.02)' : undefined
                }}
                onClick={() => setSelectedImage(image.src)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10 transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Image with Parallax Effect */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 brightness-105 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Shimmer Effect on Load */}
                  {isVisible && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"
                      style={{
                        animation: 'shimmer 1.5s ease-in-out',
                        animationDelay: `${(index % 3) * 150}ms`
                      }}
                    />
                  )}
                </div>

                {/* Overlay with Smooth Fade */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Zoom Icon with Scale Animation */}
                  <div className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 transition-all duration-300 ${
                    isHovered ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-45 opacity-0'
                  }`}>
                    <ZoomIn className="text-white" size={24} />
                  </div>

                  {/* Image Title with Slide Up */}
                  <p className={`text-foreground font-bold text-lg text-center transition-all duration-300 ${
                    isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {image.alt}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}></div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary to-accent opacity-0 rounded-bl-full transition-all duration-500 ${
                  isHovered ? 'opacity-20 scale-100' : 'opacity-0 scale-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Gallery Stats with Entrance Animation */}
        <div className="mt-16 text-center opacity-0 translate-y-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="text-center group">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {images.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Total Images</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block"></div>
            <div className="text-center group">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Projects Done</div>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground text-sm animate-pulse">More exciting projects coming soon!</p>
        </div>
      </main>

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button with Rotation Animation */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-card rounded-full border border-border hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary transition-all duration-300 hover:scale-110 hover:rotate-90 group z-50"
            aria-label="Close"
          >
            <X size={24} className="text-foreground group-hover:text-primary transition-colors duration-300" />
          </button>

          {/* Image Container with Scale Animation */}
          <div className="relative max-w-7xl max-h-[90vh] animate-scale-in">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl animate-pulse-glow"></div>
            
            <img
              src={selectedImage}
              alt="Fullscreen view"
              className="relative z-10 max-w-full max-h-full object-contain rounded-3xl shadow-2xl border-4 border-border"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;