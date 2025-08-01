'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Gallery {
  _id: string
  title: string
  description?: string
  heroImage: string
  images: string[]
}

function generateSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function GalleriesCarousel({ galleries }: { galleries: Gallery[] }) {
  return (
    <section id="galleries" className="py-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Galleries</h2>
          <p className="text-gray-300">
            Discover inspiration across our portfolio of kitchens, exteriors, floor plans, and living spaces.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex space-x-4 overflow-x-auto">
          {galleries.map((gallery) => {
            const slug = generateSlug(gallery.title)

            return (
              <div key={gallery._id} className="min-w-[300px] bg-zinc-900 rounded-lg flex-shrink-0">
                <Link href={`/galleries/${slug}`} aria-label={`View ${gallery.title} gallery`}>
                  <div className="relative h-64">
                    <Image
                      src={gallery.heroImage}
                      alt={`${gallery.title} Preview`}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">{gallery.title}</h3>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  {gallery.description && (
                    <p className="text-gray-400 text-sm">{gallery.description}</p>
                  )}
                  <Link href={`/galleries/${slug}`}>
                    <p className="mt-4 text-[color:#9CAF88] text-sm cursor-pointer hover:underline">
                      View More
                    </p>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
