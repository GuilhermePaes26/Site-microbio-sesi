import { motion } from 'framer-motion';
import { useState } from 'react';

interface MicroorganismCardProps {
  title: string;
  description: string;
  characteristics: string[];
  diseases: string[];
  icon: React.ReactNode;
  color: string;
  index: number;
}

export default function MicroorganismCard({
  title,
  description,
  characteristics,
  diseases,
  icon,
  color,
  index,
}: MicroorganismCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="h-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full p-6 rounded-xl border-2 gradient-dark flex flex-col items-center justify-center text-center"
          style={{
            borderColor: color,
            backfaceVisibility: 'hidden',
            boxShadow: `0 0 20px ${color}40, inset 0 0 20px ${color}10`,
          }}
        >
          <motion.div
            className="mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold mb-3" style={{ color }}>
            {title}
          </h3>
          <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
          <p className="text-xs text-gray-500 mt-4">Clique para mais detalhes</p>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full p-6 rounded-xl border-2 gradient-dark flex flex-col justify-start overflow-y-auto"
          style={{
            borderColor: color,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: `0 0 20px ${color}40, inset 0 0 20px ${color}10`,
          }}
        >
          <h4 className="font-bold mb-2" style={{ color }}>
            Características:
          </h4>
          <ul className="text-xs text-gray-300 mb-4 space-y-1">
            {characteristics.map((char, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{char}</span>
              </li>
            ))}
          </ul>

          {diseases.length > 0 && (
            <>
              <h4 className="font-bold mb-2" style={{ color }}>
                Doenças:
              </h4>
              <ul className="text-xs text-gray-300 space-y-1">
                {diseases.map((disease, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{disease}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
