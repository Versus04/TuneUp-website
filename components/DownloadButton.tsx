'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface DownloadButtonProps {
  onClick: () => void
}

export default function DownloadButton({ onClick }: DownloadButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700" onClick={onClick}>
        <Download className="mr-2 h-4 w-4" /> Download Tune Up
      </Button>
    </motion.div>
  )
}