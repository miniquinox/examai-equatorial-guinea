/** @jsxImportSource react */

import React, { useState } from "react";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from "recharts";
import { Button } from "./ui/button";
import { BookOpen, User2, FileCheck, BadgeCheck, ChartBar, BrainCircuit } from "lucide-react";

const mockChartData = [
  { name: "Ene", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 55 },
  { name: "Abr", value: 60 },
  { name: "May", value: 75 },
];

interface CardData {
  title: string;
  description: string;
  Component: React.FC;
}

const ResultadosCard = () => (
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
      <div className="space-y-3 flex-grow">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:animate-pulse" />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="group-hover:text-purple-600 transition-colors">75% Completado</span>
          <span className="group-hover:text-blue-600 transition-colors">45/60 Exámenes</span>
        </div>
      </div>
      <div className="flex gap-3 mt-auto">
        <Button variant="outline" className="flex-1 group-hover:bg-purple-50 transition-colors">Cancelar</Button>
        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500">Continuar</Button>
      </div>
    </div>
  </div>
);

const CalificacionCard = () => (
  <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-inner">
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <BadgeCheck className="w-5 h-5 text-green-600" />
          </div>
          <span className="font-medium text-gray-700">Verificación de Integridad</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500 mb-1">Calificaciones Verificadas</div>
          <div className="text-2xl font-bold text-green-600">98.5%</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500 mb-1">Tasa de Confianza</div>
          <div className="text-2xl font-bold text-teal-600">99.9%</div>
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600">
        Verificar Exámenes
      </Button>
    </div>
  </div>
);

const GestionCard = () => (
  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-inner">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <User2 className="w-5 h-5 text-blue-600" />
          </div>
          <span className="font-medium text-gray-700">Demo Examen SQL</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-blue-600">250</div>
          <div className="text-xs text-gray-500">Estudiantes</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-indigo-600">15</div>
          <div className="text-xs text-gray-500">Preguntas</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center">
          <div className="text-3xl font-bold text-purple-600">98%</div>
          <div className="text-xs text-gray-500">Precisión</div>
        </div>
      </div>
    </div>
  </div>
);

const ControlCard = () => (
  <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-inner">
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 rounded-lg">
            <ChartBar className="w-5 h-5 text-orange-600" />
          </div>
          <span className="font-medium text-gray-700">Análisis de Rendimiento</span>
        </div>
      </div>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockChartData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="url(#gradient)" 
              strokeWidth={3}
              dot={{ fill: "#ff8a4c", strokeWidth: 2 }} 
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff8a4c" />
                <stop offset="100%" stopColor="#ff4c4c" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

const ConfianzaCard = () => (
  <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-inner">
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-pink-100 rounded-lg">
          <BrainCircuit className="w-5 h-5 text-pink-600" />
        </div>
        <span className="font-medium text-gray-700">Evaluación de Respuesta</span>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
        <p className="text-sm text-gray-700 font-medium">¿Cuál fue la causa principal de la independencia?</p>
        <div className="flex items-center space-x-2">
          <div className="h-2 flex-grow bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[90%] bg-gradient-to-r from-pink-500 to-purple-500" />
          </div>
          <span className="text-sm font-medium text-purple-600">9/10</span>
        </div>
        <p className="text-sm text-gray-600 italic">
          "Excelente comprensión de la historia de Guinea Ecuatorial"
        </p>
      </div>
    </div>
  </div>
);

const RetroalimentacionCard = () => (
  <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-inner">
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-emerald-100 rounded-lg">
          <BookOpen className="w-5 h-5 text-emerald-600" />
        </div>
        <span className="font-medium text-gray-700">Retroalimentación en Tiempo Real</span>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Historia de América</span>
          <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
            En Revisión
          </span>
        </div>
        <p className="text-sm text-gray-600">
          P: ¿Cuándo comenzó la Gran Depresión?
        </p>
        <div className="bg-emerald-50 p-3 rounded-lg">
          <p className="text-sm text-emerald-700">
            R: La Caída de la Bolsa de 1929.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const DesgloseCard = () => (
  <div className="p-6 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-xl shadow-lg">
    <div className="space-y-4">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <FileCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium">Análisis de Respuesta</span>
        </div>
        <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
          98% Precisión
        </span>
      </div>
      <div className="space-y-3">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white">
          <p className="text-sm mb-2">Puntos fuertes:</p>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Excelente comprensión del concepto</li>
            <li>Explicación clara y concisa</li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white">
          <p className="text-sm mb-2">Áreas de mejora:</p>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Mostrar más pasos en los cálculos</li>
            <li>Incluir unidades en las respuestas</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const AnalisisCard = () => (
  <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
    <div className="space-y-4">
      <div className="flex items-center justify-between text-gray-300">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-800 rounded-lg">
            <FileCheck className="w-5 h-5 text-blue-400" />
          </div>
          <span className="font-medium">Análisis de Código</span>
        </div>
      </div>
      <div className="font-mono text-sm space-y-2">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="space-y-1">
            <div className="text-blue-400">{'function calculateArea() {'}</div>
            <div className="pl-4 text-green-400">{'let width = 10;'}</div>
            <div className="pl-4 text-green-400">{'let height = 5;'}</div>
            <div className="pl-4 text-orange-400">{'return width * height;'}</div>
            <div className="text-blue-400">{'}'}</div>
          </div>
        </div>
        <div className="bg-blue-900/20 p-3 rounded-lg text-blue-300">
          <p>✓ Función bien estructurada</p>
          <p>✓ Variables claramente definidas</p>
        </div>
      </div>
    </div>
  </div>
);

const SeguimientoCard = () => (
  <div className="h-full p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
    <div className="h-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-violet-100 rounded-lg group-hover:scale-110 transition-transform">
            <ChartBar className="w-5 h-5 text-violet-600" />
          </div>
          <span className="font-medium text-gray-700">Progreso del Estudiante</span>
        </div>
      </div>
      <div className="h-40 flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockChartData}>
            <Bar 
              dataKey="value" 
              fill="url(#gradientBar)" 
              radius={[4, 4, 0, 0]} 
              className="group-hover:animate-pulse"
            />
            <defs>
              <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-3 rounded-lg shadow-sm text-center group-hover:bg-violet-50 transition-all">
          <div className="text-2xl font-bold text-violet-600 group-hover:scale-110 transition-transform">85%</div>
          <div className="text-xs text-gray-500">Promedio</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center group-hover:bg-violet-50 transition-all">
          <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform">92%</div>
          <div className="text-xs text-gray-500">Mejor Nota</div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm text-center group-hover:bg-violet-50 transition-all">
          <div className="text-2xl font-bold text-indigo-600 group-hover:scale-110 transition-transform">+15%</div>
          <div className="text-xs text-gray-500">Mejora</div>
        </div>
      </div>
    </div>
  </div>
);

const PreguntasCard = () => (
  <div className="h-full col-span-2 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-inner backdrop-blur-lg border border-white/20 group hover:-translate-y-1 transition-all duration-300">
    <div className="h-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-amber-100 rounded-lg group-hover:scale-110 transition-transform">
            <BrainCircuit className="w-5 h-5 text-amber-600" />
          </div>
          <span className="font-medium text-gray-700">Análisis de Dificultad</span>
        </div>
      </div>
      <div className="space-y-3 flex-grow">
        <div className="bg-white p-4 rounded-lg shadow-sm group-hover:bg-amber-50/50 transition-all">
          <h4 className="font-medium text-gray-700 mb-3">Preguntas más Desafiantes:</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Integración por partes</span>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full group-hover:animate-pulse" />
                </div>
                <span className="text-sm text-orange-600 group-hover:scale-110 transition-transform">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Árboles binarios</span>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full group-hover:animate-pulse" />
                </div>
                <span className="text-sm text-orange-600 group-hover:scale-110 transition-transform">66%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const professorCards: CardData[] = [
  {
    title: "Resultados Rápidos y Precisos",
    description: "Asegurando que los estudiantes reciban calificaciones correctas sin demoras.",
    Component: ResultadosCard,
  },
  {
    title: "Calificación Confiable, Sin Corrupción",
    description: "La IA previene la manipulación de calificaciones, favoritismo o sobornos.",
    Component: CalificacionCard,
  },
  {
    title: "Gestión Justa de Clases Numerosas",
    description: "La calificación se mantiene objetiva, incluso con cientos de estudiantes.",
    Component: GestionCard,
  },
  {
    title: "Los Profesores Mantienen el Control",
    description: "Los profesores definen los estándares, la IA asegura que cada estudiante sea tratado por igual.",
    Component: ControlCard,
  },
  {
    title: "Construyendo Confianza en los Estudiantes",
    description: "Los estudiantes confían en sus calificaciones, inspirando un mejor rendimiento académico.",
    Component: ConfianzaCard,
  },
];

const studentCards: CardData[] = [
  {
    title: "Retroalimentación Instantánea para el Aprendizaje",
    description: "Los estudios demuestran que la retroalimentación rápida ayuda a los estudiantes a aprender más rápido y retener más.",
    Component: RetroalimentacionCard,
  },
  {
    title: "Desglose Detallado de Problemas",
    description: "Nuestra IA explica exactamente dónde te equivocaste, ayudándote a entender tus errores.",
    Component: DesgloseCard,
  },
  {
    title: "Análisis Paso a Paso",
    description: "Para materias difíciles como física o programación, la IA desglosa cada paso y señala los errores.",
    Component: AnalisisCard,
  },
  {
    title: "Seguimiento de Tu Progreso",
    description: "Accede al portal de análisis para ver el rendimiento de la clase, entender dónde te encuentras y mantenerte motivado para seguir el ritmo de tus compañeros.",
    Component: SeguimientoCard,
  },
  {
    title: "Identifica las Preguntas Difíciles",
    description: "Revisa las estadísticas de la clase, identifica las preguntas más difíciles y discútelas con tu profesor.",
    Component: PreguntasCard,
  },
];

const BenefitsSection: React.FC = () => {
  const [activePortal, setActivePortal] = useState<"professor" | "student">("professor");

  return (
    <div className="relative py-16 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-white/30 backdrop-blur-lg shadow-lg">
            <button
              onClick={() => setActivePortal("professor")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePortal === "professor"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Profesores
            </button>
            <button
              onClick={() => setActivePortal("student")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePortal === "student"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Estudiantes
            </button>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Beneficios del Portal de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {activePortal === "professor" ? "Profesores" : "Estudiantes"}
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {activePortal === "professor"
              ? "El Portal del Profesor simplifica la gestión de exámenes con análisis en tiempo real."
              : "El portal del estudiante simplifica el aprendizaje con el poder del análisis y la retroalimentación de IA."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activePortal === "professor" ? professorCards : studentCards).map((card, index) => {
            const CardComponent = card.Component;
            return (
              <div
                key={card.title}
                className={`${index >= 3 ? "lg:col-span-2" : ""} h-full animate-fade-up`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardComponent />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
