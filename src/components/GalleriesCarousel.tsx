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

export default function GalleriesCarousel({ galleries }: { galleries: Gallery[] }) {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Galleries</h2>
          <p className="text-gray-300">
            Discover inspiration across our portfolio of kitchens, exteriors, floor plans, and living spaces.
          </p>
        </div>

        <div className="flex space-x-4 overflow-x-auto">
          {galleries.map((gallery) => (
            <div key={gallery._id} className="min-w-[300px] bg-zinc-900 rounded-lg">
              <Link href={`/galleries/${gallery.title.toLowerCase().replace(/\s/g, '')}`}>
                <div className="relative h-64">
                  <Image
                    src={gallery.heroImage}
                    alt={gallery.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-green-800 text-xl font-bold">{gallery.title}</h3>
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <p className="text-gray-400 text-sm">{gallery.description}</p>
                <Link href={`/galleries/${gallery.title.toLowerCase().replace(/\s/g, '')}`}>
                  <p className="mt-4 text-[color:#9CAF88] text-sm cursor-pointer">View More</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
