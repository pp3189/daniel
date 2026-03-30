/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Cpu, 
  Settings, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  ChevronRight,
  ExternalLink,
  MapPin,
  Wrench,
  Monitor,
  Users
} from "lucide-react";

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-brand-primary text-white rounded-lg">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold uppercase tracking-tighter">{children}</h2>
  </div>
);

const ProjectCard = ({ title, description, tech, icon: Icon }: { title: string, description: string, tech: string, icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-2xl flex flex-col h-full"
  >
    <div className="mb-4 p-3 bg-brand-bg rounded-xl w-fit text-brand-accent">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <div className="pt-4 border-t border-gray-100">
      <span className="text-xs font-mono font-medium text-brand-accent uppercase tracking-wider">Tecnología: {tech}</span>
    </div>
  </motion.div>
);

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen tech-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tighter">DMG.ENGINEER</span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#sobre-mi" className="hover:text-brand-accent transition-colors">Sobre Mí</a>
            <a href="#experiencia" className="hover:text-brand-accent transition-colors">Experiencia</a>
            <a href="#proyectos" className="hover:text-brand-accent transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-brand-accent transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              Ingeniero Mecatrónico
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] uppercase">
              Daniel <br />
              <span className="text-brand-accent">Mendoza</span> <br />
              Guerrero
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Especialista en Automatización y Procesos en P&G. Transformando la complejidad mecánica en soluciones eficientes y automatizadas.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-brand-accent transition-all shadow-lg shadow-brand-accent/20">
                <Download size={20} />
                Descargar CV
              </button>
              <a href="#proyectos" className="px-8 py-4 bg-white border border-gray-200 rounded-xl font-bold flex items-center gap-2 hover:border-brand-accent transition-all">
                Ver Proyectos
                <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img 
                src="https://raw.githubusercontent.com/celversa/portfolio-assets/main/daniel-mendoza.png" 
                alt="Daniel Mendoza Guerrero" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </header>

      {/* About Me */}
      <section id="sobre-mi" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <SectionTitle icon={Users}>Sobre Mí</SectionTitle>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Soy egresado de la Licenciatura en Ingeniería Mecatrónica por el Instituto Tecnológico Superior de Xalapa. Mi enfoque profesional combina la pasión por el diseño mecánico con la precisión de los sistemas de control electrónico.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Actualmente, formo parte del equipo de Product Supply en Procter & Gamble, donde aplico metodologías de mejora continua para asegurar la excelencia en las líneas de producción. Me considero un profesional orientado a resultados, con gran capacidad de adaptación y un aprendizaje técnico constante.
              </p>
            </div>
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-accent">
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-2">Ubicación</h4>
                <div className="flex items-center gap-2 font-bold">
                  <MapPin size={18} className="text-brand-accent" />
                  Tlaxcala / Apizaco, México
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-accent">
                <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500 mb-2">Especialidad</h4>
                <div className="flex items-center gap-2 font-bold">
                  <Cpu size={18} className="text-brand-accent" />
                  Automatización Industrial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experiencia" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Briefcase}>Experiencia Laboral</SectionTitle>
          <div className="relative border-l-2 border-gray-200 ml-4 pl-10 space-y-12">
            <div className="relative">
              <div className="absolute -left-[51px] top-0 w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white border-4 border-brand-bg">
                <Settings size={20} />
              </div>
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Ingeniero de Procesos y Control</h3>
                    <p className="text-brand-accent font-bold text-lg">Procter & Gamble (P&G)</p>
                  </div>
                  <span className="px-4 py-1 bg-gray-100 rounded-full text-sm font-bold text-gray-600">2024 - Presente</span>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <ChevronRight className="text-brand-accent shrink-0" size={20} />
                    Optimización de ciclos de producción en maquinaria de empaque de alta velocidad.
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="text-brand-accent shrink-0" size={20} />
                    Mantenimiento preventivo y correctivo de sistemas neumáticos y servomotores.
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="text-brand-accent shrink-0" size={20} />
                    Implementación de mejoras en la interfaz hombre-máquina (HMI) para facilitar la operación en piso.
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="text-brand-accent shrink-0" size={20} />
                    Reducción del 5% en desperdicio de materia prima mediante el ajuste de sensores de precisión.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-brand-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-white text-brand-primary rounded-lg">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Educación</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-white/20 pl-8">
              <h3 className="text-2xl font-bold mb-2">Licenciatura en Ingeniería Mecatrónica</h3>
              <p className="text-white/70 text-lg mb-4">Instituto Tecnológico Superior de Xalapa (ITSX)</p>
              <div className="flex flex-wrap gap-4 text-sm font-mono">
                <span className="bg-white/10 px-3 py-1 rounded">Veracruz, México</span>
                <span className="bg-white/10 px-3 py-1 rounded">Generación 2018 - 2022</span>
              </div>
              <p className="mt-4 text-brand-accent font-bold">Mención: Especialidad en Automatización Industrial y Robótica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Code2}>Proyectos Seleccionados</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Célula de Estibado Automatizado"
              description="Diseño de un prototipo de brazo robótico de 3 grados de libertad para el acomodo de cajas pequeñas en bandas transportadoras."
              tech="Arduino, Servomotores y impresión 3D"
              icon={Wrench}
            />
            <ProjectCard 
              title="Monitoreo de Temperatura IoT"
              description="Creación de una red de sensores IoT para vigilar el calentamiento de motores en una línea de ensamble con alertas en tiempo real."
              tech="ESP32, DS18B20 y Python"
              icon={Monitor}
            />
            <ProjectCard 
              title="Rediseño de Soporte Metálico"
              description="Optimización de un rack de acero para motores industriales, reduciendo el peso del material en un 15% sin perder resistencia."
              tech="SolidWorks y FEA"
              icon={Settings}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Settings}>Aptitudes (Skills)</SectionTitle>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Cpu size={20} className="text-brand-accent" />
                Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>PLC (Allen-Bradley)</SkillBadge>
                <SkillBadge>Electrónica de potencia</SkillBadge>
                <SkillBadge>Neumática básica</SkillBadge>
                <SkillBadge>Sistemas SCADA</SkillBadge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Monitor size={20} className="text-brand-accent" />
                Software
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>SolidWorks / AutoCAD</SkillBadge>
                <SkillBadge>MATLAB / Simulink</SkillBadge>
                <SkillBadge>Lenguaje C++ / Python</SkillBadge>
                <SkillBadge>Excel Avanzado</SkillBadge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users size={20} className="text-brand-accent" />
                Blandas
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Resolución de problemas</SkillBadge>
                <SkillBadge>Liderazgo de equipos</SkillBadge>
                <SkillBadge>Comunicación efectiva</SkillBadge>
                <SkillBadge>Trabajo bajo presión</SkillBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contacto" className="py-20 px-6 bg-brand-bg border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase mb-6">¿Hablamos de <br /><span className="text-brand-accent">Ingeniería?</span></h2>
              <p className="text-gray-600 mb-8 text-lg">
                Estoy siempre abierto a discutir nuevos proyectos, desafíos de automatización o simplemente conectar con profesionales del sector.
              </p>
              <div className="space-y-4">
                <a href="mailto:daniel.mendoza@email.com" className="flex items-center gap-4 group">
                  <div className="p-3 bg-white rounded-xl border border-gray-200 group-hover:border-brand-accent transition-colors">
                    <Mail size={20} className="text-brand-accent" />
                  </div>
                  <span className="font-bold text-lg">daniel.mendoza@email.com</span>
                </a>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-brand-accent hover:text-brand-accent transition-all">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-brand-accent hover:text-brand-accent transition-all">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nombre</label>
                    <input type="text" className="w-full p-4 bg-brand-bg rounded-xl border border-gray-100 focus:border-brand-accent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input type="email" className="w-full p-4 bg-brand-bg rounded-xl border border-gray-100 focus:border-brand-accent outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Mensaje</label>
                  <textarea rows={4} className="w-full p-4 bg-brand-bg rounded-xl border border-gray-100 focus:border-brand-accent outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold hover:bg-brand-primary transition-all shadow-lg shadow-brand-accent/20">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-200 flex flex-wrap justify-between gap-4 text-sm text-gray-500 font-medium">
            <p>© {new Date().getFullYear()} Daniel Mendoza Guerrero. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-accent">Privacidad</a>
              <a href="#" className="hover:text-brand-accent">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
