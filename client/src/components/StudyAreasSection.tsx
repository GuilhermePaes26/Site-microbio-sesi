import { motion } from 'framer-motion';
import { Stethoscope, Pill, Leaf, UtensilsCrossed, Dna } from 'lucide-react';

export default function StudyAreasSection() {
  const studyAreas = [
    {
      title: 'Microbiologia Médica',
      description: 'Estuda microrganismos patogênicos e seu controle para prevenção de doenças.',
      icon: Stethoscope,
      color: 'from-[oklch(0.6_0.25_262)] to-[oklch(0.55_0.3_290)]',
      details: ['Patógenos', 'Imunologia', 'Prevenção de doenças'],
    },
    {
      title: 'Microbiologia Farmacêutica',
      description: 'Desenvolve medicamentos e antibióticos a partir de microrganismos.',
      icon: Pill,
      color: 'from-[oklch(0.55_0.3_290)] to-[oklch(0.7_0.25_200)]',
      details: ['Antibióticos', 'Medicamentos', 'Produção farmacêutica'],
    },
    {
      title: 'Microbiologia Ambiental',
      description: 'Analisa microrganismos no meio ambiente e ciclos biogeoquímicos.',
      icon: Leaf,
      color: 'from-[oklch(0.7_0.25_200)] to-[oklch(0.75_0.22_150)]',
      details: ['Decomposição', 'Ciclos biogeoquímicos', 'Ecossistemas'],
    },
    {
      title: 'Microbiologia de Alimentos',
      description: 'Controla qualidade e segurança de alimentos na produção industrial.',
      icon: UtensilsCrossed,
      color: 'from-[oklch(0.75_0.22_150)] to-[oklch(0.65_0.25_320)]',
      details: ['Segurança alimentar', 'Controle de qualidade', 'Conservação'],
    },
    {
      title: 'Microbiologia Molecular',
      description: 'Manipula genes e estruturas moleculares de microrganismos.',
      icon: Dna,
      color: 'from-[oklch(0.65_0.25_320)] to-[oklch(0.6_0.25_262)]',
      details: ['Engenharia genética', 'Biotecnologia', 'Inovação'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 gradient-dark">
      <motion.div
        className="container max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
            Áreas de Estudo
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore os diferentes campos onde a microbiologia é aplicada
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
        >
          {studyAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={itemVariants}
                className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />

                {/* Border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[oklch(0.7_0.25_200)] rounded-lg transition-all duration-300" />

                {/* Content */}
                <motion.div
                  className="relative h-full p-6 flex flex-col justify-between"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Icon className="w-12 h-12 text-[oklch(0.7_0.25_200)]" />
                  </motion.div>

                  {/* Title and description */}
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{area.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2 mb-3">{area.description}</p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-2">
                      {area.details.map((detail) => (
                        <span
                          key={detail}
                          className="text-xs px-2 py-1 rounded bg-[oklch(0.2_0.02_280)] text-[oklch(0.7_0.25_200)]"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[oklch(0.6_0.25_262)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
