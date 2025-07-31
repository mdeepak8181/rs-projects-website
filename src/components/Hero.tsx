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
      {/* Background Video */}
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end z-20 px-4 sm:px-6">
        <div className="bg-zinc-900/60 w-full md:w-[42%] p-6 sm:p-8 rounded-lg md:rounded-none max-w-md md:max-w-lg text-center md:text-right space-y-6">
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            RS PROJECTS
          </motion.h1>

          {/* Subheadings */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              'Crafting Innovative Spaces',
              'Where Families',
              'Thrive, Grow, And',
              'Make Unforgettable Memories',
            ].map((line, index) => (
              <motion.h2
                key={index}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight"
              >
                {line}
              </motion.h2>
            ))}
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            className="text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            From Concept to Creation
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link href="#about">
              <button className="bg-green-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-900 transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
