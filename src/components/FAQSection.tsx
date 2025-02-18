
import { X } from "lucide-react";

const FAQSection = () => {
  const faqData = {
    leftColumn: [
      {
        question: "Can students manipulate their grades?",
        answer: "Our AI prevents bias, bribes, or favoritism—ensuring every grade is earned."
      },
      {
        question: "Can I submit paper exams for grading?",
        answer: "Yes, students can submit photos of their handwritten exams for AI assessment."
      },
      {
        question: "Can it handle all subjects?",
        answer: "Yes, from math to essays to programming, ExamAi covers all subjects."
      },
      {
        question: "Does it work in Spanish & French?",
        answer: "Yes, it supports grading in Spanish, French, English, and more."
      },
      {
        question: "Do I need government approval to use it?",
        answer: "Professors and schools can start using ExamAi independently."
      }
    ],
    rightColumn: [
      {
        question: "Can professors customize the grading?",
        answer: "Yes, professors define the standards; AI ensures fairness."
      },
      {
        question: "Can professors review AI grades?",
        answer: "Yes, every grade is adjustable to maintain teaching integrity."
      },
      {
        question: "Is student data safe?",
        answer: "Yes, ExamAi follows strict data privacy standards."
      },
      {
        question: "Can it work for large schools?",
        answer: "Yes, from small villages to large universities."
      },
      {
        question: "Can I print or export grades?",
        answer: "Yes, grades can be downloaded or shared in school reports."
      }
    ]
  };

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently asked questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {faqData.leftColumn.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqData.rightColumn.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <X className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
