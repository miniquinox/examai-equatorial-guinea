
const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl font-bold mb-6">
            Bringing Fair, Smart, and Transparent Grading to{" "}
            <span className="gradient-text">Equatorial Guinea</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Equatorial Guinea is leading Africa in AI-powered education—ensuring fair, transparent, and accurate assessments for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="card p-4 animate-fade-up h-[400px]" style={{ animationDelay: "0.2s" }}>
            <img 
              src="/lovable-uploads/3ad9e7b5-5d92-4213-a910-77c7a30b0539.png" 
              alt="Professor Dashboard"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="card p-4 animate-fade-up h-[400px]" style={{ animationDelay: "0.4s" }}>
            <img 
              src="/lovable-uploads/2de7be32-873b-4bc9-9093-887c0cb3991f.png" 
              alt="Math101 Quiz"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="card p-4 animate-fade-up h-[400px]" style={{ animationDelay: "0.6s" }}>
            <img 
              src="/lovable-uploads/1c92cfac-5d13-41ec-92fd-cef745a64cf0.png" 
              alt="Your Students"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
