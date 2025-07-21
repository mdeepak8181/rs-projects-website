'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getSiteSettings } from '@/lib/sanity.settings'

export default function Hero() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      const settings = await getSiteSettings()
      setVideoUrl(settings?.heroVideo?.asset?.url || null)
    }
    fetchData()
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="absolute inset-y-0 left-0 w-[42%] h-full bg-zinc-900/60 z-20 flex items-center">
        <div className="w-full px-8 space-y-8 text-right max-w-lg ml-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            RS PROJECTS
          </motion.h1>

          <motion.div className="space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
              Crafting Innovative Spaces
            </motion.h2>
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
              Where Families
            </motion.h2>
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
              Thrive, Grow, And
            </motion.h2>
            <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
              Make Unforgettable Memories
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            From Concept to Creation
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}>
            <Link href="#about">
              <button className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
