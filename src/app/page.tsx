import Seo from '@/components/Seo'
import Hero from '@/components/Hero'
import ValuePropositions from '@/components/ValuePropositions'
import Portfolio from '@/components/Portfolio'
import CommunitiesCarousel from '@/components/CommunitiesCarousel'
import GalleriesCarousel from '@/components/GalleriesCarousel'
import ContactForm from '@/components/ContactForm'
import { getCommunities } from '@/lib/getCommunities'
import { getGalleries } from '@/lib/getGalleries'

export default async function HomePage() {
  const communities = await getCommunities()
  const galleries = await getGalleries()

  return (
    <>
      <Seo
        title="RS Projects | Custom Home Builders"
        description="RS Projects builds exceptional custom homes designed for modern living. Explore our communities, galleries, and portfolio."
      />
      <main className="bg-black text-white">
        <Hero />
        <ValuePropositions />
        <Portfolio />
        <CommunitiesCarousel communities={communities} />
        <GalleriesCarousel galleries={galleries} />
        <section id="contact">
          <ContactForm />
        </section>
      </main>
    </>
  )
}
