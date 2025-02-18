
import React, { useState } from "react";
import { MessageSquare, ThumbsUp, ThumbsDown, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeedbackCard = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="h-full p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-amber-100 rounded-lg group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 text-amber-600" />
            </div>
            <span className="font-medium text-gray-700">Feedback Detallado</span>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-lg shadow-sm space-y-4 flex-grow group-hover:bg-amber-50/50 transition-all">
          <div className="space-y-2">
            <p className="text-sm text-gray-700 font-medium">Resolución de Ecuación Diferencial:</p>
            <div className="p-3 bg-amber-50 rounded-lg">
              <p className="text-sm text-amber-700 font-mono">dy/dx + 2y = x²</p>
            </div>
            
            {showFeedback ? (
              <div className="space-y-3 animate-fade-down">
                <div className="flex items-start gap-2 text-sm p-2 bg-green-50 rounded-lg group-hover:translate-x-2 transition-transform">
                  <ThumbsUp className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <span className="font-medium text-green-700">Correcto:</span>
                    <p className="text-green-600">Identificaste el factor integrante e^(2x)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 text-sm p-2 bg-red-50 rounded-lg group-hover:translate-x-4 transition-transform">
                  <ThumbsDown className="w-4 h-4 text-red-600 mt-1" />
                  <div>
                    <span className="font-medium text-red-700">Mejorable:</span>
                    <p className="text-red-600">Revisa la integración por partes en el último paso</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm p-2 bg-amber-50 rounded-lg group-hover:translate-x-6 transition-transform">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-1" />
                  <div>
                    <span className="font-medium text-amber-700">Sugerencia:</span>
                    <p className="text-amber-600">Prueba resolver primero la homogénea y luego usa variación de parámetros</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 group-hover:from-amber-500 group-hover:to-orange-500"
          onClick={() => setShowFeedback(!showFeedback)}
        >
          <CheckCircle2 className="w-4 h-4 mr-2" />
          {showFeedback ? "Ocultar Feedback" : "Ver Feedback"}
        </Button>
      </div>
    </div>
  );
};
