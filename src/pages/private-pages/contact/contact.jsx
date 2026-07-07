import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const CONTACT_EMAIL = 'aolamilekanoladunjoye0412@gmail.com';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in every field.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast.success("Opening your email client — thanks for reaching out!");
    setForm(initialForm);
  };

  return (
    <div className="bg-radial-fade min-h-screen text-white px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center font-display">Get In Touch</h1>
        <p className="text-gray-400 text-center mb-10">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-1 space-y-4"
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 hover:border-accent/30 rounded-2xl p-4 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={18} className="text-accent shrink-0" />
              <span className="text-sm break-all">{CONTACT_EMAIL}</span>
            </a>
            <a
              href="tel:+2349038659668"
              className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 hover:border-accent/30 rounded-2xl p-4 text-gray-300 hover:text-white transition-colors"
            >
              <Phone size={18} className="text-accent shrink-0" />
              <span className="text-sm">+234 90 3865 9668</span>
            </a>
            <div className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 rounded-2xl p-4 text-gray-300">
              <MapPin size={18} className="text-accent shrink-0" />
              <span className="text-sm">Based in Nigeria</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-gray-900/60 border border-gray-800 rounded-2xl p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-950/60 border border-gray-800 focus:border-accent rounded-lg px-3 py-2 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-950/60 border border-gray-800 focus:border-accent rounded-lg px-3 py-2 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-gray-950/60 border border-gray-800 focus:border-accent rounded-lg px-3 py-2 outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
