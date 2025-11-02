'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, memo, useCallback } from 'react';
import type { Translation } from '@/types';

interface ContactFormProps {
  translations: Translation;
}

function ContactForm({ translations }: ContactFormProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10"></div>
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.h2 
            className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">{translations.contact.title}</span>
          </motion.h2>
          <p className="text-[#4A5568] dark:text-gray-400 text-base sm:text-lg mb-2 px-2">
            {translations.contact.subtitle}
          </p>
          <p className="text-[#4A5568] dark:text-gray-400 text-sm sm:text-base px-2">
            {translations.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base text-[#1A2332] dark:text-gray-300 mb-1.5 sm:mb-2 font-semibold"
                >
                  {translations.contact.form.name}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={translations.contact.form.namePlaceholder}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-900/50 text-[#1A2332] dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all mobile-touch-target backdrop-blur-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base text-[#1A2332] dark:text-gray-300 mb-1.5 sm:mb-2 font-semibold"
                >
                  {translations.contact.form.email}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={translations.contact.form.emailPlaceholder}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-900/50 text-[#1A2332] dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all mobile-touch-target backdrop-blur-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base text-[#1A2332] dark:text-gray-300 mb-1.5 sm:mb-2 font-semibold"
                >
                  {translations.contact.form.message}
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={translations.contact.form.messagePlaceholder}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-300/50 dark:border-gray-600/50 bg-white/50 dark:bg-gray-900/50 text-[#1A2332] dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none backdrop-blur-sm"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                className={`w-full py-3 sm:py-3.5 rounded-xl font-semibold text-base transition-all mobile-touch-target btn-modern ${
                  status === 'sending'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg'
                    : 'bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {status === 'sending'
                  ? translations.contact.form.sending
                  : status === 'success'
                  ? translations.contact.form.success
                  : translations.contact.form.send}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 card-hover"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 mt-0.5">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#1A2332] dark:text-gray-100 mb-1">{translations.contact.info.email}</h3>
                  <a
                    href="mailto:denys.zahorovskyi@example.com"
                    className="text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:underline break-words font-medium"
                  >
                    denys.zahorovskyi@example.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 card-hover"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 mt-0.5">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1A2332] dark:text-gray-100 mb-1">{translations.contact.info.location}</h3>
                  <p className="text-sm sm:text-base text-[#4A5568] dark:text-gray-400 font-medium">
                    {translations.contact.info.locationValue}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactForm);
