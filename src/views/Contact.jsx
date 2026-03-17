import React, { useState, useEffect } from 'react';
import { Input, Textarea, Button } from '../components';
import { FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
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
    
    setIsLoading(true);
    
    const templateParams = {
      to_name: 'Mateo',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        templateParams
      )
      .then(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
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
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Thank you for your message! I will get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Failed to send message. Please try again later.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="name"
                label="Name"
                placeholder="Your Name"
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
            
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center">
                <div className="text-3xl mb-2 text-primary-600"><FaEnvelope /></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600">mateosacco99@gmail.com</p>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="text-3xl mb-2 text-primary-600"><FaPhone /></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-600">+54 11 6855-5892</p>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="text-3xl mb-2 text-primary-600"><FaMapPin /></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
