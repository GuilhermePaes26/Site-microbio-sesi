import { motion } from 'framer-motion';
import { Lightbulb, Zap, Heart, Globe } from 'lucide-react';
import { useState } from 'react';

export default function FactsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const facts = [
    {
      icon: Heart,
      title: 'Trilhões de Microrganismos',
      description: 'Seu corpo contém aproximadamente 37 trilhões de células, mas também abriga trilhões de microrganismos benéficos que ajudam na digestão e imunidade.',
      color: 'oklch(0.65 0.25 320)',
    },
    {
      icon: Zap,
      title: 'Bactérias Extremófilas',
      description: 'Algumas bactérias podem sobreviver em condições extremas: calor acima de 100°C, frio abaixo de -20°C, radiação intensa e até no espaço!',
      color: 'oklch(0.75 0.22 150)',
    },
    {
      icon: Globe,
      title: 'Onipresentes',
      description: 'Microrganismos estão em praticamente todos os ambientes do planeta: solo, água, ar, rochas profundas e até em vulcões ativos.',
      color: 'oklch(0.7 0.25 200)',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Biotecnológica',
      description: 'A microbiologia é fundamental para criar vacinas, produzir insulina, biocombustíveis e até desenvolver tecnologias de biorreparação ambiental.',
      color: 'oklch(0.6 0.25 262)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 gradient-dark relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          backgroundImage: 'radial-gradient(circle, oklch(0.6 0.25 262) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div
        className="container max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
            Curiosidades Fascinantes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra fatos incríveis sobre o mundo microscópico
          </p>
        </motion.div>

        {/* Facts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.title}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  className="p-8 rounded-lg border-2 h-full"
                  style={{
                    borderColor: fact.color,
                    background: 'linear-gradient(135deg, oklch(0.12 0.015 280) 0%, oklch(0.15 0.02 290) 100%)',
                  }}
                  whileHover={{
                    boxShadow: `0 0 30px ${fact.color}40, inset 0 0 30px ${fact.color}10`,
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-4"
                    animate={hoveredIndex === index ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-12 h-12" style={{ color: fact.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3" style={{ color: fact.color }}>
                    {fact.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{fact.description}</p>

                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      border: `2px solid ${fact.color}`,
                      opacity: 0,
                    }}
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          className="mt-12 p-6 rounded-lg border-2 border-[oklch(0.7_0.25_200)] bg-[oklch(0.12_0.015_280)]/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-300">
            <span className="text-[oklch(0.7_0.25_200)] font-bold">🔬 Fato Importante:</span> A microbiologia é uma ciência em constante evolução que continua revelando novos microrganismos e suas aplicações benéficas para a humanidade.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
