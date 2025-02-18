
import React, { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Target, Award, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockProgressData = [
  { day: 1, score: 65 },
  { day: 2, score: 70 },
  { day: 3, score: 68 },
  { day: 4, score: 75 },
  { day: 5, score: 80 },
  { day: 6, score: 85 },
  { day: 7, score: 88 },
];

export const ProgressCard = () => {
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 85 ? prev + 1 : 85));
      setStreak(prev => (prev < 7 ? prev + 1 : 7));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-medium text-gray-700">Tu Progreso</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-green-600">{streak} días</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/80 p-3 rounded-lg shadow-sm group-hover:bg-green-50/50 transition-all">
            <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform">
              {progress}%
            </div>
            <div className="text-xs text-gray-500">Promedio General</div>
          </div>
          <div className="bg-white/80 p-3 rounded-lg shadow-sm group-hover:bg-emerald-50/50 transition-all">
            <div className="text-2xl font-bold text-emerald-600 group-hover:scale-110 transition-transform">
              Top 15%
            </div>
            <div className="text-xs text-gray-500">Posición en Clase</div>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-lg shadow-sm flex-grow group-hover:bg-green-50/50 transition-all">
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            Evolución Semanal
          </h4>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockProgressData}>
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="url(#progressGradient)" 
                  strokeWidth={3}
                  dot={{ fill: "#059669", strokeWidth: 2 }} 
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 group-hover:from-green-500 group-hover:to-emerald-500">
          <Award className="w-4 h-4 mr-2" /> Ver Detalles
        </Button>
      </div>
    </div>
  );
};
