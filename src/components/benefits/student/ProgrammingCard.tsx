
import React, { useState } from "react";
import { Code2, Play, CheckCircle2, Bug, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProgrammingCard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { code: "def fibonacci(n):", explanation: "Definición de la función" },
    { code: "  if n <= 1:", explanation: "Caso base para n = 0 o 1" },
    { code: "    return n", explanation: "Retorno del caso base" },
    { code: "  return fibonacci(n-1) + fibonacci(n-2)", explanation: "Llamada recursiva" }
  ];

  return (
    <div className="h-full p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-purple-600" />
            </div>
            <span className="font-medium text-gray-700">Análisis de Código</span>
          </div>
          <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            Python
          </span>
        </div>

        <div className="bg-white/80 p-4 rounded-lg shadow-sm space-y-4 flex-grow group-hover:bg-purple-50/50 transition-all">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  index === currentStep
                    ? "bg-purple-100 -translate-x-0"
                    : "bg-gray-50 translate-x-2"
                }`}
              >
                <code className="text-sm font-mono text-purple-700">
                  {step.code}
                </code>
                {index === currentStep && (
                  <p className="text-sm text-purple-600 mt-2 animate-fade-down">
                    {step.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
            <span className="text-sm text-purple-700">Progreso</span>
            <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="group-hover:bg-purple-50 transition-colors"
            onClick={() => setCurrentStep(0)}
          >
            <Bug className="w-4 h-4 mr-2" /> Reiniciar
          </Button>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:from-purple-500 group-hover:to-indigo-500"
            onClick={() => setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))}
          >
            {currentStep === steps.length - 1 ? (
              <>
                <Play className="w-4 h-4 mr-2" /> Ejecutar
              </>
            ) : (
              <>
                <ArrowRight className="w-4 h-4 mr-2" /> Siguiente
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
