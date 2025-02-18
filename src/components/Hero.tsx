
import { BarChart3, Users, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl font-bold mb-6">
            Bringing Fair, Smart, and Transparent Grading to{" "}
            <span className="gradient-text">Equatorial Guinea</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Equatorial Guinea is leading Africa in AI-powered education—ensuring fair, transparent, and accurate assessments for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="card p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Professor Dashboard</h3>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                Professor
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BarChart3 className="text-green-500" />
                <span>Total exams created: 17</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-green-500" />
                <span>Total Exams Assigned: 34</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="text-green-500" />
                <span>Total Questions Assigned: 150</span>
              </div>
            </div>
          </div>

          <div className="card p-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-bold text-lg mb-4">Math101 Quiz Week 1</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span>Professor: Mr Doren</span>
              </div>
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-white"
                  ></div>
                ))}
              </div>
              <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Student
              </button>
            </div>
          </div>

          <div className="card p-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="font-bold text-lg mb-4">Your students</h3>
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">student{i + 1}@example.com</p>
                    <p className="text-xs text-gray-500">Last active: 2h ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
