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
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const visibleCommunities = communities.slice(currentIndex, currentIndex + 4)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % communities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? communities.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.scrollTo({
        left: currentIndex * 310,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  return (
    <section className="py-24 bg-black" id="communities">
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Communities</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Carefully planned communities designed to match your lifestyle.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory md:overflow-hidden"
          >
            {communities.map((community, index) => (
              <motion.div
                key={community.name}
                className="bg-zinc-900 rounded-lg min-w-[300px] snap-start overflow-hidden hover:bg-zinc-800 transition-all duration-300 cursor-pointer transform hover:scale-105"
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

          {/* Arrows (visible on md and above) */}
          <div className="hidden md:flex absolute top-1/2 left-0 z-10 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-zinc-800 text-white px-3 py-2 rounded-full shadow-md hover:bg-zinc-700"
            >
              &#8592;
            </button>
          </div>

          <div className="hidden md:flex absolute top-1/2 right-0 z-10 -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-zinc-800 text-white px-3 py-2 rounded-full shadow-md hover:bg-zinc-700"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Modal */}
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
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedCommunity.description}
                </p>

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
