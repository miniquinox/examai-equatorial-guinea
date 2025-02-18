
const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl font-bold mb-6">
            Llevando una Calificación Justa, Inteligente y Transparente a{" "}
            <span className="gradient-text">Guinea Ecuatorial</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Guinea Ecuatorial lidera África en educación impulsada por IA, garantizando evaluaciones justas, transparentes y precisas para cada estudiante.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center px-4">
          <img 
            src="/lovable-uploads/3ad9e7b5-5d92-4213-a910-77c7a30b0539.png" 
            alt="Panel del Profesor"
            className="rounded-2xl h-[400px] w-auto object-contain animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          />

          <img 
            src="/lovable-uploads/2de7be32-873b-4bc9-9093-887c0cb3991f.png" 
            alt="Examen de Matemáticas"
            className="rounded-2xl h-[400px] w-auto object-contain animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          />

          <img 
            src="/lovable-uploads/1c92cfac-5d13-41ec-92fd-cef745a64cf0.png" 
            alt="Tus Estudiantes"
            className="rounded-2xl h-[400px] w-auto object-contain animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
