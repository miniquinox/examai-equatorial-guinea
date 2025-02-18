
import React from "react";
import { AlertTriangle, Brain, Activity, TrendingDown, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DifficultCard = () => {
  const difficultTopics = [
    { topic: "Ecuaciones Diferenciales", error: 75, attempts: 45 },
    { topic: "Límites", error: 60, attempts: 32 },
    { topic: "Integrales", error: 55, attempts: 28 }
  ];

  return (
    <div className="h-full p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-rose-100 rounded-lg group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5 text-rose-600" />
            </div>
            <span className="font-medium text-gray-700">Áreas de Mejora</span>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-lg shadow-sm space-y-4 flex-grow group-hover:bg-rose-50/50 transition-all">
          <h4 className="font-medium text-gray-700 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Temas Difíciles
          </h4>
          
          <div className="space-y-3">
            {difficultTopics.map((topic, index) => (
              <div 
                key={topic.topic}
                className="p-3 bg-rose-50 rounded-lg space-y-2 group-hover:translate-x-2 transition-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-rose-700 font-medium">{topic.topic}</span>
                  <div className="flex items-center gap-2 text-rose-600">
                    <Activity className="w-4 h-4" />
                    <span>{topic.attempts} intentos</span>
                  </div>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all group-hover:animate-pulse"
                    style={{ width: `${topic.error}%` }}
                  />
                </div>
                <div className="flex items-center gap-1 text-xs text-rose-600">
                  <TrendingDown className="w-3 h-3" />
                  <span>{topic.error}% tasa de error</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 group-hover:from-rose-500 group-hover:to-pink-500">
          <BarChart2 className="w-4 h-4 mr-2" /> Ver Análisis Completo
        </Button>
      </div>
    </div>
  );
};
