import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, PhoneCall, MapPin, Send, Instagram, Github, X, Facebook } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be where form submission logic would go
    // Since this is non-functional as per requirements, we just prevent default
  };
  return <section id="contact" className="bg-portfolio-secondary">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 h-fit">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">sihlensimba@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <PhoneCall className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+27 (84) 816-3605</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <MapPin className="text-portfolio-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Mbombela, Mpumalanga, South Africa</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <X className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Sihle Nsimba" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="sihle@example.com" required />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Write your message here..." className="min-h-[150px]" required />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
