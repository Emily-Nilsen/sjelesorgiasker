import Image from 'next/image'
import { motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import { Logo } from '@/components/Logo'

function Testimonial() {
  return (
    <figure className="relative z-10 mx-auto max-w-md p-2 pt-6 text-center sm:p-0 lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-white sm:text-2xl">
          “I’ve looked at life from both sides now.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-base font-medium text-fuchsia-200">
        <strong className="font-semibold text-fuchsia-100 before:content-['—_']">
          Joni Mitchell
        </strong>
        , Sanger- og komponist
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-fuchsia-500 opacity-90">
      <div>
        <Image
          className="absolute inset-0 h-full w-full overflow-hidden mix-blend-multiply blur-[2px] sm:blur-sm lg:object-cover"
          src="/images/hero-image.svg"
          alt="Ønstenstad kirke"
          priority
          fill
          unoptimized
        />
      </div>
      <div
        className="absolute inset-0 bg-stone-600 mix-blend-hard-light"
        aria-hidden="true"
      />
      <div className="absolute left-0 top-0 hidden p-6 sm:block">
        <div>
          <Logo width="150px" height="150px" />
        </div>
      </div>
      <header className="bg-t lg:bg-t overflow-hidden lg:px-5">
        <div className="z-1 relative mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
          <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
            <div className="shadow-none bg-t relative z-10 mx-auto flex rounded-none opacity-100 sm:hidden">
              <Logo width="256px" height="256px" />
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
            <div className="lg:bg-t hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block" />
            <Testimonial />
          </div>
          <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
            <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              <h1 className="font-display text-5xl font-extrabold text-stone-900 lg:text-white">
                Sjelesorg i Asker
              </h1>
              <p className="mt-4 text-xl text-stone-600 sm:text-2xl lg:text-fuchsia-200">
                Sorg og eksistensielle spørsmål, troskriser eller problemer i
                nære relasjoner – det er ingenting som er for stort eller for
                lite til å snakke med en sjelesørger om.
              </p>
              <div className="mt-8 flex gap-6">
                <Button href="#sjelesørgere" color="fuchsia">
                  Våre sjelesørgere
                </Button>
                <Button href="#kontakt" variant="outline" color="fuchsia">
                  Ta kontakt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
