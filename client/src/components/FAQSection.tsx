import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Y si no tengo tiempo? Trabajo todo el día en el estudio",
      answer: "Entiendo perfectamente. Por eso el sistema está diseñado para ocuparte máximo 30 minutos al día. Las plantillas están listas, los prompts de IA escriben por vos, el calendario ya está armado. Solo tenés que aplicar. La mayoría de abogados del curso trabajan jornadas completas y aún así logran resultados."
    },
    {
      question: "¿Y si me da vergüenza grabarme o aparecer en cámara?",
      answer: "No necesitás grabarte en video si no querés. El 80% del contenido que vas a publicar es texto + imagen. Y para los que tienen miedo a la cámara, tengo un módulo específico que te ayuda a superar esa barrera paso a paso, sin presión. Empezás escribiendo, ganás confianza, y después ves si querés dar el siguiente paso."
    },
    {
      question: "¿Funciona si tengo pocos seguidores o recién arranco?",
      answer: "Absolutamente. De hecho, es el momento ideal. No necesitás miles de seguidores para conseguir consultas. Necesitás visibilidad estratégica frente a las personas correctas. Varios abogados del curso consiguieron su primer cliente con menos de 100 seguidores. La clave es el contenido de valor, no la cantidad de likes."
    },
    {
      question: "¿Realmente funciona la IA? ¿No suena robótico?",
      answer: "Los Custom GPTs que incluyo están entrenados específicamente para contenido legal. Escriben con tu voz, usan tu expertise, respetan las normas éticas. No es copy-paste genérico. Es tu conocimiento potenciado con velocidad. Ahorrás horas de redacción sin perder calidad ni personalidad."
    },
    {
      question: "¿Cuánto tarda en llegar la primera consulta?",
      answer: "Varía según tu constancia, pero el promedio es entre 15 y 25 días aplicando el sistema completo. Algunos lo logran antes, otros tardan un poco más. Lo importante es que el 87% de quienes terminan el curso consiguen al menos una consulta en el primer mes. Y si no te pasa, te devuelvo el dinero."
    },
    {
      question: "¿Esto va contra la ética profesional?",
      answer: "Para nada. Hay un módulo entero sobre ética y límites. Te enseño exactamente qué podés publicar, cómo cuidar la confidencialidad, qué evitar. Todo el sistema respeta las normas deontológicas. No es marketing agresivo, es construcción de prestigio profesional."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Las dudas que tenés son las mismas que tuvieron los 200+ abogados que ya pasaron por acá
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card border border-card-border rounded-lg px-6"
              data-testid={`faq-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
