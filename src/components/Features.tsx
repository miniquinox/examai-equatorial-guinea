
import { 
  Pencil, MessageSquare, Database, CheckSquare, Brain, Edit3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Pencil,
      title: "Automated Grading",
      description: "Automate grading to save professors hours, giving them more time to focus on teaching and engaging with students.",
      color: "bg-orange-100"
    },
    {
      icon: MessageSquare,
      title: "Student Feedback",
      description: "Deliver personalized, instant feedback that helps students understand their progress and areas for improvement.",
      color: "bg-green-100"
    },
    {
      icon: Database,
      title: "Data Analytics Portal",
      description: "Analyze student performance, identify challenging questions, and enhance learning with data-driven insights.",
      color: "bg-blue-100"
    },
    {
      icon: CheckSquare,
      title: "Professor-Guided Rubrics",
      description: "Ensure grading meets course goals by using customizable rubrics tailored to each professor's unique standards.",
      color: "bg-purple-100"
    },
    {
      icon: Brain,
      title: "Create Quizzes with AI",
      description: "Effortlessly create exams, quizzes, or homework using AI—upload notes, past exams, or write content in one click!",
      color: "bg-purple-100"
    },
    {
      icon: Edit3,
      title: "Handwritten Grading",
      description: "Grade handwritten assessments effortlessly with AI, using professor-defined rubrics for accurate results.",
      color: "bg-pink-100"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Discover our Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhanced security, and automated grading, providing educators with real-time analytics and personalized feedback.
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
