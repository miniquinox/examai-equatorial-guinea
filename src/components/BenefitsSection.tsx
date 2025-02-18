
import React, { useState } from "react";
import { professorCards, studentCards } from "./benefits/cardData";

const BenefitsSection: React.FC = () => {
  const [activePortal, setActivePortal] = useState<"professor" | "student">("professor");

  return (
    <div className="relative py-16 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-white/30 backdrop-blur-lg shadow-lg">
            <button
              onClick={() => setActivePortal("professor")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePortal === "professor"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Profesores
            </button>
            <button
              onClick={() => setActivePortal("student")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePortal === "student"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Estudiantes
            </button>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Beneficios del Portal de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {activePortal === "professor" ? "Profesores" : "Estudiantes"}
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {activePortal === "professor"
              ? "El Portal del Profesor simplifica la gestión de exámenes con análisis en tiempo real."
              : "El portal del estudiante simplifica el aprendizaje con el poder del análisis y la retroalimentación de IA."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activePortal === "professor" ? professorCards : studentCards).map((card, index) => {
            const CardComponent = card.Component;
            return (
              <div
                key={card.title}
                className={`${index === 3 ? "lg:col-span-2" : ""} h-full animate-fade-up`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardComponent />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
