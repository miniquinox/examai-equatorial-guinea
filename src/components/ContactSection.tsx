
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
                Join Us in{" "}
                <span className="bg-gradient-to-r from-[#009A49] to-[#0072C6] bg-clip-text text-transparent">
                  Transforming Education
                </span>{" "}
                in Equatorial Guinea
              </h2>
              <p className="text-gray-600 text-lg">
                We are proud to launch our AI-powered grading platform in Equatorial Guinea—the first in Africa.
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
                    <h3 className="text-xl font-semibold text-gray-900">Request a Demo for Your School</h3>
                    <p className="text-gray-500">Schedule a personalized demonstration</p>
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
                    <h3 className="text-xl font-semibold text-gray-900">Email Us (Equatorial Guinea Team)</h3>
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
                    <h3 className="text-xl font-semibold text-gray-900">Follow Our Journey in Africa</h3>
                    <p className="text-gray-500">Connect with us on LinkedIn</p>
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
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-[#009A49] transition-shadow"
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
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-[#009A49] transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-[#009A49] to-[#0072C6] hover:from-[#008A39] hover:to-[#0062B6] text-white font-semibold rounded-lg transition-colors"
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
