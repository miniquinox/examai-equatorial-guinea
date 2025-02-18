
import React, { useState, useEffect } from "react";
import { Zap, Clock, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RealTimeCard = () => {
  const [time, setTime] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev < 15 ? prev + 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkAnswer = () => {
    setIsCorrect(answer.toLowerCase().includes("o(n)"));
  };

  return (
    <div className="h-full p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-100 rounded-lg group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-cyan-600 animate-pulse" />
            </div>
            <span className="font-medium text-gray-700">Corrección en Tiempo Real</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-medium">{time}s</span>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-lg shadow-sm space-y-3 flex-grow group-hover:bg-cyan-50/50 transition-all">
          <div className="space-y-2">
            <p className="text-sm text-gray-700 font-medium">¿Cuál es la complejidad temporal del algoritmo de búsqueda binaria?</p>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full p-3 rounded-lg border border-cyan-100 focus:ring-2 focus:ring-cyan-200 focus:border-cyan-300 text-sm resize-none transition-all"
              placeholder="Escribe tu respuesta aquí..."
              rows={3}
            />
            {isCorrect !== null && (
              <div className={`flex items-center gap-2 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'} animate-fade-down`}>
                {isCorrect ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
                <span>{isCorrect ? '¡Correcto!' : 'Intenta de nuevo'}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between p-2 bg-cyan-50 rounded-lg animate-fade-up">
            <span className="text-sm text-cyan-700">Tiempo de Respuesta</span>
            <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all"
                style={{ width: `${(time / 15) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="group-hover:bg-cyan-50 transition-colors" onClick={() => setAnswer("")}>
            <RotateCcw className="w-4 h-4 mr-2" /> Reiniciar
          </Button>
          <Button 
            className="bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500"
            onClick={checkAnswer}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" /> Verificar
          </Button>
        </div>
      </div>
    </div>
  );
};
