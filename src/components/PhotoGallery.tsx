import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import coupleSubset from "@/assets/couple-sunset.jpg";
import coupleDancing from "@/assets/couple-dancing.jpg";
import coupleGarden from "@/assets/couple-garden.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
import couplePicnic from "@/assets/couple-picnic.jpg";

const photos = [
  {
    src: coupleSubset,
    alt: "Pareja en atardecer romántico",
    title: "Nuestro primer atardecer juntos"
  },
  {
    src: coupleDancing,
    alt: "Pareja bailando elegantemente",
    title: "Bailando hacia nuestro futuro"
  },
  {
    src: coupleGarden,
    alt: "Pareja caminando en jardín",
    title: "Construyendo nuestro jardín de amor"
  },
  {
    src: couplePortrait,
    alt: "Retrato íntimo de la pareja",
    title: "Un momento de intimidad"
  },
  {
    src: couplePicnic,
    alt: "Pareja en picnic romántico",
    title: "Compartiendo sueños bajo las flores"
  }
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-romantic-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-rose-gold bg-clip-text text-transparent">
            Nuestra Historia de Amor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada imagen cuenta un capítulo de nuestra hermosa historia juntos, 
            momentos especiales que nos han llevado hasta este día tan esperado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 animate-romantic-fade-in shadow-elegant"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                    {photo.title}
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 ring-2 ring-primary-glow/0 group-hover:ring-primary-glow/50 transition-all duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-primary-glow/20">
            {selectedPhoto !== null && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X className="w-6 h-6" />
                </Button>
                
                <div className="relative">
                  <img
                    src={photos[selectedPhoto].src}
                    alt={photos[selectedPhoto].alt}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={prevPhoto}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={nextPhoto}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {photos[selectedPhoto].title}
                  </h3>
                  <p className="text-gray-300">
                    {selectedPhoto + 1} de {photos.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};