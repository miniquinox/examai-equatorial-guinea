import React from "react";
import { BookCheck, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ConfianzaCard = () => (
  <div className="h-full p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-pink-100 rounded-lg group-hover:scale-110 transition-transform">
          <BookCheck className="w-5 h-5 text-pink-600" />
        </div>
        <span className="font-medium text-gray-700">Evaluación de Respuesta</span>
      </div>

      <div className="bg-white/80 p-4 rounded-lg shadow-sm space-y-3 flex-grow group-hover:bg-pink-50/50 transition-all">
        <div className="space-y-2">
          <p className="text-sm text-gray-700 font-medium">¿Cuál es la complejidad de QuickSort en el peor caso?</p>
          <div className="p-3 bg-pink-50 rounded-lg">
            <p className="text-sm text-pink-700">
              La complejidad es O(n²). Esto ocurre cuando el pivote siempre es el elemento más pequeño o más grande, resultando en una partición desequilibrada.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 flex-grow bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse" />
            </div>
            <span className="text-sm font-medium text-purple-600 group-hover:scale-110 transition-transform">9.5/10</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Retroalimentación de IA:</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>Explicación clara y concisa</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>Menciona el caso específico</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>Incluye la notación Big O</span>
            </div>
          </div>
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 group-hover:from-pink-500 group-hover:to-purple-500">
        <Award className="w-4 h-4 mr-2" /> Ver Más Detalles
      </Button>
    </div>
  </div>
);
