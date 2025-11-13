import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
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

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { src: image1, alt: "Steel Frame Construction Site" },
    { src: image2, alt: "Modern Architecture" },
    { src: image3, alt: "Premium Porta Cabin" },
    { src: image4, alt: "Interior Kitchen Design" },
    { src: image5, alt: "Spacious Interior Room" },
    { src: image6, alt: "Exterior Porta Cabin" },
    { src: image7, alt: "Modular Home with Landscaping" },
    { src: image8, alt: "Two-Story Modular Accommodation" },
    { src: image9, alt: "Large Modern Indoor Space" },
    { src: image10, alt: "Modular Home with Landscaping" },
    { src: image11, alt: "L-Shaped Modular Unit" },
    { src: image12, alt: "Commercial Building Interior" },
    { src: image13, alt: "Corrugated Panel Porta Cabins" },
    { src: image14, alt: "Stacked Office and Restroom Units" },
    { src: image15, alt: "Modular Washroom Interior" },
    { src: image16, alt: "Long Dormitory Porta Cabin" },
    { src: image17, alt: "Small Modular Security Cabin" },
    { src: image18, alt: "Large Steel Structure Under Construction" },
    { src: image19, alt: "Container Office with Platform" },
    { src: image20, alt: "Open-Plan Modular Office" },
    { src: image21, alt: "Modular Washroom Sink Area" },
  ];

  return (
    <div className="min-h-screen bg-background">
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
        {/* Title Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.gallery}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.featuredDescription}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card hover:border-transparent transition-all duration-500 cursor-pointer aspect-video hover:shadow-2xl hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6">
                {/* Zoom Icon */}
                <div className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 transition-all duration-300 ${
                  hoveredIndex === index ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                }`}>
                  <ZoomIn className="text-white" size={24} />
                </div>

                {/* Image Title */}
                <p className="text-foreground font-bold text-lg text-center">{image.alt}</p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {images.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Total Images</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Projects Done</div>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground text-sm">More exciting projects coming soon!</p>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-card rounded-full border border-border hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary transition-all duration-300 hover:scale-110 group"
            aria-label="Close"
          >
            <X size={24} className="text-foreground group-hover:text-primary transition-colors duration-300" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-[90vh]">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl"></div>
            
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