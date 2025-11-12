import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
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
import image10 from "@/assets/img/image10.jpg";
import image11 from "@/assets/img/image11.jpg";
import image12 from "@/assets/img/image12.jpg";
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

  // Array of images - more can be added here manually
  const images = [
    { src: image1, alt: "Steel Frame Construction Site" },
    { src: image2, alt: "Modern Architecture" },
    { src: image3, alt: "Premium Porta Cabin" },
    { src: image4, alt: "Interior Kitchen Design" },
    { src: image5, alt: "Spacious Interior Room" },
    { src: image6, alt: "Exterior Porta Cabin" },
    { src: image7, alt: "Porta Cabin Project" },
    { src: image8, alt: "Construction Site" },
    { src: image9, alt: "Modern Porta Cabin" },
    { src: image10, alt: "Industrial Building" },
    { src: image11, alt: "Modular Construction" },
    { src: image12, alt: "Porta Cabin Interior" },
    { src: image13, alt: "Building Structure" },
    { src: image14, alt: "Construction Work" },
    { src: image15, alt: "Porta Cabin Design" },
    { src: image16, alt: "Site Development" },
    { src: image17, alt: "Modern Construction" },
    { src: image18, alt: "Porta Cabin Installation" },
    { src: image19, alt: "Building Project" },
    { src: image20, alt: "Construction Progress" },
    { src: image21, alt: "Completed Porta Cabin" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={20} />
              {t.home}
            </Button>
          </Link>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.gallery}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.featuredDescription}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-video"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-foreground font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add more images info */}
        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>Gallery contains {images.length} images. More projects coming soon!</p>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-card rounded-full hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
