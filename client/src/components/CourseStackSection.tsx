import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, Users, Sparkles, FileText, Video } from "lucide-react";

export default function CourseStackSection() {
  const stack = [
    {
      icon: Video,
      title: "6 Módulos en Video",
      description: "Paso a paso, sin vueltas, directo a la acción",
      value: "USD 297"
    },
    {
      icon: FileText,
      title: "Plantillas de Bio y Posts",
      description: "Copiar, personalizar y publicar en minutos",
      value: "USD 147"
    },
    {
      icon: Calendar,
      title: "Calendario 30 Días",
      description: "Tu contenido planificado sin pensar qué publicar",
      value: "USD 197"
    },
    {
      icon: Sparkles,
      title: "Custom GPTs + Prompts",
      description: "IA que escribe por vos con tu voz legal",
      value: "USD 247"
    },
    {
      icon: BookOpen,
      title: "Tutoriales Técnicos",
      description: "Configurá todo aunque no sepas de tecnología",
      value: "USD 97"
    },
    {
      icon: Users,
      title: "Comunidad Privada",
      description: "Red de abogados que están en tu misma",
      value: "USD 197"
    }
  ];

  const totalValue = stack.reduce((acc, item) => {
    const value = parseInt(item.value.replace(/[^0-9]/g, ''));
    return acc + value;
  }, 0);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Todo Lo Que Necesitás Para{" "}
            <span className="text-primary">Construir Tu Prestigio Digital</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            No es solo un curso. Es un sistema completo que te acompaña desde el día 1 hasta tu primera consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stack.map((item, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`stack-item-${index}`}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground">
                    Valor: <span className="text-foreground">{item.value}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-primary text-primary-foreground text-center">
          <p className="text-lg mb-2">Valor Total del Programa:</p>
          <p className="font-serif text-4xl md:text-5xl font-bold mb-2" data-testid="total-value">
            USD {totalValue}
          </p>
          <p className="text-primary-foreground/80">Todo incluido, sin costos ocultos</p>
        </Card>
      </div>
    </section>
  );
}
