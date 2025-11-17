/**
 * Contact.jsx - Contact section component
 * 
 * Displays contact information and a contact form with enhanced UX.
 * Form submission is currently a demo (logs to console).
 * 
 * @param {Object} contact - Contact information (email, address, formNote)
 */

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Handle form submission
   * Currently a demo implementation - logs form data to console
   * TODO: Implement actual form submission (e.g., email service, API endpoint)
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      const fd = new FormData(e.target);
      console.log(Object.fromEntries(fd));
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="mt-20 md:mt-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-8 md:p-12"
      >
        {/* Section header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="mt-2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Contact email and note */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Email us at{" "}
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.05 }}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1"
          >
            {contact.email}
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
          {" "}— {contact.formNote}
        </p>

        {/* Contact form - responsive grid layout */}
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              required
            />
          </motion.div>

          {/* Email input */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              required
            />
          </motion.div>

          {/* Message textarea - spans full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2"
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry..."
              className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all h-40 resize-none"
              required
            />
          </motion.div>

          {/* Form footer with address and submit button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2"
          >
            <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <span>📍</span>
              <span>{contact.address}</span>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : submitStatus === "success" ? (
                <>
                  ✓ Message sent!
                </>
              ) : (
                <>
                  Send message
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </>
              )}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

