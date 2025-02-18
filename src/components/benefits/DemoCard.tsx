
import React, { useState, useEffect } from "react";
import { Rocket, Timer, Users, CheckCircle2, PlusCircle, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DemoCard = () => {
  const [students, setStudents] = useState(0);
  const [timer, setTimer] = useState(45);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const studentsInterval = setInterval(() => {
      setStudents(prev => (prev < 150 ? prev + 1 : 0));
    }, 100);

    const timerInterval = setInterval(() => {
      setTimer(prev => (prev > 15 ? prev - 1 : 45));
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 0));
    }, 50);

    return () => {
      clearInterval(studentsInterval);
      clearInterval(timerInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="h-full p-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-violet-100 rounded-lg group-hover:scale-110 transition-transform">
              <Rocket className="w-5 h-5 text-violet-600 group-hover:animate-bounce" />
            </div>
            <span className="font-medium text-gray-700">Demo Examen</span>
          </div>
          <span className="text-sm text-violet-600 bg-violet-100 px-3 py-1 rounded-full group-hover:bg-violet-200 transition-colors">
            Listo para Iniciar
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/80 p-3 rounded-lg shadow-sm text-center group-hover:bg-violet-50/50 transition-all overflow-hidden">
            <div className="text-2xl font-bold text-violet-600 group-hover:scale-110 transition-transform">
              {students}
            </div>
            <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <Users className="w-3 h-3" /> Estudiantes
            </div>
          </div>
          <div className="bg-white/80 p-3 rounded-lg shadow-sm text-center group-hover:bg-indigo-50/50 transition-all">
            <div className="text-2xl font-bold text-indigo-600 group-hover:scale-110 transition-transform">
              {timer}m
            </div>
            <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <Timer className="w-3 h-3" /> Duración
            </div>
          </div>
          <div className="bg-white/80 p-3 rounded-lg shadow-sm text-center group-hover:bg-purple-50/50 transition-all">
            <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform">
              20
            </div>
            <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <BookOpen className="w-3 h-3" /> Preguntas
            </div>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-lg shadow-sm space-y-4 flex-grow group-hover:bg-violet-50/50 transition-all">
          <h4 className="font-medium text-gray-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-violet-600" />
            Progreso de Creación
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-violet-50 rounded-lg group-hover:translate-x-2 transition-transform">
              <span className="text-sm text-violet-700">Preguntas Generadas</span>
              <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-violet-50 rounded-lg group-hover:translate-x-4 transition-transform">
              <span className="text-sm text-violet-700">Respuestas Preparadas</span>
              <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all"
                  style={{ width: `${progress * 0.8}%` }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-violet-50 rounded-lg group-hover:translate-x-6 transition-transform">
              <span className="text-sm text-violet-700">Retroalimentación Lista</span>
              <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all"
                  style={{ width: `${progress * 0.6}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="group-hover:bg-violet-50 transition-colors">
            <PlusCircle className="w-4 h-4 mr-2" /> Personalizar
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:from-violet-500 group-hover:to-indigo-500">
            <ArrowRight className="w-4 h-4 mr-2" /> Iniciar Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
