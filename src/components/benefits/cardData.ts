
import { ResultadosCard } from "./ResultadosCard";
import { CalificacionCard } from "./CalificacionCard";
import { ControlCard } from "./ControlCard";
import { ConfianzaCard } from "./ConfianzaCard";
import { DemoCard } from "./DemoCard";
import { RealTimeCard } from "./student/RealTimeCard";
import { FeedbackCard } from "./student/FeedbackCard";
import { ProgrammingCard } from "./student/ProgrammingCard";
import { ProgressCard } from "./student/ProgressCard";
import { DifficultCard } from "./student/DifficultCard";

export const professorCards = [
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
  {
    title: "Demo Examen en Minutos",
    description: "Crea exámenes de práctica con un solo clic para que tus estudiantes se preparen mejor.",
    Component: DemoCard,
  }
];

export const studentCards = [
  {
    title: "Corrección en Tiempo Real",
    description: "Recibe retroalimentación instantánea mientras resuelves los problemas.",
    Component: RealTimeCard,
  },
  {
    title: "Feedback Detallado en Cada Paso",
    description: "Entiende exactamente dónde te equivocaste y cómo mejorar.",
    Component: FeedbackCard,
  },
  {
    title: "Análisis Paso a Paso en Programación",
    description: "Visualiza y comprende cada línea de código con explicaciones detalladas.",
    Component: ProgrammingCard,
  },
  {
    title: "Seguimiento de Tu Progreso",
    description: "Monitorea tu evolución y mantente motivado con estadísticas en tiempo real.",
    Component: ProgressCard,
  },
  {
    title: "Identifica Temas Difíciles",
    description: "Descubre qué áreas necesitan más atención y recibe ayuda personalizada.",
    Component: DifficultCard,
  }
];
