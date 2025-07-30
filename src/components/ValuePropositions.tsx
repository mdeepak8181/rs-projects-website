'use client'

import { CSSProperties } from 'react'
import { Award, Home, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FadeInWhenVisible = ({
    children,
    delay = 0,
}: {
    children: React.ReactNode
    delay?: number
}) => (
    <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay }}
    >
        {children}
    </motion.div>
)

export default function ValuePropositions() {
    return (
        <section id="about" className="py-16 sm:py-20 bg-zinc-900 scroll-mt-24">

            <div className="container mx-auto px-4">

                <FadeInWhenVisible delay={0.1}>
                    <div className="mb-16 sm:mb-20">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center mb-6">
                                    <Award className="w-6 sm:w-8 h-6 sm:h-8 text-green-800 mr-4" />
                                    <h2 className="text-2xl sm:text-3xl font-bold text-green-800">Unmatched Quality</h2>
                                </div>
                                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                    Masterfully crafted with over a decade of excellence and innovation, RS Projects sets the standard for luxury custom homebuilding with a thoughtfully resource-efficient approach. Our homes don't just impress the eye, but consciously prioritize human comfort and health, intelligent flow and environmental sustainability.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/value-1.png"
                                    alt="Completed Home"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                    <div className="mb-16 sm:mb-20">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div className="order-1 relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/value-2.png"
                                    alt="Backyard Space"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="order-2">
                                <div className="flex items-center mb-6">
                                    <Home className="w-6 sm:w-8 h-6 sm:h-8 text-green-800 mr-4" />
                                    <h2 className="text-2xl sm:text-3xl font-bold text-green-800">Truly Bespoke</h2>
                                </div>
                                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                    At RS Projects, we take the time to foster an intimate relationship with clients to curate an amazing experience your family can treasure for a lifetime. With our vast library of plans and an award-winning team of architects, RS Projects will translate your vision into reality, creating a personalized work of art in harmony with its environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                    <div>
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center mb-6">
                                    <Palette className="w-6 sm:w-8 h-6 sm:h-8 text-green-800 mr-4" />
                                    <h2 className="text-2xl sm:text-3xl font-bold text-green-800">Unparalleled Design</h2>
                                </div>
                                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                    The art of luxury is perfected in our unparalleled design process. From spectacular modern structures to timeless family homes, our experienced design team's creative vision and meticulous attention to detail create masterpieces that are delightful to live in, with design concepts, methods and one-of-a-kind finishes drawn from around the world.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/value-3.png"
                                    alt="Under Construction"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>

            </div>
        </section>
    )
}
