'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Community {
  name: string
  description: string
  features: string[]
  image: string
  heroImage: string
}

interface CommunitiesCarouselProps {
  communities: Community[]
}

export default function CommunitiesCarousel({ communities }: CommunitiesCarouselProps) {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="communities"
            className="text-4xl font-bold text-green-800 mb-4 scroll-mt-36 md:scroll-mt-40"
          >
            Communities
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            RS Projects is proud to partner with well-regarded developers that put effort into creating
            communities that are carefully planned from their inception.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory"
          >
            {communities.map((community, index) => (
              <motion.div
                key={community.name}
                className="bg-zinc-900 rounded-lg min-w-[300px] max-w-sm snap-start overflow-hidden hover:bg-zinc-800 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedCommunity(community)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  {community.image && (
                    <Image
                      src={community.image}
                      alt={community.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{community.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{community.description}</p>
                  <div className="text-green-800 font-medium text-sm">View Details</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrows (desktop only) */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 px-4 -translate-y-1/2 z-10 pointer-events-none">
            <button
              onClick={() => scrollByCard('left')}
              className="pointer-events-auto bg-zinc-800 text-white p-3 rounded-full shadow-md hover:bg-zinc-700 transition"
            >
              &#8592;
            </button>
            <button
              onClick={() => scrollByCard('right')}
              className="pointer-events-auto bg-zinc-800 text-white p-3 rounded-full shadow-md hover:bg-zinc-700 transition"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Popup Modal */}
        {selectedCommunity && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCommunity(null)}
          >
            <motion.div
              className="bg-zinc-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                {selectedCommunity.heroImage && (
                  <Image
                    src={selectedCommunity.heroImage}
                    alt={selectedCommunity.name}
                    fill
                    className="object-cover"
                  />
                )}
                <button
                  onClick={() => setSelectedCommunity(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  &#x2715;
                </button>
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedCommunity.name}</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedCommunity.description}</p>

                <h3 className="text-xl font-semibold text-white mb-4">Community Features</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedCommunity.features?.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      setSelectedCommunity(null)
                    }}
                    className="flex-1 bg-green-800 text-black py-3 px-6 rounded-lg font-semibold hover:bg-green-900 transition-colors"
                  >
                    Get More Information
                  </button>
                  <button
                    onClick={() =>
                      window.location.href = `/portfolio?community=${encodeURIComponent(selectedCommunity.name)}`
                    }
                    className="flex-1 bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    View Homes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
