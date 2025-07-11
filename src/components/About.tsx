
import { User, MapPin, Phone, Mail } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sobre o Profissional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça Tiago Assis Brasil, especialista em infraestrutura de TI com vasta experiência 
            em ambientes Windows e Linux, segurança da informação e computação em nuvem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="h-6 w-6 text-green-600 mr-3" />
                Dados Pessoais
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Joinville - SC</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">(55) 99205-6000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">tiagoassisbrasil@gmail.com</span>
                </div>
              </div>
            </div>

          </div>

          {/* Professional Summary */}
          <div className="space-y-8">
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Resumo Profissional</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Profissional com mais de 20 anos de experiência em infraestrutura de TI, 
                especialista em ambientes Windows e Linux, com sólidos conhecimentos em 
                segurança da informação, suporte técnico e computação em nuvem.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Experiência comprovada em administração de servidores, redes corporativas 
                e sistemas operacionais. Capacidade de resolver problemas técnicos complexos, 
                prestar suporte ao usuário final e implementar soluções eficientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white border-2 border-green-100 rounded-2xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-600 font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center bg-white border-2 border-green-100 rounded-2xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Projetos Realizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
