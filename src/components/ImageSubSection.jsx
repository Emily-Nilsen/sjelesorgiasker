import { useEffect, useState } from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <figure className="relative z-10 max-w-md mx-auto text-center lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="text-3xl font-medium font-display text-stone-900">
          “Jeg vet av utdanning og erfaring at det kan være nyttig å ha en
          samtalepartner å sortere tanker og følelser med. Med en som ikke har
          svarene, men som kan lytte og komme med innspill.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-base text-stone-500">
        <strong className="font-semibold text-fuchsia-600 before:content-['—_']">
          Kjellaug Andersen
        </strong>
        , pensjonert lege
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
    <div className="relative h-full">
      <div aria-hidden="true" className="relative animate-fade-in">
        <Image
          src="/images/therapy.webp"
          width={5345}
          height={3563}
          alt="Photo by Priscilla Du Preez on Unsplash"
          className="object-cover object-center w-full h-96 animate-fade-in"
        />
        <div className="absolute inset-0 h-full bg-gradient-to-t from-white" />
      </div>
      <div className="relative px-4 pb-16 mx-auto -mt-12 max-w-7xl sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <Testimonial />
        </div>
      </div>
    </div>
  )
}
