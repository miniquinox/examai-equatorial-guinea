
import { Phone, MessageSquare, MapPin, Globe, ArrowRight, Clock, Users, School, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const stats = [
    { icon: Users, label: "Estudiantes", value: "2,500+" },
    { icon: School, label: "Instituciones", value: "15+" },
    { icon: Clock, label: "Horas Ahorradas", value: "1,000+" },
    { icon: CheckCircle, label: "Exámenes", value: "10,000+" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4" />
            <span>Malabo, Guinea Ecuatorial</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            De Guinea, 
            <span className="bg-gradient-to-r from-[#009A49] to-[#0072C6] bg-clip-text text-transparent">
              {" "}Para Guinea
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos orgullosos de lanzar la primera plataforma de calificación impulsada por IA en África, diseñada específicamente para las necesidades educativas de Guinea Ecuatorial.
          </p>
        </div>

        {/* Stats Cards - Now in a single row */}
        <div className="grid grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Demo Card */}
            <div 
              className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                activeCard === 'demo' ? 'ring-2 ring-green-500 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveCard('demo')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Solicita una Demo</h3>
                    <ArrowRight className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
                      activeCard === 'demo' ? 'translate-x-1' : ''
                    }`} />
                  </div>
                  <p className="text-gray-500 mt-1">Programa una demostración personalizada para tu institución educativa</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div 
              className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                activeCard === 'email' ? 'ring-2 ring-green-500 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveCard('email')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Contáctanos</h3>
                    <ArrowRight className={`w-5 h-5 text-green-500 transition-transform duration-300 ${
                      activeCard === 'email' ? 'translate-x-1' : ''
                    }`} />
                  </div>
                  <p className="text-gray-500 mt-1">hello@examai.ai</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div 
              className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                activeCard === 'location' ? 'ring-2 ring-green-500 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveCard('location')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Visítanos</h3>
                    <ArrowRight className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                      activeCard === 'location' ? 'translate-x-1' : ''
                    }`} />
                  </div>
                  <p className="text-gray-500 mt-1">Malabo, Bioko Norte, Guinea Ecuatorial</p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="relative h-96 rounded-xl overflow-hidden mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63825.79927090987!2d8.737326!3d3.7504121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067804dc9c85627%3A0x87026d81a1de1de0!2sMalabo%2C%20Equatorial%20Guinea!5e0!3m2!1sen!2sus!4v1710644521274!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-lg font-semibold">Malabo, Guinea Ecuatorial</h4>
                  <p className="text-sm text-gray-200">La primera plataforma de calificación AI en África</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100 h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h3>
                <p className="text-gray-500">Estamos aquí para ayudarte con cualquier pregunta sobre nuestra plataforma.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Juan Pérez" 
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-[#009A49] transition-shadow" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="ejemplo@correo.com" 
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-[#009A49] transition-shadow" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    rows={6}
                    placeholder="Tu mensaje" 
                    className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-[#009A49] transition-shadow resize-none" 
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#009A49] to-[#0072C6] hover:from-[#008A39] hover:to-[#0062B6] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                >
                  Enviar Mensaje
                </Button>

                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Clock className="w-4 h-4" />
                    <span>Tiempo de respuesta promedio: 2-3 horas</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
