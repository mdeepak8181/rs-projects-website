import { sanityClient, urlFor } from './sanityClient'

export async function getGalleries() {
  const query = `*[_type == "gallery"] | order(_createdAt desc){
    _id,
    title,
    heroImage,
    images
  }`

  const results = await sanityClient.fetch(query)

  return results.map((gallery: any) => ({
    _id: gallery._id,
    title: gallery.title || '',
    heroImage: gallery.heroImage ? urlFor(gallery.heroImage).width(1200).url() : '',
    images: (gallery.images || []).map((img: any) =>
      urlFor(img).width(800).url()
    ),
  }))
}
