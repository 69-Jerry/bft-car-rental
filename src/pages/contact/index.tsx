import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Hero } from "./components/hero";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
       <Hero />

      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
       
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Contact Info and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side: Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#003d7a] mb-2">
                  Contact us
                </h2>
                <p className="text-gray-600 text-lg">Get In touch</p>
              </div>

              {/* Email Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF8C00]">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003d7a] mb-2">
                    Email address
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">
                      info.mybftservices@gmail.com
                    </p>
                    <p className="text-gray-700">gm@mybftservice.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF8C00]">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003d7a] mb-2">
                    Phone number
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">+233 243 903 036</p>
                    <p className="text-gray-700">+233 200 767 808</p>
                    <p className="text-gray-700">+233 302 524 020</p>
                    <p className="text-gray-700">+233 423 919 218 (WhatsApp)</p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF8C00]">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003d7a] mb-2">
                    Office address
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">17 Ataa Avenue, Madina</p>
                    <p className="text-gray-700">Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Google Map */}
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.5847137589633!2d-0.33523!3d5.6614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c8c8c8c8c8c9%3A0x1234567890!2s17%20Ataa%20Avenue%2C%20Madina%2C%20Accra!5e0!3m2!1sen!2sgh!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Bottom Section: Contact Form */}
          <div className="bg-gradient-to-r from-[#003d7a] to-[#005ba3] rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Send us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] placeholder-gray-400"
                  placeholder="Enter subject"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] placeholder-gray-400 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-[#FF8C00] hover:bg-[#e67e00] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs; 
