
import { 
  Pencil, MessageSquare, Database, CheckSquare, Brain, Edit3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Pencil,
      title: "Accurate, AI-Powered Grading",
      description: "Guaranteeing fair and error-free assessments for all students.",
      color: "bg-orange-100"
    },
    {
      icon: MessageSquare,
      title: "Personalized Learning Insights",
      description: "Helping students understand their strengths and areas to improve.",
      color: "bg-green-100"
    },
    {
      icon: Database,
      title: "Performance Tracking & Fairness Reports",
      description: "Giving schools data to ensure fair grading and performance comparisons.",
      color: "bg-blue-100"
    },
    {
      icon: CheckSquare,
      title: "Professor-Driven Custom Grading",
      description: "Professors stay in control while AI ensures precision and consistency.",
      color: "bg-purple-100"
    },
    {
      icon: Brain,
      title: "Build Better Exams with AI",
      description: "Create custom exams and homework tailored to local curriculum standards.",
      color: "bg-purple-100"
    },
    {
      icon: Edit3,
      title: "Image-Based Grading for Paper Exams",
      description: "Scan paper exams for accurate grading, reducing errors and bias.",
      color: "bg-pink-100"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Discover our Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhanced security, fair grading, and transparent assessments, providing educators with real-time analytics and personalized feedback.
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
