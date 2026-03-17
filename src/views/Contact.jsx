import React, { useState, useEffect } from 'react';
import { Input, Textarea, Button } from '../components';
import { FaPhone, FaEnvelope, FaMapPin } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
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
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {t('contact.form.successMessage')}
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {t('contact.form.errorMessage')}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="name"
                label={t('contact.form.name')}
                placeholder={t('contact.form.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <Input
                id="email"
                type="email"
                label={t('contact.form.email')}
                placeholder={t('contact.form.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </div>
            
            <Input
              id="subject"
              label={t('contact.form.subject')}
              placeholder={t('contact.form.subjectPlaceholder')}
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              required
            />
            
            <Textarea
              id="message"
              label={t('contact.form.message')}
              placeholder={t('contact.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              rows={6}
              required
            />
            
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
              {isLoading ? t('contact.form.sending') : t('contact.form.send')}
            </Button>
          </form>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center">
                <div className="text-3xl mb-2 text-primary-600"><FaEnvelope /></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('contact.contact_info.email')}</h4>
              <p className="text-gray-600">mateosacco99@gmail.com</p>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="text-3xl mb-2 text-primary-600"><FaPhone /></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('contact.contact_info.phone')}</h4>
              <p className="text-gray-600">+54 11 6855-5892</p>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="text-3xl mb-2 text-primary-600"><FaMapPin /></div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{t('contact.contact_info.location')}</h4>
              <p className="text-gray-600">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
