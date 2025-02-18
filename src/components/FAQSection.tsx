
import { X } from "lucide-react";

const FAQSection = () => {
  const faqData = {
    leftColumn: [
      {
        question: "Can students cheat the AI?",
        answer: "No, our AI is trained to detect common cheating techniques and prevents students from exploiting them."
      },
      {
        question: "Can it grade my physics homework on paper?",
        answer: "We're working on image grading support, so students can submit pictures of their homework/exams for grading."
      },
      {
        question: "Can it handle 800 lines of programming homework?",
        answer: "Yes, our system efficiently processes large code submissions, whether a single file or multiple files."
      },
      {
        question: "Does it support grading in Spanish or French?",
        answer: "Absolutely! Our AI is fluent in 40+ languages, making it ideal for grading any homework, including language courses like Spanish or French."
      },
      {
        question: "Can professors use this without university approval?",
        answer: "While we recommend obtaining university approval to comply with privacy laws, professors can purchase individual plans."
      }
    ],
    rightColumn: [
      {
        question: "Is the AI grading customizable?",
        answer: "Yes, professors can create custom rubrics to guide how the AI grades, ensuring alignment with their teaching style."
      },
      {
        question: "What if the AI grades incorrectly?",
        answer: "Professors have full control to review and manually adjust grades if needed through our Grade Editing portal."
      },
      {
        question: "Is the platform secure and compliant with data privacy laws?",
        answer: "Yes, our platform follows strict data privacy regulations and employs encryption to protect student data."
      },
      {
        question: "How scalable is the system?",
        answer: "Our AI can handle classes of any size, from small groups to large university lectures, without any loss in performance."
      },
      {
        question: "Can I export grades to platforms like Canvas or Blackboard Learn?",
        answer: "We're currently developing an export feature that will allow you to download grading results as CSV files, which can easily be imported into systems like Canvas and Blackboard Learn."
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
