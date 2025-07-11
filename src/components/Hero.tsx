
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Server, Cloud } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                TAB
                <span className="text-green-600 ml-2">INFORMÁTICA</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mais de 20 anos de experiência em infraestrutura de TI, 
                oferecendo soluções completas e personalizadas para sua empresa.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Segurança</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <Server className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Servidores</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <Cloud className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Cloud</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('contato')}
              >
                Fale Conosco
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                onClick={() => scrollToSection('servicos')}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="p-8">
              <img 
                src="/lovable-uploads/1e12027c-4a72-487a-b26b-262e42674a68.png" 
                alt="TAB Informática" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600">20+</div>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
