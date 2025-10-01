import painImage from "@assets/generated_images/Stressed_lawyer_depicting_pain_point_4a107cda.png";

export default function PainSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={painImage} 
                alt="Abogado preocupado por falta de clientes"
                className="w-full h-full object-cover"
                data-testid="pain-image"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Sé exactamente lo que estás viviendo...
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Te recibiste con ilusión. Abriste tu estudio. Y te diste cuenta de algo que no te enseñaron en la facultad:{" "}
                <span className="text-foreground font-semibold">los clientes no llegan solos.</span>
              </p>
              <p>
                Ves a otros colegas publicando en LinkedIn, en Instagram... tienen consultas, firman casos, los invitan a dar charlas. 
                Y vos seguís esperando que "se corra la voz".
              </p>
              <p>
                Querés mostrarte, pero te paraliza el miedo: <span className="italic">"¿Y si me ven como vendehumo? ¿Y si digo algo mal? 
                ¿Y si nadie me da bola?"</span>
              </p>
              <p className="text-foreground font-medium">
                La realidad es simple: en el ejercicio privado, si no sos visible, no existís.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
