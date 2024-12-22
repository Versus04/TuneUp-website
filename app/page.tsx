'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import AnimatedText from '@/components/AnimatedText'
import DownloadButton from '@/components/DownloadButton'
import MusicNotes from '@/components/MusicNotes'
import DownloadSection from '@/components/DownloadSection'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

export default function Home() {
  const [showDownload, setShowDownload] = useState(false)

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white overflow-hidden">
      <MusicNotes />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        {!showDownload ? (
          <>
            <AnimatedText text="Tune Up Your Music Experience" className="text-5xl font-bold mb-4" />
            <AnimatedText text="Stream, Discover, and Enjoy" className="text-2xl mb-8" />
            <DownloadButton onClick={() => setShowDownload(true)} />
          </>
        ) : (
          <DownloadSection onBack={() => setShowDownload(false)} />
        )}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Scene />
      </Suspense>
    </main>
  )
}