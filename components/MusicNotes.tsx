'use client'

import { motion } from 'framer-motion'
import { Music } from 'lucide-react'

const noteVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function MusicNotes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={noteVariants}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: i * 0.2 }}
        >
          <Music className="text-purple-300 opacity-30" size={Math.random() * 16 + 8} />
        </motion.div>
      ))}
    </div>
  )
}