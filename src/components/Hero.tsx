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

      <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-end px-4">
        <div className="w-full md:w-[42%] bg-zinc-900/60 py-10 px-6 sm:px-10 rounded-lg md:rounded-none text-center md:text-right max-w-2xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            RS PROJECTS
          </motion.h1>

          <motion.div
            className="space-y-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug">Crafting Innovative Spaces</p>
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug">Where Families</p>
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug">Thrive, Grow, And</p>
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug">Make Unforgettable Memories</p>
          </motion.div>

          <motion.p
            className="text-gray-300 mt-4 text-base sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            From Concept to Creation
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <Link href="#about">
              <button className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-green-900 transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
