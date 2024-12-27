'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowDown, Music, Zap, Heart } from 'lucide-react'

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch('/TuneUp.apk')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = 'TuneUp.apk'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Experience the future of music&nbsp;
          <code className="font-mono font-bold">with TuneUp</code>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-900 after:via-purple-700 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-[#8000ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-6xl font-bold text-center mb-8 animate-pulse">
          TuneUp Your Music Experience
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <FeatureCard
          icon={<Music className="h-8 w-8 mb-3" />}
          title="Advanced Audio Processing"
          description="Experience crystal-clear sound with our state-of-the-art audio enhancement technology."
        />
        <FeatureCard
          icon={<Zap className="h-8 w-8 mb-3" />}
          title="Lightning-Fast Performance"
          description="Enjoy seamless playback and quick response times with our optimized software."
        />
        <FeatureCard
          icon={<Heart className="h-8 w-8 mb-3" />}
          title="Personalized Recommendations"
          description="Discover new music tailored to your taste with our smart recommendation engine."
        />
      </div>

      <div className="mt-16 animate-bounce">
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          {isDownloading ? 'Downloading...' : 'Download TuneUp'} <ArrowDown className="ml-2" />
        </Button>
      </div>

      <footer className="mt-24 text-center text-sm text-gray-400">
        Happy New Year 
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-purple-500 hover:bg-purple-900 hover:bg-opacity-30">
      {icon}
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </div>
  )
}

