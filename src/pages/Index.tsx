import ParticlesBackground from "@/components/ParticlesBackground";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { AuctusButton } from "@/components/AuctusButton";
import { Badge } from "@/components/Badge";
import { ServiceCard } from "@/components/ServiceCard";
import { Marquee } from "@/components/Marquee";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bot, MessageSquare, Database, Target, Users, GraduationCap, CheckCircle, Shield, Zap, ArrowRight, Server, Lock, FileText, Clock, TrendingUp, Building2, Stethoscope, ShoppingCart, BookOpen, CreditCard, Home } from "lucide-react";

const Index = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Salud PyME");

  const services = [{
    title: "Automatizaciones & Agentes",
    description: "Hacemos que las tareas repetitivas se hagan solas. Agentes de IA coordinados para procesos administrativos y operativos.",
    icon: <Bot size={24} />
  }, {
    title: "Chatbots & asistentes",
    description: "Atención 24/7 en WhatsApp y web para soporte, asesoramiento y ventas. Todo con registro de conversaciones y permisos.",
    icon: <MessageSquare size={24} />
  }, {
    title: "Data & analítica",
    description: "Juntamos, ordenamos y unificamos tus datos. Tableros claros con las métricas que importan.",
    icon: <Database size={24} />
  }, {
    title: "Venta con IA & ads",
    description: "Segmentación automática y anuncios que se adaptan a cada cliente. Más ventas con el mismo presupuesto.",
    icon: <Target size={24} />
  }, {
    title: "CRM/CDP & integraciones",
    description: "Sync bidireccional, calidad de datos, automatización de etapas.",
    icon: <Users size={24} />
  }, {
    title: "Entrenamiento de equipos",
    description: "Capacitaciones prácticas en IA. Guías, políticas y ejercicios para aplicar en tu negocio.",
    icon: <GraduationCap size={24} />
  }];

  const processSteps = [{
    step: "01",
    title: "Descubrimiento",
    duration: "1-2 días",
    description: "Relevamiento y priorización de quick-wins."
  }, {
    step: "02",
    title: "PoC",
    duration: "≤14 días",
    description: "Automatizaciones mínimas viables + tablero de métricas."
  }, {
    step: "03",
    title: "Despliegue",
    duration: "Variable",
    description: "Hardening, observabilidad, runbooks y entrenamiento."
  }, {
    step: "04",
    title: "Escala",
    duration: "Continuo",
    description: "Roadmap trimestral y governance de modelos/datos."
  }];

  const stackItems = ["OpenAI", "Anthropic", "Gemini", "n8n", "Supabase", "BigQuery", "Redis", "Qdrant", "Zep", "Meta Ads", "Google Ads", "GCP", "AWS"];
  
  const faqs = [{
    question: "¿Qué garantías tengo?",
    answer: "Ofrecemos PoC con métricas claras en 14 días. Si no cumplimos objetivos definidos, devolvemos el 100% de la inversión del diagnóstico."
  }, {
    question: "¿Puedo alojar todo en mi infraestructura?",
    answer: "Sí, trabajamos con hosting on-premises, VPC dedicado o cloud híbrido según tus requerimientos de seguridad y compliance."
  }, {
    question: "¿Trabajan con mis herramientas actuales?",
    answer: "Absolutamente. Nos especializamos en integrar con sistemas legados (ERP/CRM) sin interrumpir operaciones existentes."
  }, {
    question: "¿Qué ocurre si la PoC no cumple objetivos?",
    answer: "La PoC incluye métricas específicas acordadas previamente. Si no se alcanzan, devolvemos la inversión y entregamos la documentación completa."
  }, {
    question: "¿Cómo es el traspaso si decido internalizar?",
    answer: "Entregamos código fuente, documentación completa, runbooks y realizamos transferencia de conocimiento a tu equipo técnico."
  }];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
  
      {/* Hero Section con Particles */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Particles Background */}
        <ParticlesBackground height="100vh" />
        
        {/* Contenido encima de las partículas */}
        <div className="container mx-auto px-4 text-center relative z-10 pt-24 pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 stagger-fade">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-tight font-bold text-fg-100 leading-tight">
                Infraestructura de IA para{" "}
                <span className="font-accent text-ac-500 inline whitespace-nowrap">PyMEs</span>{" "}
                que quieren
                <span className="font-accent text-ac-500 block mt-0.5">Crecer hoy.</span>
              </h1>
              
              <p className="font-accent text-xl md:text-2xl text-fg-300 mb-8">
                Escalamos operaciones, reducimos costos y aumentamos margenes.
              </p>
              
              <p className="text-lg text-fg-300 max-w-2xl mb-8 mx-auto">
                Implementamos sistemas e infraestructuras que se adapten a tu empresa 
                <span className="text-fg-100 font-medium"> reduciendo tiempos y costos</span> sin perder control ni seguridad.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <AuctusButton size="lg" className="w-full sm:w-auto">
                  Agendá tu diagnóstico
                  <ArrowRight size={16} className="ml-2" />
                </AuctusButton>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="success">PoC en 14 días</Badge>
                <Badge>Seguridad end-to-end</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Gradiente de transición al final */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-5 pointer-events-none" />
      </section>  

      {/* Metrics */}
      <section id="metricas" className="py-16 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-8">
              Resultados típicos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-8 rounded-xl neon-glass-green stagger-fade">
                <div className="text-4xl font-tight font-bold text-success mb-2">↓ 10-30%</div>
                <div className="text-lg text-fg-100 mb-2">Costos operativos</div>
                <div className="text-sm text-fg-300">en 90 días</div>
              </div>
              
              <div className="p-8 rounded-xl neon-glass-blue stagger-fade">
                <div className="text-4xl font-tight font-bold text-ac-500 mb-2">↑ 5-15%</div>
                <div className="text-lg text-fg-100 mb-2">Margen operativo</div>
                <div className="text-sm text-fg-300">promedio sector</div>
              </div>
            </div>
            
            <p className="text-sm text-fg-300">Resultados varían según madurez y sector; se definen objetivos específicos en el diagnóstico.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">Servicios</h2>
              <p className="text-lg text-fg-300 max-w-2xl mx-auto">
                Soluciones de IA diseñadas específicamente para
                <span className="text-fg-100 font-medium"> PyMEs</span> que buscan
                <span className="text-fg-100 font-medium"> resultados inmediatos.</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                  delay={index * 60}
                  variant="neon" // Usa el efecto neon
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section id="diferencial" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">
                Por qué <span className="font-accent">Auctus Growth</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl neon-glass stagger-fade">
                <TrendingUp className="text-ac-500 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Adaptación de IA a su empresa</h3>
                <p className="text-fg-300 text-sm">Adaptamos la solucion a tu PyME</p>
              </div>
              
              <div className="text-center p-6 rounded-xl neon-glass-green stagger-fade">
                <Shield className="text-success mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Seguridad completa</h3>
                <p className="text-fg-300 text-sm">Datos cifrados y accesos controlados. Sin filtraciones.</p>
              </div>
              
              <div className="text-center p-6 rounded-xl neon-glass stagger-fade">
                <Server className="text-warning mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Integración con sistemas legales</h3>
                <p className="text-fg-300 text-sm">Conectamos con facturación, AFIP/ARCA y normativa vigente.</p>
              </div>
              
              <div className="text-center p-6 rounded-xl neon-glass-blue stagger-fade">
                <FileText className="text-ac-400 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Documentación y traspaso</h3>
                <p className="text-fg-300 text-sm">Todo documentado. Puede cambiar de proveedor cuando quiera.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">
                Proceso en 4 pasos
              </h2>
              <p className="text-lg text-fg-300 max-w-2xl mx-auto">
                Metodología probada para implementar IA de forma eficiente y segura.
              </p>
            </div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 p-6 rounded-xl neon-glass stagger-fade">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-tight font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-fg-100">{step.title}</h3>
                      <Badge variant="default">{step.duration}</Badge>
                    </div>
                    <p className="text-fg-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">
              Stack tecnológico
            </h2>
            <p className="text-lg text-fg-300">
              Herramientas enterprise para resultados confiables
            </p>
          </div>
          
          <Marquee items={stackItems} />
        </div>
      </section>

      {/* Security */}
      <section id="seguridad" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">
                Seguridad & Legal
              </h2>
              <p className="text-lg text-fg-300 max-w-2xl mx-auto">
                Compliance y protección de datos sin compromiso
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl neon-glass-green stagger-fade">
                <Lock className="text-success mb-4" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Tus datos protegidos</h3>
                <p className="text-fg-300 text-sm">Auditoría de accesos y cambios.</p>
              </div>
              
              <div className="p-6 rounded-xl neon-glass-blue stagger-fade">
                <Server className="text-ac-500 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Accesos controlados</h3>
                <p className="text-fg-300 text-sm">Auditoría de accesos y cambios, solo entra quien corresponde, con permisos por rol.</p>
              </div>
              
              <div className="p-6 rounded-xl neon-glass stagger-fade">
                <FileText className="text-warning mb-4" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Instalación en tus servidores</h3>
                <p className="text-fg-300 text-sm">Hosting en tu propia infraestructura.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-fg-300">
                Todo lo que necesitas saber antes de empezar
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-line-700 rounded-xl px-6 neon-glass">
                  <AccordionTrigger className="text-fg-100 hover:text-ac-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-fg-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="neon-glass-blue p-12 rounded-2xl">
              <h2 className="text-4xl md:text-5xl font-tight font-bold text-fg-100 mb-6">
                <span className="font-accent">Listo para operar con IA real,</span>
                <br />
                no promesas?
              </h2>
              
              <p className="text-xl text-fg-300 mb-8 max-w-2xl mx-auto">
                Agenda una consulta de 30 minutos y descubre cómo podemos reducir tus costos operativos en 90 días.
              </p>
              
              <AuctusButton size="lg" className="text-lg px-12 py-6">
                Agendá tu diagnóstico
                <ArrowRight size={20} className="ml-2" />
              </AuctusButton>
              
              <p className="text-sm text-fg-300 mt-6">
                Sin compromiso · Diagnóstico gratuito
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-950 border-t border-line-700 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-tight font-bold text-sm">AG</span>
                  </div>
                  <span className="ml-2 text-lg font-tight font-bold text-fg-100">
                    Auctus Growth
                  </span>
                </div>
                <p className="text-fg-300 text-sm">
                  Infraestructura de IA para PyMEs que quieren crecer hoy.
                </p>
              </div>
                            
              <div>
                <h4 className="font-semibold text-fg-100 mb-4">Servicios</h4>
                <div className="space-y-2 text-sm">
                  <a href="#servicios" className="text-fg-300 hover:text-fg-100 block underline-link">Automatizaciones</a>
                  <a href="#servicios" className="text-fg-300 hover:text-fg-100 block underline-link">Chatbots</a>
                  <a href="#servicios" className="text-fg-300 hover:text-fg-100 block underline-link">Data & Analytics</a>
                  <a href="#servicios" className="text-fg-300 hover:text-fg-100 block underline-link">Venta con IA</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-fg-100 mb-4">Redes Sociales</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="text-fg-300 hover:text-fg-100 block underline-link">Instagram</a>
                  <a href="#" className="text-fg-300 hover:text-fg-100 block underline-link">LinkedIn</a>
                  <a href="#" className="text-fg-300 hover:text-fg-100 block underline-link">Twitter / X</a>
                  <a href="#" className="text-fg-300 hover:text-fg-100 block underline-link">TikTok</a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-fg-100 mb-4">Legal</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="text-fg-300 hover:text-fg-100 block underline-link">Privacidad</a>
                  <a href="#" className="text-fg-300 hover:text-fg-100 block underline-link">Términos</a>
                  <a href="#contacto" className="text-fg-300 hover:text-fg-100 block underline-link">Contacto</a>
                </div>
                <div className="mt-4 text-xs text-fg-300">
                  <p>Córdoba, Argentina</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-line-700 mt-8 pt-8 text-center text-sm text-fg-300">
              <p>&copy; 2024 Auctus Growth. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>  
  );    
};
export default Index;