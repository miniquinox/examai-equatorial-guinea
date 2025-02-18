
import { useState } from "react";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from "recharts";
import { Button } from "./ui/button";

const mockChartData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 60 },
  { name: "May", value: 75 },
];

const BenefitsSection = () => {
  const [activePortal, setActivePortal] = useState<"professor" | "student">("professor");

  const professorCards = [
    {
      title: "Instant Grading",
      description: "Professors receive grades within minutes, providing faster feedback to students.",
      preview: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="font-medium mb-3">Start grading</p>
          <div className="flex gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </div>
        </div>
      ),
    },
    {
      title: "Save Time and Money",
      description: "Automate grading to reduce the time spent and cut down on grading costs.",
      preview: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex gap-3">
            <Button className="bg-green-500 hover:bg-green-600">Grade exam</Button>
            <Button>Analytics</Button>
          </div>
        </div>
      ),
    },
    {
      title: "Teach Larger Classes Easily",
      description: "Handle bigger classes without the burden of longer grading times or added costs.",
      preview: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">SQL Exam Demo</h4>
          <p className="text-sm text-gray-600">Questions: 5</p>
          <p className="text-sm text-gray-600">Total Students: 5</p>
        </div>
      ),
    },
    {
      title: "Professor-Driven Grading",
      description: "Professors set custom rubrics, ensuring grading still aligns with their standards.",
      preview: (
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockChartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="url(#gradient)" 
                strokeWidth={2} 
                dot={{ fill: "#9b87f5" }} 
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#9b87f5" />
                  <stop offset="100%" stopColor="#7E69AB" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      title: "Boost Student Learning",
      description: "Detailed feedback and performance data help students improve faster and more effectively.",
      preview: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Question: Primary cause of WWI?</h4>
          <p className="text-sm text-gray-600 mb-2">Score: 6/10</p>
          <p className="text-sm">The assassination of Archduke Franz Ferdinand led to war.</p>
        </div>
      ),
    },
  ];

  const studentCards = [
    {
      title: "Instant Feedback for Learning",
      description: "Studies show quick feedback helps students learn faster and retain more.",
      preview: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Q: Great Depression start?</h4>
          <p className="text-sm">A: The Stock Market Crash of 1929.</p>
        </div>
      ),
    },
    {
      title: "Detailed Problem Breakdown",
      description: "Our AI explains exactly where you went wrong, helping you understand mistakes.",
      preview: (
        <div className="p-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white rounded-lg">
          <p className="text-sm">You did great, but you could have improved on: Showing your steps.</p>
        </div>
      ),
    },
    {
      title: "Step-by-Step Analysis",
      description: "For tough subjects like physics or coding, AI breaks down each step and pinpoints errors.",
      preview: (
        <div className="p-4 bg-gray-900 text-gray-300 rounded-lg font-mono text-sm">
          <div className="space-y-1">
            <div className="text-blue-400">function calculate() {</div>
            <div className="pl-4 text-green-400">return result;</div>
            <div>}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Track Your Progress",
      description: "Access the analytics portal to see class performance, understand where you stand, and stay motivated to keep up with your peers.",
      preview: (
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockChartData}>
              <Bar dataKey="value" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9b87f5" />
                  <stop offset="100%" stopColor="#7E69AB" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      title: "Spot Tough Questions",
      description: "Review class stats, identify hardest questions, and discuss with your professor.",
      preview: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Hardest Questions:</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
            <li>Integration by parts</li>
            <li>Binary search trees</li>
          </ol>
        </div>
      ),
    },
  ];

  const currentCards = activePortal === "professor" ? professorCards : studentCards;

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-gray-100">
            <button
              onClick={() => setActivePortal("professor")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePortal === "professor"
                  ? "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white"
                  : "text-gray-700"
              }`}
            >
              Professors
            </button>
            <button
              onClick={() => setActivePortal("student")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePortal === "student"
                  ? "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white"
                  : "text-gray-700"
              }`}
            >
              Students
            </button>
          </div>
        </div>

        {/* Title and Description */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Benefits Of{" "}
            <span className="gradient-text">
              {activePortal === "professor" ? "Professor" : "Student"} Portal
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {activePortal === "professor"
              ? "The Professor Portal simplifies exam management with real-time analytics."
              : "The student portal simplifies learning with the power of analytics and AI feedback."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((card, index) => (
            <div
              key={card.title}
              className={`card p-6 hover:scale-105 transform transition-all duration-300 animate-fade-up ${
                index >= 3 ? "lg:col-span-3/2" : ""
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              {card.preview}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
