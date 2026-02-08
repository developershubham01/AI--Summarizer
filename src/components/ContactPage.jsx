// src/components/ContactPage.jsx
import React, { useState } from 'react';
import emailjs from "@emailjs/browser";


import { 
  FiMail, 
  FiMessageSquare, 
  FiSend, 
  FiMapPin, 
  FiPhone, 
  FiClock,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['developershubham2005@gmail.com', ''],
      color: 'from-violet-500 to-purple-500'
    },
   
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      details: ['Vikhroli West', 'Mumbai, Maharashtra 400079'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FiClock />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-rose-500 to-orange-500'
    }
  ];

  const faqs = [
    {
      question: 'How does the AI summarization work?',
      answer: 'Our AI uses advanced NLP algorithms to extract key points and generate concise summaries while maintaining the original meaning.'
    },
    {
      question: 'Is there a limit on article length?',
      answer: 'We can process articles up to 50,000 words. For longer documents, we recommend breaking them into sections.'
    },
    {
      question: 'Do you support multiple languages?',
      answer: 'Currently, we support English, Spanish, French, German, and Japanese. More languages coming soon!'
    },
    {
      question: 'How accurate are the summaries?',
      answer: 'Our AI achieves 95%+ accuracy in preserving key information while reducing content length by 70-80%.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const params = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString()
  };

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // ADMIN MAIL
  emailjs.send(
    serviceID,
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
    params,
    publicKey
  );

  // AUTO REPLY
  emailjs.send(
    serviceID,
    import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE,
    params,
    publicKey
  )
  .then(() => {
    setIsSubmitting(false);
    setSubmitStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    setTimeout(() => setSubmitStatus(null), 5000);
  })
  .catch((err) => {
    console.error(err);
    alert("Email Failed");
    setIsSubmitting(false);
  });
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-violet-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 mb-6">
              <FiMessageSquare className="text-violet-600 dark:text-violet-400 mr-2" />
              <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
                We're Here to Help
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Get in</span>
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch With Us
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Have questions about our AI summarizer? Need support, or want to discuss partnerships? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

   <div className="container mx-auto px-6 pt-20 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 border border-violet-100 dark:border-violet-900">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} mb-4`}>
                      <div className="text-white text-xl">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
  <p
    key={idx}
   className="text-[13px] text-gray-600 dark:text-gray-400 break-all leading-relaxed">
    {detail.includes("@") ? (
      <a href={`mailto:${detail}`} className="hover:text-violet-600">
        {detail}
      </a>
    ) : (
      detail
    )}
  </p>
))}

                  </div>
                ))}
              </div>

             {/* Google Map with Pin */}
<div className="relative rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800 mt-6">

  {/* Google Map */}
  <iframe
    title="Office Location - Vikhroli Mumbai"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0955029988186!2d72.91591104999999!3d19.1034658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c425e5b36b%3A0x4a1c22eb2258f414!2sVikhroli%20Park%20Site%2C%20BMC%20Colony%2C%20Vikhroli%20West%2C%20Mumbai%2C%20Maharashtra%20400079!5e0!3m2!1sen!2sin!4v1770533659429!5m2!1sen!2sin"
    className="w-full h-64 md:h-72"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* Pin Overlay */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="bg-white/90 dark:bg-gray-900/80 p-4 rounded-full shadow-xl animate-bounce">
      <FiMapPin className="text-3xl text-violet-600" />
    </div>
  </div>

  {/* Location Label */}
  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/80 px-4 py-2 rounded-lg shadow">
    <p className="text-sm font-semibold text-violet-600">📍 Mumbai Office</p>
    <p className="text-xs text-gray-600 dark:text-gray-400">
      Vikhroli West, Maharashtra
    </p>
  </div>

</div>

            </div>

            {/* FAQ Section */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-white dark:from-violet-900/20 dark:to-gray-800/50">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Can't find your answer?</span>{' '}
                  Feel free to reach out to our support team for personalized assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-card rounded-2xl p-8 gradient-border">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl mr-4">
                  <FiSend className="text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Send Us a Message
                  </h2>
                  <p className="text-black-600 dark:text-white-400">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <FiCheckCircle className="text-green-500 text-xl" />
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-300">
                        Message Sent Successfully!
                      </p>
                      <p className="text-green-600 dark:text-green-400 text-sm">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 
                               border border-violet-200 dark:border-violet-800 rounded-xl
                               focus:border-violet-500 dark:focus:border-violet-500 
                               focus:ring-2 focus:ring-violet-500/20 outline-none
                               transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 
                               border border-violet-200 dark:border-violet-800 rounded-xl
                               focus:border-violet-500 dark:focus:border-violet-500 
                               focus:ring-2 focus:ring-violet-500/20 outline-none
                               transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 
                             border border-violet-200 dark:border-violet-800 rounded-xl
                             focus:border-violet-500 dark:focus:border-violet-500 
                             focus:ring-2 focus:ring-violet-500/20 outline-none
                             transition-all duration-200"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 
                             border border-violet-200 dark:border-violet-800 rounded-xl
                             focus:border-violet-500 dark:focus:border-violet-500 
                             focus:ring-2 focus:ring-violet-500/20 outline-none
                             transition-all duration-200 resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-black-500 dark:text-white-400">
                    * Required fields
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 
                             text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 
                             disabled:opacity-50 disabled:cursor-not-allowed 
                             transition-all duration-200 shadow-lg hover:shadow-violet-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>

                        <FiSend className="transform -rotate-45" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-violet-100 dark:border-violet-900">
                <div className="flex items-start space-x-3">
                  <FiAlertCircle className="text-violet-500 dark:text-violet-400 mt-1" />
                  <div>
                    <p className="text-sm text-black-600 dark:text-white-400">
                      <strong>Note:</strong> For technical support issues, please include relevant details 
                      such as error messages, screenshots, or steps to reproduce the problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Channels */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-white/80 to-violet-50/50 dark:from-gray-800/80 dark:to-violet-900/20 border border-violet-100 dark:border-violet-800 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMessageSquare className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Live Chat
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Available Mon-Fri, 9AM-5PM PST
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-white/80 to-violet-50/50 dark:from-gray-800/80 dark:to-violet-900/20 border border-violet-100 dark:border-violet-800 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMail className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Email Support
                </h3>
               <p className="text-sm text-gray-600 dark:text-gray-400 break-all leading-relaxed">
  developershubham2005@gmail.com
</p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-white/80 to-violet-50/50 dark:from-gray-800/80 dark:to-violet-900/20 border border-violet-100 dark:border-violet-800 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiPhone className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Phone Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +91 9695127889
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;