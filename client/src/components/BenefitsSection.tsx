import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonialImage from "@assets/generated_images/Testimonial_student_success_headshot_92d70bf6.png";

export default function BenefitsSection() {
  const testimonials = [
    {
      name: "María José González",
      role: "Abogada Laboral - 2 años de matrícula",
      content: "En 3 semanas me invitaron a dar una clase paga en la universidad. Nunca imaginé que LinkedIn podía abrirme esas puertas. Ahora tengo 3 consultas por semana solo por estar visible.",
      result: "Primera consulta en 18 días"
    },
    {
      name: "Lucas Martínez",
      role: "Abogado Corporativo - Recién recibido",
      content: "Tenía pánico de publicar. Con las plantillas y el sistema de IA, ahora publico 3 veces por semana sin esfuerzo. Mi primer cliente llegó por Instagram, algo que jamás creí posible.",
      result: "De 0 a 400 seguidores en 30 días"
    },
    {
      name: "Carolina Ruiz",
      role: "Abogada de Familia - 1 año de ejercicio",
      content: "El calendario de 30 días fue un game changer. Antes no sabía qué publicar y lo dejaba. Ahora tengo consultas programadas para las próximas 2 semanas. Mi estudio finalmente es rentable.",
      result: "5 clientes nuevos en el primer mes"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Resultados Reales de{" "}
            <span className="text-primary">Abogados Como Vos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            No son casos excepcionales. Son abogados noveles que aplicaron el sistema y transformaron su ejercicio privado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`testimonial-${index}`}>
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-primary/20" />
                <p className="text-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonialImage} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      data-testid={`avatar-${index}`}
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3 mt-3">
                    <p className="text-sm font-medium text-primary">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-accent text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Y Si Vos Sos El Próximo?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La diferencia entre ellos y vos no es el talento. Es tener el sistema correcto y dar el primer paso.
          </p>
        </Card>
      </div>
    </section>
  );
}
