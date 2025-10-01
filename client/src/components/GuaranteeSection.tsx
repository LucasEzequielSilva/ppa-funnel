import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

interface GuaranteeSectionProps {
  onCtaClick?: () => void;
}

export default function GuaranteeSection({ onCtaClick }: GuaranteeSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Garantía de Cero Riesgo
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Si en 30 días aplicás el sistema completo y no lográs tu primera consulta o no sentís que tu prestigio digital creció, 
            te devolvemos el 100% de tu inversión. Sin preguntas, sin vueltas.
          </p>
        </div>

        <Card className="p-8 bg-primary-foreground text-foreground mb-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">¿Por Qué Esta Garantía?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Porque sé que el sistema funciona. Lo probé yo, lo probaron más de 200 abogados. Si seguís los pasos, 
              los resultados llegan. Y si por alguna razón no funciona para vos, no quiero tu dinero.
            </p>
          </div>
        </Card>

        <Button 
          size="lg" 
          variant="secondary" 
          className="text-lg px-10 py-6 h-auto"
          onClick={onCtaClick}
          data-testid="button-cta-guarantee"
        >
          Empezar Sin Riesgo Ahora
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
