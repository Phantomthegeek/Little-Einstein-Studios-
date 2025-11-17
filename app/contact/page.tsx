"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple bg-purple/10 rounded-full mb-4">
            Contact
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Get in touch and let&apos;s
            discuss how we can help transform your ideas into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedReveal direction="left" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <a
                      href="mailto:hello@littleeinstein.studio"
                      className="text-charcoal/70 hover:text-purple transition-colors"
                    >
                      hello@littleeinstein.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-charcoal/70 hover:text-purple transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Location
                    </h3>
                    <p className="text-charcoal/70">
                      Remote — UK & Nigeria
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Contact Form */}
          <AnimatedReveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  showArrow={!isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </AnimatedReveal>
        </div>
      </div>
    </div>
  );
}

