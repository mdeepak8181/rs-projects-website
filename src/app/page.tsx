'use client'

import { useEffect, useState } from 'react'
import { Suspense } from 'react'
import Portfolio from '@/components/Portfolio'
import Hero from '@/components/Hero'
import ValuePropositions from '@/components/ValuePropositions'
import CommunitiesCarousel from '@/components/CommunitiesCarousel'
import GalleriesCarousel from '@/components/GalleriesCarousel'
import ContactForm from '@/components/ContactForm'
import { getCommunities } from '@/lib/getCommunities'
import { getGalleries } from '@/lib/getGalleries'
import Seo from '@/components/Seo'

export default function HomePage() {
  const [communities, setCommunities] = useState([])
  const [galleries, setGalleries] = useState([])

  useEffect(() => {
    async function fetchData() {
      const com = await getCommunities()
      const gal = await getGalleries()
      setCommunities(com)
      setGalleries(gal)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 300) // Give time for lazy components to render
      }
    }
  }, [])

  return (
    <>
      <Seo
        title="RS Projects | Custom Home Builders"
        description="RS Projects builds exceptional custom homes designed for modern living. Explore our communities, galleries, and portfolio."
      />
      <main className="bg-black text-white">
        <Hero />
        <ValuePropositions />
        <Suspense fallback={<div>Loading portfolio...</div>}>
          <section id="portfolio" className="scroll-mt-32">
            <Portfolio />
          </section>
        </Suspense>
        <section id="communities" className="scroll-mt-32">
          <CommunitiesCarousel communities={communities} />
        </section>
        <section id="galleries" className="scroll-mt-32">
          <GalleriesCarousel galleries={galleries} />
        </section>
        <section id="contact" className="scroll-mt-32">
          <ContactForm />
        </section>
      </main>
    </>
  )
}
