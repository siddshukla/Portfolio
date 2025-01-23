import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Siddharth Shukla',
          from_email: form.email,
          to_email: 'siddharth.shukla379@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
      id="contact"
    >
      {alert.show && <Alert {...alert} />}
  
      
  
      {/* Heading Section */}
      <div className="relative z-10 text-center">
        <h3 className="text-5xl font-extrabold text-white tracking-tight leading-snug animate-fade-in">
          Let&apos;s <span className="text-blue-500">talk</span>
        </h3>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
          life, I’m here to help. Let’s make it happen!
        </p>
      </div>
  
      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative z-10 mt-12 w-full max-w-3xl flex flex-col space-y-8"
      >
        {/* Full Name Field */}
        <label className="relative">
          <span className="block text-sm font-medium text-gray-300 mb-2">Full Name</span>
          <div className="flex items-center relative">
            <i className="fa fa-user absolute left-3 text-gray-400"></i>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full pl-10 py-3 px-4 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:ring focus:ring-blue-500 focus:outline-none placeholder-gray-400 transition-shadow"
              placeholder="e.g., John Doe"
            />
          </div>
        </label>
  
        {/* Email Field */}
        <label className="relative">
          <span className="block text-sm font-medium text-gray-300 mb-2">Email Address</span>
          <div className="flex items-center relative">
            <i className="fa fa-envelope absolute left-3 text-gray-400"></i>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 py-3 px-4 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:ring focus:ring-blue-500 focus:outline-none placeholder-gray-400 transition-shadow"
              placeholder="e.g., johndoe@gmail.com"
            />
          </div>
        </label>
  
        {/* Message Field */}
        <label className="relative">
          <span className="block text-sm font-medium text-gray-300 mb-2">Your Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full py-3 px-4 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:ring focus:ring-blue-500 focus:outline-none placeholder-gray-400 transition-shadow"
            placeholder="Share your thoughts or inquiries..."
          />
        </label>
  
        {/* Submit Button */}
        <button
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition duration-300"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
  
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-violet-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
  
};

export default Contact;
