
import { 
  Server, 
  Shield, 
  Cloud, 
  Network, 
  Settings, 
  Headphones,
  Database,
  Monitor,
  Lock
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Administração de Servidores",
      description: "Windows Server, Active Directory, Linux (Ubuntu, CentOS), Samba, MySQL"
    },
    {
      icon: Shield,
      title: "Segurança da Informação",
      description: "Firewall, Iptables, Fail2ban, criptografia, políticas de segurança e backups"
    },
    {
      icon: Cloud,
      title: "Computação em Nuvem",
      description: "Cloud, GCP, Docker, ambientes multicloud e migração"
    },
    {
      icon: Network,
      title: "Redes e Infraestrutura",
      description: "TCP/IP, VLAN, roteamento, switching, troubleshooting de conectividade"
    },
    {
      icon: Headphones,
      title: "Suporte Técnico",
      description: "Help Desk, sistemas de chamados, treinamento de usuários e mentoria técnica"
    },
    {
      icon: Database,
      title: "Virtualização",
      description: "VMware, VirtualBox, máquinas virtuais e otimização de recursos"
    },
    {
      icon: Monitor,
      title: "Monitoramento",
      description: "Zabbix, análise de desempenho, monitoramento proativo de sistemas"
    },
    {
      icon: Settings,
      title: "Automação",
      description: "Automação de processos, scripts personalizados e otimização de workflows"
    },
    {
      icon: Lock,
      title: "Office 365",
      description: "Implementação, configuração e suporte completo para ambientes Microsoft 365"
    }
  ];

  const technologies = [
    "Windows Server",
    "Linux",
    "VMware", 
    "Docker",
    "Cloud",
    "Microsoft Office 365",
    "MySQL"
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em TI, desde infraestrutura básica até 
            implementações complexas em nuvem e segurança corporativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Tecnologias e Ferramentas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-md group"
                >
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
