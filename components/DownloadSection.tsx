'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Star } from 'lucide-react'

interface DownloadSectionProps {
  onBack: () => void
}

export default function DownloadSection({ onBack }: DownloadSectionProps) {
  const [starred, setStarred] = useState(false)

  const handleStar = () => {
    window.open('https://github.com/your-actual-username/tune-up', '_blank')
    setStarred(true)
  }

  const handleDownload = () => {
    window.location.href = 'https://your-actual-download-link.com/tune-up.apk'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Download Tune Up</h2>
      <p className="mb-8">Follow these steps to get Tune Up on your device:</p>
      <div className="space-y-6">
        <div>
          <Button
            size="lg"
            className={`bg-yellow-500 text-black hover:bg-yellow-600 ${starred ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleStar}
            disabled={starred}
          >
            <Star className="mr-2 h-4 w-4" /> Star on GitHub
          </Button>
          {starred && <p className="text-green-500 mt-2">Thanks for starring!</p>}
        </div>
        <div>
          <Button
            size="lg"
            className={`bg-purple-600 text-white hover:bg-purple-700 ${!starred ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleDownload}
            disabled={!starred}
          >
            <Download className="mr-2 h-4 w-4" /> Download APK
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        className="mt-8 text-purple-300 hover:text-purple-100"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>
    </motion.div>
  )
}