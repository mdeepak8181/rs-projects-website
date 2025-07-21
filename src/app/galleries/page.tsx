import Image from 'next/image'
import Link from 'next/link'
import { getGalleries } from '@/lib/getGalleries'
import type { Gallery } from '@/types'

export default async function GalleriesPage() {
  const galleries: Gallery[] = await getGalleries()

  return (
    <section className="py-16 bg-zinc-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galleries</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our curated collection of images showcasing the finest kitchens, exteriors, floor plans, and living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleries.map((gallery) => (
            <Link
              key={gallery._id}
              href={`/galleries/${gallery.title?.toLowerCase().replace(/\s/g, '') || ''}`}
              className="group cursor-pointer"
            >
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <Image
                  src={gallery.heroImage}
                  alt={gallery.title || 'Gallery'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{gallery.title || 'Untitled'}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
