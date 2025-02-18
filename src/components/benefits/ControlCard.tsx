import React, { useState, useEffect } from "react";
import { BarChart2, AlertTriangle } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { mockChartData } from "./mockData";

export const ControlCard = () => {
  const [stats, setStats] = useState({
    mean: 75,
    median: 78,
    lowest: 45,
    highest: 98
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        mean: prev.mean + (Math.random() - 0.5),
        median: prev.median + (Math.random() - 0.5),
        lowest: prev.lowest,
        highest: prev.highest
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform">
              <BarChart2 className="w-5 h-5 text-orange-600" />
            </div>
            <span className="font-medium text-gray-700">Análisis de Rendimiento</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/80 p-3 rounded-lg shadow-sm group-hover:bg-orange-50/50 transition-all">
            <div className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform">
              {stats.mean.toFixed(1)}
            </div>
            <div className="text-xs text-gray-500">Media</div>
          </div>
          <div className="bg-white/80 p-3 rounded-lg shadow-sm group-hover:bg-red-50/50 transition-all">
            <div className="text-2xl font-bold text-red-600 group-hover:scale-110 transition-transform">
              {stats.median.toFixed(1)}
            </div>
            <div className="text-xs text-gray-500">Mediana</div>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-lg shadow-sm flex-grow group-hover:bg-orange-50/50 transition-all">
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-600" />
            Distribución de Notas
          </h4>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="url(#gradient)" 
                  strokeWidth={3}
                  dot={{ fill: "#f97316", strokeWidth: 2 }} 
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="text-sm">
              <span className="text-gray-500">Nota más baja: </span>
              <span className="font-medium text-orange-600">{stats.lowest}</span>
            </div>
            <div className="text-sm text-right">
              <span className="text-gray-500">Nota más alta: </span>
              <span className="font-medium text-red-600">{stats.highest}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
