import { motion } from 'framer-motion';
import { Heart, Microscope } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <motion.footer
      className="gradient-dark border-t border-[oklch(0.2_0.02_280)] py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Main content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-[oklch(0.7_0.25_200)]" />
              <h3 className="text-lg font-bold neon-glow-cyan">Microbiologia Interativa</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uma apresentação educativa e interativa sobre o fascinante mundo dos microrganismos, com design futurista e elementos visuais impressionantes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-[oklch(0.7_0.25_200)]">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[oklch(0.7_0.25_200)] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#microorganisms" className="text-gray-400 hover:text-[oklch(0.7_0.25_200)] transition-colors">
                  Microrganismos
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[oklch(0.7_0.25_200)] transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#facts" className="text-gray-400 hover:text-[oklch(0.7_0.25_200)] transition-colors">
                  Curiosidades
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-[oklch(0.7_0.25_200)]">Sobre</h4>
            <p className="text-gray-400 text-sm mb-4">
              Desenvolvido com React, Framer Motion e Tailwind CSS para criar uma experiência visual imersiva e educativa.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="px-4 py-2 bg-gradient-to-r from-[oklch(0.6_0.25_262)] to-[oklch(0.55_0.3_290)] text-white text-sm rounded-lg hover:shadow-lg hover:shadow-[oklch(0.6_0.25_262)]/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[oklch(0.2_0.02_280)] to-transparent mb-8"
          variants={itemVariants}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>© {currentYear} Microbiologia Interativa. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Feito com</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-[oklch(0.65_0.25_320)]" />
            </motion.div>
            <span>para a educação</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
