
import { Globe } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] rounded-lg"></div>
            <span className="text-xl font-bold">ExamAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="nav-link">¿Cómo Funciona ExamAI?</a>
            <a href="#calculator" className="nav-link">Calculadora de Ahorro</a>
            <a href="#pricing" className="nav-link">Precios</a>
            <a href="#blog" className="nav-link">Blog</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" className="text-gray-700">Iniciar Sesión</Button>
            <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white hover:opacity-90">
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
