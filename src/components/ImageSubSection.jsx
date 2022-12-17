import { useEffect, useState } from 'react'
import Image from 'next/image'

import vinterAsker from '@/images/vinterAsker.webp'
import sommerAsker from '@/images/sommerAsker.webp'

function Testimonial() {
  return (
    <figure className="relative z-10 max-w-md mx-auto text-center lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="text-xl font-medium font-display text-stone-900">
          “I’ve looked at clouds from both sides now.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-stone-500">
        <strong className="font-semibold text-fuchsia-600 before:content-['—_']">
          Joni Mitchell
        </strong>
        , Sanger- og komponist
      </figcaption>
    </figure>
  )
}

function getSeason() {
  var currentMonth = new Date().getMonth() + 1

  if (currentMonth >= 10 && currentMonth <= 4) return 'winter'
  else if (currentMonth >= 5 && currentMonth <= 9) return 'summer'
  return ''
}

export function ImageSubSection() {
  return (
    <div className="relative h-full border-stone-300/20 lg:border-b">
      <div aria-hidden="true" className="relative animate-fade-in">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/f_auto,q_auto/Sjelesorg%20i%20Asker/therapy_02_hyjlzb.jpg"
          width={5345}
          height={3563}
          alt="Photo by Priscilla Du Preez on Unsplash"
          className="object-cover object-center w-full h-96 animate-fade-in"
        />
        {/* <div
          className="absolute inset-0 bg-fuchsia-300 mix-blend-multiply"
          aria-hidden="true"
        /> */}
        <div className="absolute inset-0 h-full bg-gradient-to-t from-white" />
      </div>
      <div className="relative px-4 pb-16 mx-auto -mt-12 max-w-7xl sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <Testimonial />
          {/* <h2 className="text-3xl font-bold tracking-tight font-display text-stone-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-stone-500">
            Organize is a system to keep your desk tidy and photo-worthy all day
            long. Procrastinate your work while you meticulously arrange items
            into dedicated trays.
          </p> */}
        </div>
      </div>
    </div>
  )
}
