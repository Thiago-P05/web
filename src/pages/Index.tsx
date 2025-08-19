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

  // Parallax effect for blobs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const blobs = document.querySelectorAll('.parallax-blob');
      const {
        clientX,
        clientY
      } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      blobs.forEach((blob, index) => {
        const element = blob as HTMLElement;
        const speed = (index + 1) * 2;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        element.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const services = [{
    title: "Automatizaciones & Agents",
    description: "Orquestación de tareas, flujos multi-app, agentes para backoffice.",
    icon: <Bot size={24} />
  }, {
    title: "Chatbots & asistentes",
    description: "Soporte, ventas y ops con trazabilidad y guardrails.",
    icon: <MessageSquare size={24} />
  }, {
    title: "Data/ETL & analítica",
    description: "Pipelines, embeddings, reporting y atribución.",
    icon: <Database size={24} />
  }, {
    title: "Lead gen con IA & ads",
    description: "Segmentación, creatividades dinámicas, optimización.",
    icon: <Target size={24} />
  }, {
    title: "CRM/CDP & integraciones",
    description: "Sync bidireccional, calidad de datos, automatización de etapas.",
    icon: <Users size={24} />
  }, {
    title: "Entrenamiento de equipos",
    description: "Playbooks de IA, compliance y buenas prácticas.",
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
  const industries = [{
    name: "Salud PyME",
    icon: <Stethoscope size={16} />
  }, {
    name: "Inmobiliarias",
    icon: <Home size={16} />
  }, {
    name: "E‑commerce",
    icon: <ShoppingCart size={16} />
  }, {
    name: "Educación",
    icon: <BookOpen size={16} />
  }, {
    name: "Fintech PyME",
    icon: <CreditCard size={16} />
  }];
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
  return <div className="min-h-screen relative overflow-x-hidden">
      {/* Parallax Blobs */}
      <div className="parallax-blob w-96 h-96 top-20 left-10 -z-10" />
      <div className="parallax-blob w-64 h-64 top-40 right-20 -z-10" />
      <div className="parallax-blob w-80 h-80 top-96 left-1/2 -translate-x-1/2 -z-10" />
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 stagger-fade">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-tight font-bold text-fg-100 leading-tight">
                Infraestructura de IA para PyMEs que quieren 
                <span className="font-accent text-ac-500 block mt-2">PyMEs.</span>
              </h1>
              
              <p className="font-accent text-xl md:text-2xl text-fg-300 mb-8">
                escalamos operaciones, reducimos costos y aceleramos margen.
              </p>
              
              <p className="text-lg text-fg-300 max-w-2xl mb-8 mx-[100px]">
                Implementamos agentes, automatizaciones y data pipelines que conectan tus herramientas y 
                <span className="text-fg-100 font-medium"> bajan tiempos y costos</span> sin perder control ni seguridad.
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
      </section>

      {/* Oferta Estrella */}
      <section id="oferta" className="py-16 bg-bg-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-8">
              <span className="font-accent">Diagnóstico + PoC IA en 14 días</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="stagger-fade p-6 rounded-xl bg-card border border-line-700">
                <CheckCircle className="text-success mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Mapeo Express</h3>
                <p className="text-fg-300 text-sm">Mapa de procesos y quick-wins en 48 h.</p>
              </div>
              
              <div className="stagger-fade p-6 rounded-xl bg-card border border-line-700">
                <Zap className="text-ac-500 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">MVP Funcional</h3>
                <p className="text-fg-300 text-sm">Automatizaciones mínimas viables (RPA/agents) conectadas a tu stack.</p>
              </div>
              
              <div className="stagger-fade p-6 rounded-xl bg-card border border-line-700">
                <TrendingUp className="text-success mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">ROI Medible</h3>
                <p className="text-fg-300 text-sm">Métricas de impacto: tiempo ahorrado, costo/operación y SLA.</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">Servicios</h2>
              <p className="text-lg text-fg-300 max-w-2xl mx-auto">
                Soluciones de IA diseñadas específicamente para PyMEs que buscan resultados inmediatos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} delay={index * 60} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metricas" className="py-16 bg-bg-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-8">
              Resultados típicos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-8 rounded-xl bg-card border border-line-700 stagger-fade">
                <div className="text-4xl font-tight font-bold text-success mb-2">↓ 20-40%</div>
                <div className="text-lg text-fg-100 mb-2">Costos operativos</div>
                <div className="text-sm text-fg-300">en 90 días</div>
              </div>
              
              <div className="p-8 rounded-xl bg-card border border-line-700 stagger-fade">
                <div className="text-4xl font-tight font-bold text-ac-500 mb-2">↑ 5-15 p.p.</div>
                <div className="text-lg text-fg-100 mb-2">Margen operativo</div>
                <div className="text-sm text-fg-300">promedio sector</div>
              </div>
            </div>
            
            <p className="text-sm text-fg-300">Resultados varían según madurez y sector; se definen objetivos específicos en el diagnóstico.</p>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section id="diferencial" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">
                Por qué <span className="font-accent">Auctus Growth</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-card border border-line-700 stagger-fade">
                <TrendingUp className="text-ac-500 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">ROI medible</h3>
                <p className="text-fg-300 text-sm">Métricas por flujo desde el diseño</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-line-700 stagger-fade">
                <Shield className="text-success mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Seguridad completa</h3>
                <p className="text-fg-300 text-sm">On‑prem / VPC; cifrado total</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-line-700 stagger-fade">
                <Server className="text-warning mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Sin fricción</h3>
                <p className="text-fg-300 text-sm">Integración con sistemas legados</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-line-700 stagger-fade">
                <FileText className="text-ac-400 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Sin dependencia</h3>
                <p className="text-fg-300 text-sm">Documentación y traspaso completo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-16 bg-bg-900/30">
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
              {processSteps.map((step, index) => <div key={index} className="flex items-start gap-6 p-6 rounded-xl bg-card border border-line-700 stagger-fade">
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
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-16">
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

      {/* Industries */}
      <section id="industrias" className="py-16 bg-bg-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-tight font-bold text-fg-100 mb-4">
                Industrias especializadas
              </h2>
              <p className="text-lg text-fg-300">
                Experiencia específica en sectores clave de PyMEs
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {industries.map(industry => <button key={industry.name} onClick={() => setSelectedIndustry(industry.name)} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${selectedIndustry === industry.name ? 'bg-primary text-primary-foreground border-primary' : 'bg-bg-800 text-fg-300 border-line-700 hover:border-ac-400/50'}`}>
                  {industry.icon}
                  {industry.name}
                </button>)}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="seguridad" className="py-16">
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
              <div className="p-6 rounded-xl bg-card border border-line-700 stagger-fade">
                <Lock className="text-success mb-4" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Aislamiento completo</h3>
                <p className="text-fg-300 text-sm">Proyectos aislados, cifrado TLS y at‑rest, RBAC por defecto.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-line-700 stagger-fade">
                <Server className="text-ac-500 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Hosting flexible</h3>
                <p className="text-fg-300 text-sm">On‑premises, VPC dedicado o cloud según requerimientos.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-line-700 stagger-fade">
                <FileText className="text-warning mb-4" size={32} />
                <h3 className="text-lg font-semibold text-fg-100 mb-2">Compliance total</h3>
                <p className="text-fg-300 text-sm">DPA, subprocesadores bajo pedido, auditoría de eventos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      

      {/* FAQ */}
      <section id="faq" className="py-16">
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
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-line-700 rounded-xl px-6">
                  <AccordionTrigger className="text-fg-100 hover:text-ac-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-fg-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-bg-900 to-bg-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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
              Sin compromiso · Diagnóstico gratuito si no hay fit
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-950 border-t border-line-700">
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
                  <a href="#servicios" className="text-fg-300 hover:text-fg-100 block underline-link">Lead Generation</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-fg-100 mb-4">Empresa</h4>
                <div className="space-y-2 text-sm">
                  <a href="#proceso" className="text-fg-300 hover:text-fg-100 block underline-link">Proceso</a>
                  <a href="#seguridad" className="text-fg-300 hover:text-fg-100 block underline-link">Seguridad</a>
                  <a href="#faq" className="text-fg-300 hover:text-fg-100 block underline-link">FAQ</a>
                  <a href="#" className="text-fg-300 hover:text-fg-100 block underline-link">LinkedIn</a>
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
                  <p>Buenos Aires, Argentina</p>
                  <p>Madrid, España</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-line-700 mt-8 pt-8 text-center text-sm text-fg-300">
              <p>&copy; 2024 Auctus Growth. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;