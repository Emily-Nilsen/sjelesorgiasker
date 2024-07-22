import { useEffect, useState } from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <figure className="relative z-10 mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="font-display text-3xl font-medium text-stone-900">
          “Å gi mennesker anledning til å snakke sant om livet og lufte tankene
          sine, er noe jeg finner svært meningsfullt.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-base text-stone-500">
        <strong className="font-semibold text-fuchsia-600 before:content-['—_']">
          Andreas Øksnes
        </strong>
        , Sokneprest i Heggedal
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
          className="h-96 w-full animate-fade-in object-cover object-center"
        />
        <div className="absolute inset-0 h-full bg-gradient-to-t from-white" />
      </div>
      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <Testimonial />
        </div>
      </div>
    </div>
  )
}
