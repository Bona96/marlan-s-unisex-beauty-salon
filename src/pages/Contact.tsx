import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  // EmailJS configuration via Vite env variables. Set these in .env as:
  // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
  const SERVICE_ID = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus({ type: 'sending' });

    const formData = new FormData(formRef.current);
    const templateParams = Object.fromEntries(formData.entries());

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY');
      console.log('Form data:', templateParams);
      setStatus({ type: 'success', message: 'Form captured locally (EmailJS not configured).' });
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams as any, PUBLIC_KEY);
      setStatus({ type: 'success', message: "Message sent — we'll be in touch!" });
      formRef.current.reset();
    } catch (err: any) {
      console.error('EmailJS error', err);
      setStatus({ type: 'error', message: 'Failed to send message — please try again or email us directly.' });
    }
  };

  setTimeout(() => {
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  }, 5000);
  return (
    <section id="contact" className="min-h-screen py-16 px-2 md:px-8 bg-linear-to-t from-black to-yellow-900 dark:from-black dark:to-yellow-900 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold text-yellow-400 mb-8 text-center">
        Contact Us
      </motion.h2>
      <motion.h5 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-lg font-semibold text-yellow-300 mb-2 text-center">
        Beauty is in the hands of the beholder, but a great salon helps!
      </motion.h5>
      <motion.h5 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-lg font-semibold text-yellow-300 mb-8 text-center">
        Reach out to Marlan's Unisex Beauty Salon for appointments, inquiries, or just to say hello. <br />
        We're here to make you look and feel your best!
      </motion.h5>
      <motion.form 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.9 }} 
        className="w-full max-w-lg bg-black/80 dark:bg-black/90 rounded-2xl p-6 flex flex-col gap-6 shadow-xl border border-yellow-400/30"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-violet-900 dark:text-yellow-200">
          {status.type === 'success' && (
            <p className="md:col-span-2 p-4 bg-green-100 text-green-800 rounded-lg">
              {status.message}
            </p>
          )}
          <label className="sr-only">Name</label>
          <input name="from_name" required className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Your name" />
          <label className="sr-only">Email</label>
          <input name="from_email" type="email" required className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Email" />
          <label className="sr-only">Phone</label>
          <input name="phone" className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Phone (optional)" />
          <label className="sr-only">Subject</label>
          <input name="subject" className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Subject" />
          <label className="sr-only">Message</label>
          <textarea name="message" required className="md:col-span-2 border border-gray-200 rounded-lg px-4 py-3 h-36 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Message" />
        </div>
        <motion.button
          disabled={status.type === 'sending'}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-colors duration-300 shadow-lg" 
          type="submit"
        >
          {status.type === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>
    </section>
  );
}
