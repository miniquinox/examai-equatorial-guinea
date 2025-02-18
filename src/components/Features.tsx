
import { 
  Pencil, MessageSquare, Database, CheckSquare, Brain, Edit3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Pencil,
      title: "Calificación Precisa con IA",
      description: "Garantizando evaluaciones justas y sin errores para todos los estudiantes.",
      color: "bg-orange-100",
      gradient: "from-orange-500/20 to-rose-500/20"
    },
    {
      icon: MessageSquare,
      title: "Análisis Personalizado del Aprendizaje",
      description: "Ayudando a los estudiantes a comprender sus fortalezas y áreas de mejora.",
      color: "bg-green-100",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Database,
      title: "Seguimiento de Rendimiento e Informes de Equidad",
      description: "Proporcionando datos a las escuelas para garantizar calificaciones justas y comparaciones de rendimiento.",
      color: "bg-blue-100",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: CheckSquare,
      title: "Calificación Personalizada por Profesores",
      description: "Los profesores mantienen el control mientras la IA asegura precisión y consistencia.",
      color: "bg-purple-100",
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: Brain,
      title: "Crea Mejores Exámenes con IA",
      description: "Crea exámenes y tareas personalizadas adaptadas a los estándares curriculares locales.",
      color: "bg-purple-100",
      gradient: "from-fuchsia-500/20 to-purple-500/20"
    },
    {
      icon: Edit3,
      title: "Calificación de Exámenes en Papel",
      description: "Escanea exámenes en papel para una calificación precisa, reduciendo errores y sesgos.",
      color: "bg-pink-100",
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <div className="relative py-24 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Descubre Nuestras Funciones
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Seguridad mejorada, calificación justa y evaluaciones transparentes, proporcionando a los educadores análisis en tiempo real y retroalimentación personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-100/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10 p-8">
                <div className={`${feature.color} w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-primary-600 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
