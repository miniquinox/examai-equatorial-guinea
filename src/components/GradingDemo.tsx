
import { useState, useEffect } from "react";

interface Exam {
  question: string;
  rubrics: string[];
}

const exams: Record<string, Exam> = {
  math: {
    question: "What is the derivative of 3x^2 - 2x - 5?",
    rubrics: [
      "Correct answer: 6x - 2 (5pts)",
      "Shows steps without skipping important ones (5pts)"
    ]
  },
  french: {
    question: "Translate: 'Equatorial Guinea leads Africa in educational innovation.'",
    rubrics: [
      "Correct translation to French (5pts)",
      "Grammar and punctuation accuracy (5pts)"
    ]
  },
  history: {
    question: "When did Equatorial Guinea gain independence, and who was its first president?",
    rubrics: [
      "Correct date and leader (5pts)",
      "Context and historical significance (5pts)"
    ]
  },
  science: {
    question: "Explain the importance of Equatorial Guinea's biodiversity in the Gulf of Guinea.",
    rubrics: [
      "Scientific accuracy (5pts)",
      "Environmental impact analysis (5pts)"
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
      alert("Please fill in both fields correctly.");
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
    <div className="py-20 px-4 bg-[rgba(17,17,17,0.6)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-white mb-6">
            Try our{" "}
            <span className="bg-gradient-to-r from-[#009A49] via-[#0072C6] to-[#7E69AB] text-transparent bg-clip-text">
              Grading System Demo
            </span>
            !
          </h3>
          <p className="text-gray-400 text-xl">
            Experience how ExamAi guarantees fair and transparent grades for<br />
            every student in Equatorial Guinea.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Box */}
          <div className="flex-1 bg-[#222222] p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Select a Class</h3>
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
                <h4 className="text-xl font-bold text-white mb-2">Question</h4>
                <p className="text-white text-lg">{exams[activeSubject].question}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">Rubrics</h4>
                <ul className="list-disc list-inside text-white text-lg space-y-2">
                  {exams[activeSubject].rubrics.map((rubric, index) => (
                    <li key={index}>{rubric}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">Your Answer</h4>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here"
                  className="w-full h-24 bg-[#333333] text-white border border-[#555555] rounded-xl p-4 text-lg resize-none"
                />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#333333] text-white border border-[#555555] rounded-xl p-4 text-lg"
              />

              <button
                onClick={handleSubmit}
                disabled={!validateInputs()}
                className={`w-full py-3 px-6 rounded-xl text-white text-lg transition-colors ${
                  validateInputs() ? "bg-[#7e00e4] cursor-pointer" : "bg-[#444444] cursor-not-allowed"
                }`}
              >
                Submit answer
              </button>
            </div>
          </div>

          {/* Right Box */}
          <div className="flex-1 bg-[#222222] p-8 rounded-xl border border-white/10">
            <p className="text-gray-400 text-lg mb-8 text-center">
              Get your answer back with detailed grading based on professor-defined rubrics and a score to match the assessment. See how our platform makes grading easy and fun!
            </p>
            <div className="bg-gradient-to-r from-[#f5a623] via-[#f77fbe] to-[#50e3c2] p-8 rounded-xl h-[400px] flex items-center justify-center">
              {isLoading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
              ) : (
                <p className="text-xl font-bold text-white whitespace-pre-line">
                  {result || "Choose from one of the example classes below to experience how our AI-powered grading works."}
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
