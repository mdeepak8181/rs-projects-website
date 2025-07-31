'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About Us', href: '/#about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Communities', href: '/communities' },
        { name: 'Galleries', href: '/#galleries' },
        { name: 'Contact', href: '/#contact' },
    ]

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between min-h-[120px] md:min-h-[140] py-2">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer flex-shrink-0 max-w-[120px] md:max-w-[140px]">
                        <Link href="/">
                            <Image
                                src="/images/logo-main.png"
                                alt="RS Projects Logo"
                                width={140}
                                height={40}
                                priority
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-grow justify-end items-center gap-4 md:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="cursor-pointer text-white hover:text-[#9CAF88] transition-colors duration-300 font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <motion.a
                            href="/#contact"
                            className="bg-[#9CAF88] text-black px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-[#89a379] transition-colors duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2 relative z-50"
                    >
                        <motion.div initial={false} animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <motion.path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                ) : (
                                    <motion.path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </svg>
                        </motion.div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-sm"
                        >
                            <div className="py-4 space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-left text-white hover:text-[#9CAF88] transition-colors duration-300 font-medium px-4 py-2"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <a
                                    href="/#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-left bg-[#9CAF88] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#89a379] transition-colors duration-300 mx-4"
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
