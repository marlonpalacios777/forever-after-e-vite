import { useState } from "react";
import { AuthForm } from "@/components/AuthForm";
import { WeddingInvitation } from "@/components/WeddingInvitation";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { toast } = useToast();

  const handleLogin = (email: string, password: string) => {
    // Mock authentication - accepts any email/password combination
    if (email && password) {
      setIsAuthenticated(true);
      setUserEmail(email);
      toast({
        title: "¡Bienvenido/a!",
        description: "Has accedido exitosamente a nuestra invitación especial.",
      });
    } else {
      toast({
        title: "Error de acceso",
        description: "Por favor ingresa tu correo y contraseña.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail("");
    toast({
      title: "Sesión cerrada",
      description: "Esperamos verte pronto en nuestra boda.",
    });
  };

  if (!isAuthenticated) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return <WeddingInvitation userEmail={userEmail} onLogout={handleLogout} />;
};

export default Index;
