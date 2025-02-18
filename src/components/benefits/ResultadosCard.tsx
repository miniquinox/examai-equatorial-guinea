import React, { useState, useEffect } from "react";
import { FileCheck, Target, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResultadosCard = () => {
  const [grade, setGrade] = useState(0);
  const [reviewed, setReviewed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrade(prev => (prev < 85 ? prev + 1 : 85));
      setReviewed(prev => (prev < 45 ? prev + 1 : 45));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform">
              <FileCheck className="w-5 h-5 text-purple-600" />
            </div>
            <span className="font-medium text-gray-700">Iniciar Calificación</span>
          </div>
          <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full group-hover:bg-purple-200 transition-colors">
            En Progreso
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 animate-fade-up">
          <div className="bg-white/80 p-3 rounded-lg shadow-sm group-hover:bg-purple-50/50 transition-all">
            <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform">
              {grade}%
            </div>
            <div className="text-xs text-gray-500">Promedio Actual</div>
          </div>
          <div className="bg-white/80 p-3 rounded-lg shadow-sm group-hover:bg-blue-50/50 transition-all">
            <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform">
              {reviewed}/60
            </div>
            <div className="text-xs text-gray-500">Exámenes Revisados</div>
          </div>
        </div>

        <div className="space-y-3 flex-grow">
          <div className="bg-white/80 p-4 rounded-lg shadow-sm group-hover:bg-purple-50/50 transition-all">
            <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-purple-600" />
              Control de Calificación
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Precisión de IA</span>
                  <span className="text-purple-600">98%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Revisión Manual</span>
                  <span className="text-blue-600">75%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <Button variant="outline" className="flex-1 group-hover:bg-purple-50 transition-colors">
            <Clock className="w-4 h-4 mr-2" /> Pausar
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500">
            <Zap className="w-4 h-4 mr-2" /> Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};
