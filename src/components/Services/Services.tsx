import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const services = [
  {
    title: 'Basic Website',
    price: '$999',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Basic SEO',
      '2 Rounds of Revisions',
      'Contact Form'
    ]
  },
  {
    title: 'Full Stack App',
    price: '$2999',
    features: [
      'Custom Backend API',
      'Database Integration',
      'User Authentication',
      'Admin Dashboard',
      'Payment Integration'
    ],
    isPopular: true
  },
  {
    title: 'Enterprise Solution',
    price: '$4999',
    features: [
      'Microservices Architecture',
      'Cloud Deployment',
      'Performance Optimization',
      'Advanced Security',
      '24/7 Support'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Services & Pricing</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Transparent pricing for professional web development services
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <PricingCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}