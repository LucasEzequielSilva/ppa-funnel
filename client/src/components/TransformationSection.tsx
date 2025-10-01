import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import transformationImage from "@assets/generated_images/Lawyer_creating_content_transformation_image_d0ad8559.png";

export default function TransformationSection() {
  const results = [
    "Perfil profesional optimizado que genera confianza",
    "30 días de contenido listo para publicar",
    "Sistema simple de captación sin vender",
    "Primeras consultas reales en tu agenda",
    "Prestigio digital que atrae referidos",
    "Confianza para mostrarte sin vergüenza"
  ];

  return (
    <section className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            En 30 Días, Tu Ejercicio Privado{" "}
            <span className="text-primary">Cambia Para Siempre</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            No es magia. Es un sistema probado que ya usaron más de 200 abogados noveles para pasar de invisibles a referentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={transformationImage} 
                alt="Abogada creando contenido profesional con confianza"
                className="w-full h-full object-cover"
                data-testid="transformation-image"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Esto es lo que vas a lograr:
            </h3>
            {results.map((result, index) => (
              <Card key={index} className="p-4 hover-elevate" data-testid={`result-${index}`}>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground font-medium">{result}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
