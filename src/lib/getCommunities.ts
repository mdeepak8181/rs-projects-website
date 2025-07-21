import { sanityClient, urlFor } from './sanityClient'

export async function getCommunities() {
  const query = `*[_type == "community"] | order(_createdAt desc){
    _id,
    name,
    description,
    features,
    image,
    heroImage
  }`

  const results = await sanityClient.fetch(query)

  return results.map((community: any) => ({
    ...community,
    image: community.image ? urlFor(community.image).width(600).url() : '',
    heroImage: community.heroImage ? urlFor(community.heroImage).width(1200).url() : '',
  }))
}
