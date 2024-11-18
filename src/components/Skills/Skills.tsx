import { Database, Server, Code, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const skills = [
  {
    title: 'Frontend Development',
    description: 'React, TypeScript, and modern CSS frameworks for responsive web applications',
    progress: 95,
    icon: Globe
  },
  {
    title: 'Backend Development',
    description: 'Node.js, Express, and MongoDB for scalable server solutions',
    progress: 90,
    icon: Server
  },
  {
    title: 'Database Management',
    description: 'SQL and NoSQL database design and optimization',
    progress: 85,
    icon: Database
  },
  {
    title: 'API Development',
    description: 'RESTful and GraphQL API design and implementation',
    progress: 92,
    icon: Code
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Technical Skills</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Expertise in modern web technologies and development practices
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}