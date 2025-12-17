import React, { useState } from 'react';
import { Input, Textarea, Button } from '../components';

/**
 * Contact Section Component
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: '',
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Handle form submission (e.g., send to backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="name"
                label="Name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <Input
                id="email"
                type="email"
                label="Email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </div>
            
            <Input
              id="subject"
              label="Subject"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              required
            />
            
            <Textarea
              id="message"
              label="Message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              rows={6}
              required
            />
            
            <Button type="submit" variant="primary" size="lg" fullWidth>
              Send Message
            </Button>
          </form>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📧</div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600">your.email@example.com</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600">Your City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
