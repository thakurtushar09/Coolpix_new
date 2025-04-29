import Footer from '@/components/Footer'
import HelpSection from '@/components/HelpSection'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="relative w-full">
      <div className="relative h-[80vh]">
        
        <div className="absolute inset-0 overflow-hidden m-4 md:m-6 rounded-lg">
          <Image
            src="/halte.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col pt-10">
          <Navbar />
          <div className="flex-grow flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl text-white mb-4 font-extrabold text-center">
              Contact <span className='text-orange-500'>Us</span>
            </h1>
            <div className="w-32 h-1 bg-orange-500 rounded-full transition-all duration-300 hover:w-24"></div>
          </div>
        </div>
      </div>


      <div className="w-[90%] md:w-[80%] mx-auto py-16 flex flex-col md:flex-row gap-8">
       
        <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg flex flex-col items-center">
         
          <div className="w-full h-80 relative mb-6 rounded-lg overflow-hidden">
            <Image
              src="/contact-form-image.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold mb-4 ">Point of Contact</h1>
          
          <p className="text-gray-700 mb-6 text-center">
            Have questions or need assistance? Our team is here to help you with any inquiries you might have.
          </p>
          
          <div className="flex flex-col items-center w-full">
            <a 
              href="tel:8076168701" 
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: 8076168701
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <p className="mb-6">We&apos;ll get back to you as soon as possible</p>
          
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <HelpSection/>

      <div className="pt-12"></div>
      <Footer />
    </div>
  )
}

export default Page