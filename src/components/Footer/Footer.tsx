import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Newsletter from './Newsletter';

const socialLinks = [
  { icon: Github, href: 'https://github.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Instagram, href: 'https://instagram.com' }
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Portfolio</h3>
            <p className="mb-4 text-gray-400">
              Creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, CA</li>
              <li>contact@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <Newsletter />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}