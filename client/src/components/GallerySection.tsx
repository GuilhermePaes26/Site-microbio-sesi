import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    {
      src: '/hero-bacteria.png',
      title: 'Bactérias',
      description: 'Visualização futurista de bactérias com estrutura holográfica neon',
    },
    {
      src: '/virus-visualization.png',
      title: 'Vírus',
      description: 'Partículas de vírus com estrutura cristalina geométrica',
    },
    {
      src: '/cell-structure.png',
      title: 'Célula Eucariota',
      description: 'Corte transversal de célula com organelas brilhantes',
    },
    {
      src: '/microorganism-collection.png',
      title: 'Coleção de Microrganismos',
      description: 'Diversos tipos de microrganismos em visualização neon',
    },
    {
      src: '/dna-helix.png',
      title: 'DNA',
      description: 'Dupla hélice de DNA com efeito holográfico',
    },
  ];

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
            Galeria Visual
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visualizações futuristas de microrganismos e estruturas celulares
          </p>
        </motion.div>

        {/* Main gallery */}
        <motion.div
          className="relative mb-8"
          variants={itemVariants}
        >
          {/* Image container */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-[oklch(0.7_0.25_200)] glow-border">
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_280)] via-transparent to-transparent pointer-events-none" />

            {/* Navigation buttons */}
            <motion.button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[oklch(0.6_0.25_262)]/80 hover:bg-[oklch(0.6_0.25_262)] transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[oklch(0.6_0.25_262)]/80 hover:bg-[oklch(0.6_0.25_262)] transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image info */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[oklch(0.08_0.01_280)] to-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[oklch(0.7_0.25_200)] mb-2">
                {images[selectedIndex].title}
              </h3>
              <p className="text-gray-300">{images[selectedIndex].description}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4"
          variants={itemVariants}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === selectedIndex
                  ? 'border-[oklch(0.7_0.25_200)] shadow-lg shadow-[oklch(0.7_0.25_200)]/50'
                  : 'border-[oklch(0.2_0.02_280)] hover:border-[oklch(0.7_0.25_200)]/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Counter */}
        <motion.div
          className="text-center mt-6 text-gray-400"
          variants={itemVariants}
        >
          <span className="text-[oklch(0.7_0.25_200)]">{selectedIndex + 1}</span> / {images.length}
        </motion.div>
      </motion.div>
    </section>
  );
}
