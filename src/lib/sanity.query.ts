import { sanityClient } from '@/lib/sanity.client'

export async function getAllProjects() {
  const query = `*[_type == "portfolio"]{
    _id,
    title,
    "slug": slug.current
  }`
  return await sanityClient.fetch(query)
}

export async function getAllGalleries() {
  const query = `*[_type == "gallery"]{
    _id,
    title,
    "slug": slug.current
  }`
  return await sanityClient.fetch(query)
}

export async function getAllCommunities() {
  const query = `*[_type == "communities"]{
    _id,
    name,
    location,
    description
  }`

  return await sanityClient.fetch(query)
}
