import GalleriesCarousel from '@/components/GalleriesCarousel'
import { getGalleries } from '@/lib/getGalleries'

interface Props {
  params: { category: string }
}

export default async function GalleryDetailPage({ params }: Props) {
  const galleries = await getGalleries()
  const categoryParam = params.category?.toLowerCase().replace(/[\s&]/g, '')
  const gallery = galleries.find(
    (g) => g.title.toLowerCase().replace(/[\s&]/g, '') === categoryParam
  )

  if (!gallery) {
    return <div className="text-white p-10">Gallery not found</div>
  }

  return <GalleriesCarousel gallery={gallery} />
}
