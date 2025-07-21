import { sanityClient, urlFor } from './sanityClient'

export async function getProjects() {
  const query = `*[_type == "portfolio"] | order(_createdAt desc){
    _id,
    title,
    location,
    type,
    year,
    size,
    bedrooms,
    bathrooms,
    description,
    features,
    "community": community->{
      name
    },
    images {
      hero,
      before,
      gallery
    },
    budget_range,
    timeline
  }`

  const results = await sanityClient.fetch(query)

  return results.map((project: any) => ({
    ...project,
    images: {
      hero: urlFor(project.images.hero).width(800).url(),
      before: urlFor(project.images.before).width(800).url(),
      gallery: (project.images.gallery || []).map((img: any) => urlFor(img).width(800).url()),
    },
  }))
}
