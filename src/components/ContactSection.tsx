
import { Phone, MessageSquare, Linkedin, MapPin, Globe, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" />
                <span>Malabo, Equatorial Guinea</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                De Guinea, 
                <span className="bg-gradient-to-r from-[#009A49] to-[#0072C6] bg-clip-text text-transparent">
                  {" "}Para Guinea
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-xl">
                Estamos orgullosos de lanzar la primera plataforma de calificación impulsada por IA en África, diseñada específicamente para las necesidades educativas de Guinea Ecuatorial.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {/* Demo Card */}
              <div 
                className={`p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                  activeCard === 'demo' ? 'ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onMouseEnter={() => setActiveCard('demo')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg group-hover:scale-110 transition-transform">
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
                className={`p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                  activeCard === 'email' ? 'ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onMouseEnter={() => setActiveCard('email')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg group-hover:scale-110 transition-transform">
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
                className={`p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                  activeCard === 'location' ? 'ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onMouseEnter={() => setActiveCard('location')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg group-hover:scale-110 transition-transform">
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
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100">
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
                    rows={4} 
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
