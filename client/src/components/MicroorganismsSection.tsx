import { motion } from 'framer-motion';
import { Zap, Droplets, Leaf, Dna, Bug } from 'lucide-react';
import MicroorganismCard from './MicroorganismCard';

export default function MicroorganismsSection() {
  const microorganisms = [
    {
      title: 'Vírus',
      description: 'Organismos microscópicos sem células que atuam como parasitas intracelulares obrigatórios.',
      characteristics: [
        'Não possuem células',
        'Parasitas intracelulares',
        'Necessitam de célula hospedeira',
        'Compostos por proteína e ácido nucleico',
      ],
      diseases: ['Gripe', 'Sarampo', 'Febre Amarela', 'AIDS', 'COVID-19'],
      icon: <Bug className="w-16 h-16 text-[oklch(0.7_0.25_200)]" />,
      color: 'oklch(0.7 0.25 200)',
    },
    {
      title: 'Bactérias',
      description: 'Seres unicelulares procariontes encontrados em diversos ambientes do planeta.',
      characteristics: [
        'Unicelulares',
        'Procariontes',
        'Resistem a condições extremas',
        'Participam de ciclos biogeoquímicos',
      ],
      diseases: ['Cólera', 'Tuberculose', 'Meningite', 'Difteria'],
      icon: <Zap className="w-16 h-16 text-[oklch(0.75_0.22_150)]" />,
      color: 'oklch(0.75 0.22 150)',
    },
    {
      title: 'Protozoários',
      description: 'Organismos eucariontes, unicelulares e heterótrofos que vivem em ambientes úmidos.',
      characteristics: [
        'Eucariontes',
        'Unicelulares',
        'Heterótrofos',
        'Formas corporais variadas',
      ],
      diseases: ['Malária', 'Amebíase', 'Giardíase', 'Doença de Chagas'],
      icon: <Droplets className="w-16 h-16 text-[oklch(0.6_0.25_262)]" />,
      color: 'oklch(0.6 0.25 262)',
    },
    {
      title: 'Fungos',
      description: 'Organismos eucariontes heterotróficos encontrados em solo, água e matéria orgânica.',
      characteristics: [
        'Eucariontes',
        'Heterotrófos',
        'Uni ou pluricelulares',
        'Cerca de 1,5 milhão de espécies',
      ],
      diseases: ['Micoses', 'Candidíase', 'Sapinho', 'Histoplasmose'],
      icon: <Leaf className="w-16 h-16 text-[oklch(0.55_0.3_290)]" />,
      color: 'oklch(0.55 0.3 290)',
    },
    {
      title: 'Algas',
      description: 'Organismos aquáticos com capacidade de fotossíntese, micro ou macroscópicos.',
      characteristics: [
        'Organismos aquáticos',
        'Realizam fotossíntese',
        'Micro ou macroscópicas',
        'Eucariontes ou procariontes',
      ],
      diseases: [],
      icon: <Dna className="w-16 h-16 text-[oklch(0.65_0.25_320)]" />,
      color: 'oklch(0.65 0.25 320)',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 gradient-dark">
      <motion.div
        className="container max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Title */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
            Tipos de Microrganismos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça os principais grupos de microrganismos que habitam nosso planeta
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={sectionVariants}
        >
          {microorganisms.map((micro, index) => (
            <MicroorganismCard
              key={micro.title}
              {...micro}
              index={index}
            />
          ))}
        </motion.div>

        {/* Info text */}
        <motion.div
          className="mt-12 p-6 rounded-lg border border-[oklch(0.2_0.02_280)] bg-[oklch(0.12_0.015_280)]/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-center">
            💡 <span className="text-[oklch(0.7_0.25_200)]">Dica:</span> Clique nos cards para descobrir mais detalhes sobre cada tipo de microrganismo!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
