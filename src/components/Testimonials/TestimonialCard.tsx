import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, role, image, content, rating }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card h-full p-6"
    >
      <div className="mb-4 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="mb-4 flex">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      
      <blockquote className="text-gray-600">
        "{content}"
      </blockquote>
    </motion.div>
  );
}