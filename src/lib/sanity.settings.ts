import { sanityClient } from '@/lib/sanity.client'

export async function getSiteSettings() {
    const query = `*[_type == "siteSettings"][0]{
        heroVideo {
            asset->{
                url
            }
        },
        contactEmail,
        contactPhone,
        address
    }`

    return await sanityClient.fetch(query)
}