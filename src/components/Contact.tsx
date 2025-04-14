
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you'd handle form submission to an email service here
    // For now we'll simulate sending to the provided email
    console.log('Form submitted to: kammarianand20@gmail.com', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 appear-animated">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Have a question or want to work together? Feel free to reach out to me directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-portfolio-dark/50 dark:bg-slate-800/50 rounded-lg p-8 shadow-lg appear-animated appear-animated-delay-1">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Send Me a Message</h3>
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
          
          <div className="lg:pl-8 appear-animated appear-animated-delay-2">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-muted dark:bg-slate-800 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-portfolio-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">kammarianand20@gmail.com</p>
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
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Mon-sat, 10am-1am</p>
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
                  href="https://www.instagram.com/mr.silent_killer_0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-portfolio-muted dark:bg-slate-800 hover:bg-portfolio-primary hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-2 rounded-full mr-3">
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-xs text-gray-500">@mr.silent_killer_0</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/kammarianand" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-portfolio-muted dark:bg-slate-800 hover:bg-portfolio-primary hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full mr-3">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-xs text-gray-500">kammarianand</p>
                  </div>
                </a>

                <a 
                  href="https://codepen.io/MR-BAD-BOY" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-portfolio-muted dark:bg-slate-800 hover:bg-portfolio-primary hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.838 8.445c0-.0018-.0004-.0033-.0005-.005l-.001-.0034-.001-.0036-.0016-.0032-.0014-.0037-.0015-.0037-.002-.0034-.0018-.0036-.002-.0033-.0022-.0034-.002-.003-.0023-.0029-.0023-.0027-.0025-.003-.0024-.0029-.0028-.0028-.0025-.0028-.003-.0025-.0033-.0024-.0028-.0024-.0032-.0022-.0033-.0021-.0035-.0019-.0035-.002-.0035-.0016-.0035-.0015-.0036-.0015-.0038-.0012-.0037-.0012-.0037-.001-.0037-.0008-.0038-.0007-.0037-.0006-.0035-.0005L12.061.06a.7.7 0 00-.77 0L.1205 8.0041l-.0006.0035-.0007.0037-.0008.0038-.001.0037-.0012.0037-.0012.0037-.0014.0038-.0016.0035-.0016.0035-.0018.0035-.002.0035-.0021.0033-.0022.0032-.0024.0028-.0025.0024-.0027.0025-.0028.0028-.0029.0028-.0029.0029-.003.003-.0031.003-.0031.0035-.0032.0035-.0033.0036-.002.0038-.0016.0037-.0014.0037-.0013.0034-.001.0036-.001.0034-.0005.005 0 .0018v7.332c0 .0018.0004.0033.0005.005l.001.0034.001.0036.0013.0034.0014.0037.0016.0037.0018.0038.0017.0036.0018.0035.002.0033.0021.0034.0023.0031.0025.0031.0025.003.0027.0029.0027.0027.003.0027.003.0028.0031.0026.0032.0027.0035.0025.0035.0025.0035.0021.0035.0022.0037.002.0036.0017.0038.0015.0039.0015.0038.0013.0038.001.0038.001.0038.0006.0036.0006.0036.0005L11.293 23.94a.7013.7013 0 00.77 0l11.141-7.9437.0006-.0036.0006-.0036.0007-.0038.001-.0038.001-.0038.0012-.0038.0012-.0039.0015-.0037.0015-.0038.0018-.0036.0018-.0037.002-.0035.0021-.0035.0023-.0035.0025-.0032.0025-.0027.0027-.0026.0028-.0028.0029-.0027.003-.0027.0032-.003.0033-.0031.0033-.0034.0035-.0033.0035-.0036.0036-.0035.0038-.0022.0037-.002.0037-.0017.0036-.0017.0034-.0013.0034-.001.0036-.001.0033-.0005.0018 0V8.446zM12.0146 2.1735l8.2569 5.8831-3.6759 2.4588-4.5805-3.0654V2.1735h-.0005zm-.6982 0v5.2765l-4.5809 3.0654-3.6759-2.4588 8.2568-5.8831zM2.3436 9.8974l2.6354 1.7616-2.6354 1.7617V9.8974zm9.0424 11.9292l-8.2567-5.8831 3.6757-2.4588 4.581 3.0655v5.2764zm.3491-7.1973L8.799 12.5l2.9861-1.9971L14.771 12.5l-2.9859 1.9997v-.0004zm.3491 7.1973v-5.2764l4.581-3.0655 3.6756 2.4588-8.2566 5.8831zm9.0422-8.4059l-2.6354-1.7617 2.6354-1.7616v3.5233z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">CodePen</p>
                    <p className="text-xs text-gray-500">MR-BAD-BOY</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/Anand0142" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-portfolio-muted dark:bg-slate-800 hover:bg-portfolio-primary hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <div className="bg-gray-100 dark:bg-gray-900/20 p-2 rounded-full mr-3">
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-xs text-gray-500">Anand0142</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
