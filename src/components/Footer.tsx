'use client'

import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#9CAF88]/20 rounded-full flex items-center justify-center border border-[#9CAF88] mr-4">
                <div className="text-lg font-bold text-[#9CAF88]">RS</div>
              </div>
              <div className="text-2xl font-bold text-[#9CAF88]">RS PROJECTS</div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building Life&apos;s Backdrop - Creating exceptional custom homes that become the foundation for your family&apos;s most treasured memories.
            </p>
            <button
              onClick={handleScrollToContact}
              className="bg-[#9CAF88] text-black px-6 py-3 rounded-lg inline-block font-semibold hover:bg-[#556B2F] transition-colors cursor-pointer"
            >
              GET IN TOUCH, WE&apos;RE JUST A CLICK AWAY
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#9CAF88] mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#9CAF88] mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Winnipeg</p>
                  <p>Manitoba</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#9CAF88] mr-3" />
                <span className="text-gray-300">(204) 294-4008</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#9CAF88] mr-3" />
                <span className="text-gray-300">(204) 960-6399</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#9CAF88] mr-3" />
                <span className="text-gray-300">info@rsprojects.ca</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#9CAF88] mb-4">Hours</h3>
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-[#9CAF88] mr-3 mt-1" />
              <div className="text-gray-300">
                <p>Monday - Friday</p>
                <p>8:00am - 5:00pm</p>
                <p className="mt-2">Saturday</p>
                <p>9:00am - 3:00pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-[#9CAF88] transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-[#9CAF88] transition-colors">Facebook</a>
          </div>
          <div className="text-gray-400 text-sm">
            © Copyright RS Projects 2024
          </div>
        </div>
      </div>
    </footer>
  )
}
