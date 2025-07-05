import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-pearl to-champagne p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary-glow)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--rose-gold)/0.1),transparent_50%)]"></div>
      
      <div className="text-center relative z-10 animate-romantic-fade-in">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-rose-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-heart-beat">
          <Heart className="w-10 h-10 text-white fill-current" />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-rose-gold bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Página no encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, pero parece que te has perdido en el camino hacia nuestra invitación especial.
        </p>
        
        <Button 
          asChild
          className="bg-gradient-to-r from-primary to-rose-gold hover:from-primary/90 hover:to-rose-gold/90 transform hover:scale-105 transition-all duration-300 shadow-romantic"
        >
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Volver a la Invitación
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
