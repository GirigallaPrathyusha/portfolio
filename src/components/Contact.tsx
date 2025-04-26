import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted to: prathyushagoudgirigalla@gmail.com', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedContent>
          <div className="text-center mb-12 appear-animated">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat">Get In Touch</h2>
            <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              Have a question or want to work together? Feel free to reach out to me directly.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedContent>
            <div className="bg-portfolio-dark/50 dark:bg-slate-800/50 rounded-lg p-8 shadow-lg appear-animated appear-animated-delay-1">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Send Me a Message</h3>
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent!</h4>
                  <p className="text-green-700 dark:text-green-400">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-portfolio-heading">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-portfolio-dark/30 border border-portfolio-primary/20 text-portfolio-heading rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent dark:bg-slate-700/50"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-portfolio-heading">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-portfolio-dark/30 border border-portfolio-primary/20 text-portfolio-heading rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent dark:bg-slate-700/50"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-portfolio-heading">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 bg-portfolio-dark/30 border border-portfolio-primary/20 text-portfolio-heading rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:border-transparent dark:bg-slate-700/50"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 animate-bounce" size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedContent>

          <AnimatedContent>
            <div className="appear-animated appear-animated-delay-2">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-portfolio-muted dark:bg-slate-800 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">prathyushagoudgirigalla@gmail.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">I'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-portfolio-muted dark:bg-slate-800 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">X*****X</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Mon-Sat, 10am–1am</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-portfolio-muted dark:bg-slate-800 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Hyderabad, Telangana</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.instagram.com/__prathyusha_goud_ppp__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-portfolio-muted dark:bg-slate-800 hover:bg-portfolio-primary hover:text-white p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-pink-100 dark:bg-pink-900/20 p-2 rounded-full mr-3">
                      <Instagram className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-xs text-gray-500">__prathyusha_goud_ppp__</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/girigalla-prathyusha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-portfolio-muted dark:bg-slate-800 hover:bg-portfolio-primary hover:text-white p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full mr-3">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-xs text-gray-500">girigalla-prathyusha</p>
                    </div>
                  </a>

              
                  <a 
                  href="https://github.com/GirigallaPrathyusha/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-portfolio-muted dark:bg-slate-800 hover:bg-portfolio-primary hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <div className="bg-gray-100 dark:bg-gray-900/20 p-2 rounded-full mr-3">
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-xs text-gray-500">GirigallaPrathyusha</p>
                  </div>
                </a>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
