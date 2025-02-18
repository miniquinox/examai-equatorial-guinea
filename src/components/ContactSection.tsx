import { Phone, MessageSquare, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="relative py-20 px-4 bg-white overflow-hidden">
      <div 
        className="gradient-blob-1 w-[700px] h-[700px] -bottom-40 -left-20 bg-[#D3E4FD]"
        style={{ transform: 'rotate(-90deg)' }}
      />
      <div 
        className="gradient-blob-2 w-[600px] h-[600px] -top-32 right-0 bg-[#FFDEE2]"
        style={{ transform: 'rotate(30deg)' }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Únete a Nosotros en la{" "}
                <span className="bg-gradient-to-r from-[#009A49] to-[#0072C6] bg-clip-text text-transparent">
                  Transformación de la Educación
                </span>{" "}
                en Guinea Ecuatorial
              </h2>
              <p className="text-gray-600 text-lg">
                Nos enorgullece lanzar nuestra plataforma de calificación impulsada por IA en Guinea Ecuatorial, la primera en África.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Demo Card */}
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Solicita una Demo para tu Escuela</h3>
                    <p className="text-gray-500">Programa una demostración personalizada</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Envíanos un Email (Equipo de Guinea Ecuatorial)</h3>
                    <p className="text-gray-500">hola@examai.ai</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Linkedin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Sigue Nuestro Viaje en África</h3>
                    <p className="text-gray-500">Conéctate con nosotros en LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  rows={4}
                  placeholder="Tu mensaje"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-[#009A49] transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-[#009A49] to-[#0072C6] hover:from-[#008A39] hover:to-[#0062B6] text-white font-semibold rounded-lg transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
