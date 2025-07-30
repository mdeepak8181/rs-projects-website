'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Community } from '@/types'

interface CommunitiesProps {
  communities: Community[]
}

export default function Communities({ communities }: CommunitiesProps) {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null)

  const openModal = (community: Community) => {
    setSelectedCommunity(community)
  }

  const closeModal = () => {
    setSelectedCommunity(null)
  }

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    closeModal()
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Communities</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            RS Projects is proud to partner with well-regarded developers that put effort into creating
            communities that are carefully planned from their inception.
          </p>
        </motion.div>

        <div className="flex space-x-4 overflow-x-auto">
          {communities?.map((community) => (
            <motion.div
              key={community.name}
              className="bg-zinc-900 rounded-lg min-w-[300px] overflow-hidden hover:bg-zinc-800 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(community)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={community.heroImage}
                  alt={community.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{community.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{community.description}</p>
                <span className="text-green-800 font-medium text-sm">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCommunity && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-zinc-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src={selectedCommunity.heroImage}
                  alt={selectedCommunity.name}
                  layout="fill"
                  objectFit="cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedCommunity.name}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedCommunity.description}
                </p>

                {selectedCommunity.features?.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-white mb-4">Community Features</h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {selectedCommunity.features?.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <svg className="w-4 h-4 text-green-800 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={handleContactUs}
                    className="flex-1 bg-green-800 text-black py-3 px-6 rounded-lg font-semibold hover:bg-green-900 transition-colors"
                  >
                    Get More Information
                  </button>
                  <Link
                    href={`/portfolio?community=${encodeURIComponent(selectedCommunity.name)}`}
                    className="flex-1 bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    View Homes
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
