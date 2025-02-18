
import { Phone, MessageSquare, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Get In{" "}
                <span className="bg-gradient-to-r from-[#ff9d00] to-[#7E69AB] bg-clip-text text-transparent">
                  Touch With Us
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Reach out to us for inquiries, support, or partnership opportunities. We're here to assist you!
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
                    <h3 className="text-xl font-semibold text-gray-900">Request a Demo</h3>
                    <p className="text-gray-500">Schedule a Demo</p>
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
                    <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-500">hello@examai.ai</p>
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
                    <h3 className="text-xl font-semibold text-gray-900">Visit Us On LinkedIn</h3>
                    <p className="text-gray-500">Visit Our Page</p>
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
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-purple-500 transition-shadow"
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
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-purple-500 transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-purple-500 transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#7e00e4] hover:bg-[#6a00c1] text-white font-semibold rounded-lg transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
