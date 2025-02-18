import { 
  Pencil, MessageSquare, Database, CheckSquare, Brain, Edit3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Pencil,
      title: "Calificación Precisa con IA",
      description: "Garantizando evaluaciones justas y sin errores para todos los estudiantes.",
      color: "bg-orange-100"
    },
    {
      icon: MessageSquare,
      title: "Análisis Personalizado del Aprendizaje",
      description: "Ayudando a los estudiantes a comprender sus fortalezas y áreas de mejora.",
      color: "bg-green-100"
    },
    {
      icon: Database,
      title: "Seguimiento de Rendimiento e Informes de Equidad",
      description: "Proporcionando datos a las escuelas para garantizar calificaciones justas y comparaciones de rendimiento.",
      color: "bg-blue-100"
    },
    {
      icon: CheckSquare,
      title: "Calificación Personalizada por Profesores",
      description: "Los profesores mantienen el control mientras la IA asegura precisión y consistencia.",
      color: "bg-purple-100"
    },
    {
      icon: Brain,
      title: "Crea Mejores Exámenes con IA",
      description: "Crea exámenes y tareas personalizadas adaptadas a los estándares curriculares locales.",
      color: "bg-purple-100"
    },
    {
      icon: Edit3,
      title: "Calificación de Exámenes en Papel",
      description: "Escanea exámenes en papel para una calificación precisa, reduciendo errores y sesgos.",
      color: "bg-pink-100"
    }
  ];

  return (
    <div className="relative py-16 px-4 bg-gray-50 overflow-hidden">
      <div 
        className="gradient-blob-1 w-[600px] h-[600px] -bottom-40 left-1/2 -translate-x-1/2 bg-[#D3E4FD]"
        style={{ transform: 'rotate(-45deg)' }}
      />
      <div 
        className="gradient-blob-2 w-[500px] h-[500px] -top-32 right-0 bg-[#FFDEE2]"
        style={{ transform: 'rotate(30deg)' }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Descubre Nuestras Funciones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seguridad mejorada, calificación justa y evaluaciones transparentes, proporcionando a los educadores análisis en tiempo real y retroalimentación personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card p-6 hover:scale-105 transform transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className={`feature-icon ${feature.color} mb-4`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
