import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`glass-card p-8 ${isPopular ? 'border-2 border-indigo-600 ring-2 ring-indigo-600 ring-offset-2' : ''}`}
    >
      {isPopular && (
        <span className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
          Popular
        </span>
      )}
      <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-indigo-600">{price}</span>
        <span className="text-gray-600">/project</span>
      </div>
      <ul className="mb-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full rounded-lg py-3 font-semibold transition-colors ${
          isPopular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}