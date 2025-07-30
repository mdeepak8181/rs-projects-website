import { getGalleries } from '@/lib/getGalleries'

interface Gallery {
  _id: string
  title: string
  description?: string
  heroImage: string
  images: string[]
}

interface PageProps {
  params: { category: string }
}

// ✅ Required for static paths — manually list your categories here
export async function generateStaticParams() {
  return [
    { category: 'kitchens' },
    { category: 'bathrooms' },
    { category: 'exteriors' },
  ]
}

// ✅ Correctly named "Page" as required by Next.js App Router
export default async function Page({ params }: PageProps) {
  const galleries: Gallery[] = await getGalleries()

  const categoryParam = params.category?.toLowerCase().replace(/[\s&]/g, '')

  const gallery = galleries.find((g: Gallery) =>
    g.title.toLowerCase().replace(/[\s&]/g, '') === categoryParam
  )

  if (!gallery) {
    return <div className="text-white p-10">Gallery not found</div>
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-4">{gallery.title}</h2>
        <p className="text-gray-300 mb-10">{gallery.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.images.map((image, idx) => (
            <div key={idx} className="relative h-64 bg-zinc-900 rounded-lg overflow-hidden">
              <img src={image} alt={gallery.title} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
