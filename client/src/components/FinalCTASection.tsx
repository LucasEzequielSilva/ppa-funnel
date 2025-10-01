import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface FinalCTASectionProps {
  onCtaClick?: () => void;
}

export default function FinalCTASection({ onCtaClick }: FinalCTASectionProps) {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
            La Pregunta No Es{" "}
            <span className="text-primary">"¿Puedo Hacerlo?"</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            La pregunta es: <strong className="text-foreground">¿Cuánto más vas a esperar para que los clientes te encuentren?</strong>
          </p>

          <div className="bg-accent rounded-xl p-8 md:p-12 my-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Tenés el título. Tenés el conocimiento. Lo único que te falta es visibilidad.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                En 30 días podés seguir invisible, esperando que "se corra la voz"...
              </p>
              <p className="text-lg font-semibold text-foreground leading-relaxed">
                O podés tener un sistema probado, un calendario listo, y tu primera consulta agendada.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 h-auto flex-1 text-wrap"
              onClick={onCtaClick}
              data-testid="button-cta-final"
            >
              Sí, Quiero Ser Visible y Conseguir Clientes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Acceso inmediato al completar la inscripción</span>
            </div>
          </div>

          <div className="pt-12 border-t border-border mt-16">
            <p className="text-muted-foreground italic">
              "El mejor momento para construir tu prestigio digital fue cuando te recibiste. El segundo mejor momento es hoy."
            </p>
            <p className="text-sm text-muted-foreground mt-4">— Majo, creadora del sistema</p>
          </div>
        </div>
      </div>
    </section>
  );
}
