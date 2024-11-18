import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  progress: number;
  icon: Icon;
}

export default function SkillCard({ title, description, progress, icon: Icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-6 transition-shadow hover:shadow-2xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <Icon className="h-8 w-8 text-indigo-600" />
        <div className="h-2 w-24 rounded-full bg-gray-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full rounded-full bg-indigo-600"
          />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}