import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@example.com',
    href: 'mailto:contact@example.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA',
    href: 'https://maps.google.com'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, content, href }) => (
                <motion.a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md transition-colors hover:bg-gray-50"
                >
                  <div className="rounded-full bg-indigo-100 p-3">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{title}</h3>
                    <p className="text-gray-600">{content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Office Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}