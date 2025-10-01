import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingSectionProps {
  onCtaClick?: () => void;
}

export default function PricingSection({ onCtaClick }: PricingSectionProps) {
  const included = [
    "6 Módulos completos en video",
    "Plantillas de bio y posts listas",
    "Calendario 30 días de contenido",
    "Custom GPTs + Prompts de IA",
    "Tutoriales técnicos paso a paso",
    "Acceso a comunidad privada",
    "Actualizaciones de por vida",
    "Soporte por email prioritario"
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <Badge className="mb-4" data-testid="badge-limited">
            <Clock className="w-3 h-3 mr-1" />
            Oferta por Tiempo Limitado
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Acceso Inmediato al{" "}
            <span className="text-primary">Sistema Completo</span>
          </h2>
        </div>

        <Card className="p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-2">Valor completo del programa:</p>
            <p className="text-2xl text-muted-foreground line-through mb-4">USD 1,182</p>
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">Tu inversión hoy:</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-serif font-bold text-primary" data-testid="price">
                  USD 97
                </span>
                <span className="text-xl text-muted-foreground">pago único</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Menos de lo que cobrarías por una consulta. Pero el impacto en tu ejercicio: invaluable.
            </p>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h3 className="font-semibold text-lg mb-6 text-foreground">Todo lo que incluye:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`included-${index}`}>
                  <div className="mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full text-lg py-6 h-auto mb-6"
            onClick={onCtaClick}
            data-testid="button-cta-pricing"
          >
            Empezar Ahora - USD 97
          </Button>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>200+ abogados</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Garantía 30 días</span>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-accent inline-block">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Solo quedan 15 cupos</strong> para mantener la calidad del soporte en la comunidad
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
