
import { ResultadosCard } from "./ResultadosCard";
import { CalificacionCard } from "./CalificacionCard";
import { ControlCard } from "./ControlCard";
import { ConfianzaCard } from "./ConfianzaCard";

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
];

export const studentCards = [
  {
    title: "Retroalimentación Instantánea para el Aprendizaje",
    description: "Los estudios demuestran que la retroalimentación rápida ayuda a los estudiantes a aprender más rápido y retener más.",
    Component: ResultadosCard,
  },
  {
    title: "Desglose Detallado de Problemas",
    description: "Nuestra IA explica exactamente dónde te equivocaste, ayudándote a entender tus errores.",
    Component: CalificacionCard,
  },
  {
    title: "Análisis Paso a Paso",
    description: "Para materias difíciles como física o programación, la IA desglosa cada paso y señala los errores.",
    Component: ControlCard,
  },
  {
    title: "Seguimiento de Tu Progreso",
    description: "Accede al portal de análisis para ver el rendimiento de la clase, entender dónde te encuentras y mantenerte motivado para seguir el ritmo de tus compañeros.",
    Component: ConfianzaCard,
  },
];
