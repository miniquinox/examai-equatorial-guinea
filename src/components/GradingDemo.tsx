import { useState, useEffect } from "react";

interface Exam {
  question: string;
  rubrics: string[];
}

const exams: Record<string, Exam> = {
  math: {
    question: "¿Cuál es la derivada de 3x^2 - 2x - 5?",
    rubrics: [
      "Respuesta correcta: 6x - 2 (5pts)",
      "Muestra los pasos sin saltar ninguno importante (5pts)"
    ]
  },
  french: {
    question: "Traduce: 'Guinea Ecuatorial lidera África en innovación educativa.'",
    rubrics: [
      "Traducción correcta al francés (5pts)",
      "Precisión en gramática y puntuación (5pts)"
    ]
  },
  history: {
    question: "¿Cuándo obtuvo Guinea Ecuatorial su independencia y quién fue su primer presidente?",
    rubrics: [
      "Fecha y líder correctos (5pts)",
      "Contexto e importancia histórica (5pts)"
    ]
  },
  science: {
    question: "Explica la importancia de la biodiversidad de Guinea Ecuatorial en el Golfo de Guinea.",
    rubrics: [
      "Precisión científica (5pts)",
      "Análisis de impacto ambiental (5pts)"
    ]
  }
};

const GradingDemo = () => {
  const [activeSubject, setActiveSubject] = useState<keyof typeof exams>("math");
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const validateInputs = () => {
    return answer.trim() !== "" && email.includes("@");
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      alert("Por favor, complete ambos campos correctamente.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://us-central1-examai-2024.cloudfunctions.net/gradeExam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: exams[activeSubject].question,
          rubrics: exams[activeSubject].rubrics.join("\n"),
          answer,
          email
        })
      });

      const data = await response.json();
      setResult(formatResult(data.grade));
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : "Something went wrong"}`);
    } finally {
      setIsLoading(false);
    }
  };

  const formatResult = (grade: string) => {
    const scorePattern = /Total Score: (\d+)/;
    const feedbackPattern = /Feedback: (.+)/;

    const scoreMatch = grade.match(scorePattern);
    const feedbackMatch = grade.match(feedbackPattern);

    const score = scoreMatch ? scoreMatch[0] : "";
    const feedback = feedbackMatch ? feedbackMatch[0] : "";

    return `${score}\n\n${feedback}`;
  };

  return (
    <div className="relative py-20 px-4">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/61ef02c8-7350-4e11-8c63-0170238d3290.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.3)',
          opacity: 0.9
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-6">
            ¡Prueba nuestro{" "}
            <span className="bg-gradient-to-r from-[#009A49] via-[#0072C6] to-[#7E69AB] text-transparent bg-clip-text">
              Sistema de Calificación Demo
            </span>
            !
          </h3>
          <p className="text-gray-400 text-xl">
            Experimenta cómo ExamAi garantiza calificaciones justas y transparentes<br />
            para cada estudiante en Guinea Ecuatorial.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-[#222222] p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Selecciona una Clase</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.keys(exams).map((subject) => (
                <button
                  key={subject}
                  onClick={() => {
                    setActiveSubject(subject as keyof typeof exams);
                    setAnswer("");
                    setEmail("");
                    setResult("");
                  }}
                  className={`py-3 px-6 rounded-lg text-white text-lg transition-colors ${
                    activeSubject === subject ? "bg-[#7e00e4]" : "bg-[#444444]"
                  }`}
                >
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Pregunta</h4>
                <p className="text-white text-lg">{exams[activeSubject].question}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">Rúbricas</h4>
                <ul className="list-disc list-inside text-white text-lg space-y-2">
                  {exams[activeSubject].rubrics.map((rubric, index) => (
                    <li key={index}>{rubric}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">Tu Respuesta</h4>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Escribe tu respuesta aquí"
                  className="w-full h-24 bg-[#333333] text-white border border-[#555555] rounded-xl p-4 text-lg resize-none"
                />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo electrónico"
                className="w-full bg-[#333333] text-white border border-[#555555] rounded-xl p-4 text-lg"
              />

              <button
                onClick={handleSubmit}
                disabled={!validateInputs()}
                className={`w-full py-3 px-6 rounded-xl text-white text-lg transition-colors ${
                  validateInputs() ? "bg-[#7e00e4] cursor-pointer" : "bg-[#444444] cursor-not-allowed"
                }`}
              >
                Enviar respuesta
              </button>
            </div>
          </div>

          <div className="flex-1 bg-[#222222] p-8 rounded-xl border border-white/10">
            <p className="text-gray-400 text-lg mb-8 text-center">
              Obtén tu respuesta de vuelta con calificación detallada basada en las rúbricas definidas por el profesor y un puntaje que coincida con la evaluación. Descubre cómo nuestro sistema de calificación hace que la calificación sea fácil y divertida!
            </p>
            <div className="bg-gradient-to-r from-[#f5a623] via-[#f77fbe] to-[#50e3c2] p-8 rounded-xl h-[400px] flex items-center justify-center">
              {isLoading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
              ) : (
                <p className="text-xl font-bold text-white whitespace-pre-line">
                  {result || "Elige una de las clases de ejemplo a continuación para experimentar cómo funciona nuestro sistema de IA de calificación."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradingDemo;
