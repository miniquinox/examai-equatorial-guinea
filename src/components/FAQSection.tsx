
import { X } from "lucide-react";

const FAQSection = () => {
  const faqData = {
    leftColumn: [
      {
        question: "¿Pueden los estudiantes manipular sus calificaciones?",
        answer: "Nuestra IA previene sesgos, sobornos o favoritismos, asegurando que cada calificación sea ganada."
      },
      {
        question: "¿Puedo enviar exámenes en papel para calificar?",
        answer: "Sí, los estudiantes pueden enviar fotos de sus exámenes escritos a mano para evaluación por IA."
      },
      {
        question: "¿Puede manejar todas las asignaturas?",
        answer: "Sí, desde matemáticas hasta ensayos y programación, ExamAi cubre todas las asignaturas."
      },
      {
        question: "¿Funciona en español y francés?",
        answer: "Sí, admite calificaciones en español, francés, inglés y más idiomas."
      },
      {
        question: "¿Necesito aprobación gubernamental para usarlo?",
        answer: "Los profesores y escuelas pueden comenzar a usar ExamAi de forma independiente."
      }
    ],
    rightColumn: [
      {
        question: "¿Pueden los profesores personalizar la calificación?",
        answer: "Sí, los profesores definen los estándares; la IA asegura la equidad."
      },
      {
        question: "¿Pueden los profesores revisar las calificaciones de la IA?",
        answer: "Sí, cada calificación es ajustable para mantener la integridad de la enseñanza."
      },
      {
        question: "¿Están seguros los datos de los estudiantes?",
        answer: "Sí, ExamAi sigue estrictos estándares de privacidad de datos."
      },
      {
        question: "¿Puede funcionar para escuelas grandes?",
        answer: "Sí, desde pequeñas aldeas hasta grandes universidades."
      },
      {
        question: "¿Puedo imprimir o exportar calificaciones?",
        answer: "Sí, las calificaciones se pueden descargar o compartir en informes escolares."
      }
    ]
  };

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Preguntas frecuentes
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {faqData.leftColumn.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqData.rightColumn.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
