import React from "react";
import { ShieldCheck, FileWarning } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CalificacionCard = () => (
  <div className="h-full p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-100 rounded-lg group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="font-medium text-gray-700">Verificación de Integridad</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/80 p-4 rounded-lg shadow-sm group-hover:bg-emerald-50/50 transition-all">
          <div className="text-sm text-gray-500 mb-1">Detección de Trampas</div>
          <div className="text-2xl font-bold text-emerald-600 group-hover:scale-110 transition-transform">99.9%</div>
        </div>
        <div className="bg-white/80 p-4 rounded-lg shadow-sm group-hover:bg-teal-50/50 transition-all">
          <div className="text-sm text-gray-500 mb-1">Confianza</div>
          <div className="text-2xl font-bold text-teal-600 group-hover:scale-110 transition-transform">100%</div>
        </div>
      </div>

      <div className="bg-white/80 p-4 rounded-lg shadow-sm space-y-3 flex-grow group-hover:bg-emerald-50/50 transition-all">
        <h4 className="font-medium text-gray-700 flex items-center gap-2">
          <FileWarning className="w-4 h-4 text-emerald-600" />
          Alertas de Integridad
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm p-2 bg-emerald-50 rounded-lg">
            <span className="text-emerald-700">Copias Detectadas</span>
            <span className="font-medium text-emerald-600">0</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2 bg-emerald-50 rounded-lg">
            <span className="text-emerald-700">Plagio Detectado</span>
            <span className="font-medium text-emerald-600">0</span>
          </div>
          <div className="flex items-center justify-between text-sm p-2 bg-emerald-50 rounded-lg">
            <span className="text-emerald-700">Intentos Sospechosos</span>
            <span className="font-medium text-emerald-600">0</span>
          </div>
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:from-emerald-500 group-hover:to-teal-500">
        <ShieldCheck className="w-4 h-4 mr-2" /> Sistema Activo
      </Button>
    </div>
  </div>
);
