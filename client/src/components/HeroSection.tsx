import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_lawyer_Majo_hero_image_b8b03b1f.png";
import Logo from "./Logo";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-accent to-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Logo Header */}
        <div className="flex justify-center mb-8 md:mb-12">
          <Logo variant="red" width={150} height={50} className="w-[120px] h-[40px] sm:w-[150px] sm:h-[50px]" />
        </div>
        
        {/* Funnel Style - Centered Column Layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-8 w-full">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              De Invisible a Referente Legal en{" "}
              <span className="text-primary">30 Días con IA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Si sos abogado novel y te da vergüenza mostrarte en redes... pero sabés que sin visibilidad no llegan clientes, 
              este es el sistema que necesitás para construir prestigio digital sin parecer vendehumo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-base px-8" 
                onClick={onCtaClick}
                data-testid="button-cta-hero"
              >
                Quiero Empezar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8"
                data-testid="button-learn-more"
              >
                Ver Cómo Funciona
              </Button>
            </div>
            
            {/* Social Proof - Properly Centered */}
            <div className="flex flex-col items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background"
                    data-testid={`avatar-${i}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Más de <span className="font-semibold text-foreground">200+ abogados</span> ya construyeron su prestigio digital
              </p>
            </div>
          </div>
          
          {/* Hero Image - Centered Below Content */}
          <div className="relative mt-12 max-w-2xl w-full">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Profesional legal trabajando con confianza"
                className="w-full h-full object-cover"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}