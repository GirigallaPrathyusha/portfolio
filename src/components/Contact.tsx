
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-heading">Contact Information</h3>
            <p className="mb-8 text-portfolio-text">
              Feel free to reach out to me through any of the methods below. I'm always excited to connect with new people and discuss potential collaborations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-heading">Email</h4>
                  <a href="mailto:hello@hiteshmoola.com" className="text-portfolio-text hover:text-portfolio-primary transition-colors">
                    hello@hiteshmoola.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-heading">Phone</h4>
                  <a href="tel:+11234567890" className="text-portfolio-text hover:text-portfolio-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-portfolio-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-heading">Location</h4>
                  <p className="text-portfolio-text">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-heading">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-portfolio-dark border border-secondary text-portfolio-heading placeholder:text-portfolio-text/50 focus:outline-none focus:border-portfolio-primary"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-portfolio-dark border border-secondary text-portfolio-heading placeholder:text-portfolio-text/50 focus:outline-none focus:border-portfolio-primary"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-portfolio-dark border border-secondary text-portfolio-heading placeholder:text-portfolio-text/50 focus:outline-none focus:border-portfolio-primary"
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-portfolio-dark border border-secondary text-portfolio-heading placeholder:text-portfolio-text/50 focus:outline-none focus:border-portfolio-primary resize-none"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="button-primary flex items-center justify-center gap-2 w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
