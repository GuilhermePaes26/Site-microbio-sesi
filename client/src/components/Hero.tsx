import { motion } from 'framer-motion';
import { Microscope } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-dark pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, oklch(0.6 0.25 262) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, oklch(0.7 0.25 200) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <Microscope className="w-20 h-20 text-[oklch(0.7_0.25_200)]" />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 neon-glow-cyan"
          variants={itemVariants}
        >
          MICROBIOLOGIA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          variants={itemVariants}
        >
          Explore o Mundo Microscópico
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Descubra os fascinantes microrganismos que habitam nosso planeta. De bactérias e vírus a fungos e protozoários, mergulhe em uma jornada visual e interativa pelo universo microscópico.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-[oklch(0.6_0.25_262)] to-[oklch(0.55_0.3_290)] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[oklch(0.6_0.25_262)]/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar Exploração
          </motion.button>
          <motion.button
            className="px-8 py-3 border-2 border-[oklch(0.7_0.25_200)] text-[oklch(0.7_0.25_200)] font-semibold rounded-lg hover:bg-[oklch(0.7_0.25_200)]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Saiba Mais
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-[oklch(0.7_0.25_200)] text-sm">Scroll para explorar</div>
          <div className="text-2xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
