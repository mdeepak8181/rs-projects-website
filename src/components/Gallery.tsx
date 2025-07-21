'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Gallery {
  _id: string
  title: string
  description?: string
  heroImage: string
}

export default function GalleryComponent({ galleries }: { galleries: Gallery[] }) {
  return (
    <section className="py-16 bg-black text-white" id="galleries">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Galleries</h2>
        <p className="text-gray-300 mb-10">
          Explore a curated selection of our Kitchens, Exteriors, Floor Plans, and Living/Dining designs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleries.map((gallery) => (
            <div key={gallery._id} className="bg-zinc-900 rounded-lg overflow-hidden">
              <Link href={`/galleries/${gallery.title.toLowerCase().replace(/\s/g, '')}`}>
                <div className="relative h-56">
                  <Image
                    src={gallery.heroImage}
                    alt={gallery.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{gallery.title}</h3>
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <p className="text-gray-400 text-sm">{gallery.description}</p>
                <Link href={`/galleries/${gallery.title.toLowerCase().replace(/\s/g, '')}`}>
                  <p className="mt-4 text-green-800 text-sm cursor-pointer">View More</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
