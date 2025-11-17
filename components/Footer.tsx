import Link from "next/link";
import { Mail, Twitter, Instagram, Github, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Github", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple to-blue-electric flex items-center justify-center text-white font-bold text-lg">
                LE
              </div>
              <span className="font-display text-xl font-bold">
                Little Einstein Studio
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We build apps. We craft designs. We create digital experiences.
              A creative tech company pushing boundaries in digital innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@littleeinstein.studio"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  hello@littleeinstein.studio
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-purple to-blue-electric text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Little Einstein Studio. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

