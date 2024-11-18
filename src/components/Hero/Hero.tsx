import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Scene from './Scene';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Scene />
        </Canvas>
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            Crafting Digital
            <br />
            <span className="text-indigo-200">Experiences</span>
          </h1>
          <p className="mb-8 text-lg text-white/80 md:text-xl">
            Full-stack developer specializing in modern web technologies
          </p>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-lg transition-colors hover:bg-indigo-50"
          >
            View Projects
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}