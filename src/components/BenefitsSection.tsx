/** @jsxImportSource react */

import React, { useState, useEffect } from "react";
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from "recharts";
import { Button } from "./ui/button";
import { 
  BookOpen, User2, FileCheck, BadgeCheck, ChartBar, BrainCircuit,
  Users, Clock, Award, CheckCircle2, Star, Zap, ShieldCheck,
  FileWarning, BarChart2, Target, AlertTriangle, BookCheck
} from "lucide-react";

const mockChartData = [
  { name: "Ene", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 55 },
  { name: "Abr", value: 60 },
  { name: "May", value: 75 },
];

const ResultadosCard = () => {
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

const CalificacionCard = () => (
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

const ControlCard = () => {
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

const ConfianzaCard = () => (
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

const professorCards: {
  title: string;
  description: string;
  Component: React.FC;
}[] = [
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
    Component: ControlCard,
  },
  {
    title: "Construyendo Confianza en los Estudiantes",
    description: "Los estudiantes confían en sus calificaciones, inspirando un mejor rendimiento académico.",
    Component: ConfianzaCard,
  },
];

const studentCards: {
  title: string;
  description: string;
  Component: React.FC;
}[] = [
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
            const isLastCard = index === 4;
            return (
              <div
                key={card.title}
                className={`${isLastCard ? "lg:col-span-1" : index === 3 ? "lg:col-span-2" : ""} h-full animate-fade-up`}
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
