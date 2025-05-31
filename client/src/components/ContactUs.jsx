import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error('Please fix the errors before submitting.');
      return;
    }

    // Simulate sending form data
    console.log('Sending form data:', formData);

    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'
              }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'
              }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'
              }`}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-purple-500'
              }`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
