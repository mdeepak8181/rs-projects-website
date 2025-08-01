'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getProjects } from '@/lib/getProjects'

interface Project {
  _id: string
  title: string
  location: string
  type: string
  year: string
  size: string
  bedrooms: number
  bathrooms: number
  description: string
  features: string[]
  images: {
    hero: string
    before: string
    gallery: string[]
  }
  budget_range: string
  timeline: string
}

export default function Portfolio() {
  const searchParams = useSearchParams()
  const communityParam = searchParams.get('community')
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [filter, setFilter] = useState<'All' | 'Spec' | 'Custom' | 'Sold'>('All')

  useEffect(() => {
    getProjects().then((data) => setProjects(data))
  }, [])

  const filteredProjects = communityParam
    ? projects.filter((project) =>
        project.location.toLowerCase().trim() === communityParam.toLowerCase().trim()
      )
    : projects.filter((project) => {
        if (filter === 'All') return true
        if (filter === 'Spec') return project.type.toLowerCase().includes('spec')
        if (filter === 'Custom') return project.type.toLowerCase().includes('custom')
        if (filter === 'Sold') return project.type.toLowerCase().includes('sold')
        return true
      })

  const openGallery = (project: Project, imageIndex = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedProject(null)
  }

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.gallery.length - 1 ? 0 : prev + 1
      )
    }
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.gallery.length - 1 : prev - 1
      )
    }
  }, [selectedProject])

  return (
    <section className="py-16 bg-zinc-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {communityParam && (
          <div className="mb-4 flex justify-end">
            <Link href="/communities">
              <span className="text-green-800 underline hover:text-green-900 transition-colors cursor-pointer">
                ← Back to Communities
              </span>
            </Link>
          </div>
        )}

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
            {communityParam ? `Homes in ${communityParam}` : 'Our Project Portfolio'}
          </h2>
          <p className="max-w-xl mx-auto text-gray-300 mb-6">
            Discover our latest custom homes and renovations. Each project showcases our commitment to exceptional craftsmanship, innovative design, and client satisfaction.
          </p>

          {!communityParam && (
            <div className="flex justify-center space-x-2 flex-wrap">
              {['All', 'Spec', 'Custom', 'Sold'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category as 'All' | 'Spec' | 'Custom' | 'Sold')}
                  className={`px-4 py-2 rounded-full font-medium text-sm mb-2 transition-all duration-300 ${
                    filter === category
                      ? 'bg-green-800 text-white'
                      : 'bg-zinc-800 text-gray-300 hover:bg-green-700 hover:text-white'
                  }`}
                >
                  {category === 'All' ? 'All Projects' : `${category} Homes`}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Responsive Projects Section */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 hidden">
          {filteredProjects.map((project) => (
            <motion.div
              key={project._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.images.hero}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-medium">{project.type}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">{project.year}</span>
                </div>
              </div>
              <div className="p-6 text-black">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.location}</p>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <button
                  onClick={() => openGallery(project, 0)}
                  className="w-full bg-green-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-900 transition-colors"
                >
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll Carousel */}
        <div className="flex md:hidden space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="snap-center min-w-[90%] bg-white text-black rounded-xl shadow-lg overflow-hidden flex-shrink-0"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.images.hero}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <button
                  onClick={() => openGallery(project, 0)}
                  className="w-full bg-green-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-900 transition-colors"
                >
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        <AnimatePresence>
          {isGalleryOpen && selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
            >
              <motion.div
                className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-black">{selectedProject.title}</h3>
                    <button onClick={closeGallery} className="p-2 hover:bg-gray-100 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="relative w-full h-96">
                  <Image
                    src={selectedProject.images.gallery[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">‹</button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">›</button>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold mb-2">Project Details</h4>
                  <p className="text-gray-700 text-sm mb-4">{selectedProject.description}</p>
                  <ul className="text-sm space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
