import { motion } from 'framer-motion';
import { Microscope, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Microrganismos', href: '#microorganisms' },
    { label: 'Áreas de Estudo', href: '#study-areas' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Curiosidades', href: '#facts' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 gradient-dark border-b border-[oklch(0.2_0.02_280)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-[oklch(0.6_0.25_262)] to-[oklch(0.55_0.3_290)]">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold neon-glow-cyan">MICRO</span>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[oklch(0.7_0.25_200)] transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[oklch(0.6_0.25_262)] to-[oklch(0.7_0.25_200)] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[oklch(0.2_0.02_280)] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[oklch(0.7_0.25_200)]" />
            ) : (
              <Menu className="w-6 h-6 text-[oklch(0.7_0.25_200)]" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-[oklch(0.7_0.25_200)] hover:bg-[oklch(0.2_0.02_280)] rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
