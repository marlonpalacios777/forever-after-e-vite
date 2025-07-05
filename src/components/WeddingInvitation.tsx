import { PhotoGallery } from "./PhotoGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin, Clock, LogOut } from "lucide-react";

interface WeddingInvitationProps {
  userEmail: string;
  onLogout: () => void;
}

export const WeddingInvitation = ({ userEmail, onLogout }: WeddingInvitationProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pearl to-champagne">
      {/* Header with logout */}
      <header className="p-4 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Bienvenido/a, {userEmail}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onLogout}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Salir
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-glow)/0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--rose-gold)/0.1),transparent_50%)]"></div>
        
        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="animate-romantic-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-rose-gold rounded-full mb-8 animate-heart-beat shadow-glow">
              <Heart className="w-10 h-10 text-white fill-current" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-rose-gold to-primary bg-clip-text text-transparent animate-gentle-float">
              Sofia & Miguel
            </h1>
            
            <div className="text-2xl md:text-3xl font-light mb-8 text-foreground/80">
              Te esperamos para celebrar el amor de
            </div>
            
            <div className="text-xl md:text-2xl font-semibold text-primary mb-12">
              Sofia Elena & Miguel Alejandro
            </div>
            
            <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-card/80 shadow-romantic border-2 border-primary-glow/20 animate-romantic-fade-in">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90 italic">
                  "Después de años compartiendo sueños, risas y aventuras, 
                  hemos decidido dar el paso más importante de nuestras vidas. 
                  Queremos que seas parte de este momento único e irrepetible, 
                  donde dos corazones se unen para siempre en una promesa de amor eterno."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Video Message Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-card/50 to-champagne/30">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="animate-romantic-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-rose-gold bg-clip-text text-transparent">
              Un mensaje especial para ti
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hemos preparado un video especial donde compartimos nuestros sentimientos 
              y la emoción que sentimos al tenerte como parte de este momento único.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-2xl mx-auto">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Mensaje especial de los novios"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-romantic-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-rose-gold bg-clip-text text-transparent">
              Detalles de la Celebración
            </h2>
            <p className="text-lg text-muted-foreground">
              Toda la información importante para nuestro día especial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center backdrop-blur-sm bg-card/80 shadow-romantic border-2 border-primary-glow/20 animate-romantic-fade-in hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fecha</h3>
                <p className="text-muted-foreground">Sábado, 15 de Junio</p>
                <p className="text-muted-foreground">2025</p>
              </CardContent>
            </Card>

            <Card className="text-center backdrop-blur-sm bg-card/80 shadow-romantic border-2 border-primary-glow/20 animate-romantic-fade-in hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hora</h3>
                <p className="text-muted-foreground">Ceremonia: 6:00 PM</p>
                <p className="text-muted-foreground">Recepción: 8:00 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center backdrop-blur-sm bg-card/80 shadow-romantic border-2 border-primary-glow/20 animate-romantic-fade-in hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lugar</h3>
                <p className="text-muted-foreground">Jardín de los Sueños</p>
                <p className="text-muted-foreground">Av. del Amor 123</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-glow/5 to-rose-gold/5">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="animate-romantic-fade-in">
            <Card className="backdrop-blur-sm bg-card/80 shadow-romantic border-2 border-primary-glow/20">
              <CardContent className="p-12">
                <Heart className="w-12 h-12 text-primary mx-auto mb-6 animate-heart-beat" />
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-rose-gold bg-clip-text text-transparent">
                  Con todo nuestro amor
                </h2>
                <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                  Tu presencia en este día tan especial será el regalo más preciado que podríamos recibir. 
                  Gracias por ser parte de nuestra historia y por acompañarnos en el comienzo de este 
                  nuevo capítulo de nuestras vidas.
                </p>
                <div className="text-2xl font-semibold text-primary">
                  ¡Te esperamos con los brazos abiertos!
                </div>
                <div className="mt-4 text-lg text-muted-foreground italic">
                  Con amor infinito,<br />
                  Sofia y Miguel ❤️
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-muted-foreground">
            #SofiaYMiguel2025 • Una invitación digital con amor
          </p>
        </div>
      </footer>
    </div>
  );
};