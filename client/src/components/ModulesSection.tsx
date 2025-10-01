import { Card } from "@/components/ui/card";
import { Target, Lightbulb, MessageSquare, Zap, TrendingUp, Shield } from "lucide-react";

export default function ModulesSection() {
  const modules = [
    {
      icon: Target,
      number: "01",
      title: "Mentalidad y Posicionamiento",
      description: "Dejá la vergüenza atrás. Descubrí cómo mostrarte con autoridad sin sentirte vendehumo. Tu ejercicio privado empieza con la cabeza en su lugar."
    },
    {
      icon: Lightbulb,
      title: "Perfil Magnético",
      number: "02",
      description: "Transformá tu LinkedIn e Instagram en imanes de clientes. Bio optimizada, foto profesional, destacados estratégicos. Todo listo para copiar y aplicar."
    },
    {
      icon: MessageSquare,
      number: "03",
      title: "Contenido con IA",
      description: "Generá posts legales en 5 minutos usando Custom GPTs. Prompts probados que escriben con tu voz y posicionan tu expertise sin esfuerzo."
    },
    {
      icon: Zap,
      number: "04",
      title: "Sistema de Publicación",
      description: "Calendario de 30 días listo. Sabés qué publicar, cuándo y cómo. Nunca más 'no sé qué poner'. Tu consistencia asegurada desde el día 1."
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Captación sin Vender",
      description: "Convertí seguidores en consultas reales. Lead magnets, llamadas a la acción sutiles, mensajes que funcionan. Prestigio que genera ingresos."
    },
    {
      icon: Shield,
      number: "06",
      title: "Ética y Límites",
      description: "Qué decir, qué no, cómo cuidar la confidencialidad. Publicá con seguridad, respetá las normas, construí reputación sin riesgos."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            El Sistema Completo en{" "}
            <span className="text-primary">6 Módulos Accionables</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada módulo es un paso concreto. Sin teoría que no sirve. Solo acciones que te acercan a tus primeras consultas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="p-8 hover-elevate" data-testid={`module-${index}`}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <module.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary">{module.number}</span>
                    <h3 className="font-serif text-xl font-bold text-foreground">{module.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
