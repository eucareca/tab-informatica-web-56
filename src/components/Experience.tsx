
import { Award, BookOpen } from "lucide-react";

export const Experience = () => {
  const certifications = [
    "Microsoft 365 Fundamentals (MS-900)",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Security, Compliance and Identity Fundamentals (SC-900)",
    "AWS Discovery Day – Computação em Nuvem",
    "Cloud Fundamentals – 4Linux",
    "15ª Escola Regional de Redes de Computadores (ERRC 2017)"
  ];

  return (
    <section id="certificacoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Certificações & Cursos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Constantemente atualizado com as mais recentes tecnologias e 
            certificações em computação em nuvem e infraestrutura de TI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
              <Award className="h-6 w-6 text-green-600 mr-3" />
              Certificações & Cursos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-green-200 hover:bg-green-50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <h4 className="text-xl font-bold mb-4">Educação Continuada</h4>
            <p className="text-green-100 leading-relaxed">
              Comprometido com o aprendizado contínuo e atualização constante 
              em tecnologias emergentes, participando regularmente de cursos, 
              workshops e eventos da área de TI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
