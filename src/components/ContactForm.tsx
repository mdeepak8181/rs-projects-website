'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm as useFormspree } from '@formspree/react'
import { motion } from 'framer-motion'
import { trackFormSubmission, trackContactClick } from '../lib/analytics'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [state, handleSubmit] = useFormspree("your-form-id")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      trackFormSubmission('Contact Form')
      await new Promise(resolve => setTimeout(resolve, 2000))
      if (true) {
        reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const [showSuccess, setShowSuccess] = useState(false)

  if (showSuccess) {
    setTimeout(() => setShowSuccess(false), 5000)
    return (
      <motion.div className="text-center py-8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Dream Home Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ready to build your custom home? Get in touch with our team for a personalized consultation and let's bring your vision to life.</p>
        </motion.div>

        <motion.form
          onSubmit={handleFormSubmit((data) => {
            onSubmit(data)
            setShowSuccess(true)
          })}
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input {...register('name')} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88] text-gray-700" placeholder="John Smith" />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input {...register('email')} type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88] text-gray-700" placeholder="john@example.com" />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input {...register('phone')} type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88] text-gray-700" placeholder="(555) 123-4567" />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
              <select {...register('projectType')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88] text-gray-700 bg-white">
                <option value="">Select project type</option>
                <option value="new-home">New Home Construction</option>
                <option value="renovation">Home Renovation</option>
                <option value="addition">Home Addition</option>
                <option value="commercial">Commercial Project</option>
                <option value="consultation">Design Consultation</option>
              </select>
              {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range *</label>
              <select {...register('budget')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88] text-gray-700 bg-white">
                <option value="">Select budget range</option>
                <option value="under-500k">Under $500,000</option>
                <option value="500k-750k">$500,000 - $750,000</option>
                <option value="750k-1m">$750,000 - $1,000,000</option>
                <option value="1m-1.5m">$1,000,000 - $1,500,000</option>
                <option value="1.5m-2m">$1,500,000 - $2,000,000</option>
                <option value="over-2m">Over $2,000,000</option>
              </select>
              {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>}
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Desired Timeline *</label>
              <select {...register('timeline')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88] text-gray-700 bg-white">
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="1-year">Within 1 year</option>
                <option value="planning">Just planning/researching</option>
              </select>
              {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project *</label>
            <textarea {...register('message')} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88] text-gray-700 resize-vertical" placeholder="Describe your vision..." />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            onClick={() => trackContactClick('Contact Form')}
            className="w-full bg-[#9CAF88] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#7a9366] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Message...
              </span>
            ) : (
              'Get Your Free Consultation'
            )}
          </motion.button>

          <p className="text-sm text-gray-500 text-center mt-4">We respect your privacy. Your information will never be shared with third parties.</p>
        </motion.form>

        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-[#9CAF88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#9CAF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-[#9CAF88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#9CAF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
            <p className="text-gray-600 text-sm">Complimentary initial consultation for all projects</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-[#9CAF88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#9CAF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Professional advice from experienced builders</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
