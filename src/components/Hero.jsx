import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/plum_tree.png'

function Testimonial() {
  return (
    <figure className="relative z-10 max-w-md p-2 pt-6 mx-auto text-center sm:p-0 lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="text-lg font-medium font-display text-stone-900 sm:text-xl">
          “I’ve looked at clouds from both sides now.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-xs text-stone-500 sm:text-sm sm:text-stone-500">
        <strong className="font-semibold text-fuchsia-600 before:content-['—_']">
          Joni Mitchell
        </strong>
        , Sanger- og komponist
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-stone-100 lg:bg-stone-100 lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="relative z-10 flex w-64 mx-auto rounded-none shadow-none bg-t md:w-96 lg:w-96">
            <Image
              className="w-full"
              width={666}
              height={980}
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1670133183/Sjelesorg%20i%20Asker/logo_with_text_zrk7i6.svg"
              alt="Sjelesorg i Asker logo"
              priority
            />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-stone-100" />
          <Testimonial />
        </div>
        <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="text-5xl font-extrabold font-display text-stone-900 sm:text-6xl">
              Snakk med oss
            </h1>
            <p className="mt-4 text-3xl text-stone-600">
              Sorg og kjærlighetssorg, eksistensielle spørsmål og troskriser -
              det er ingenting som er for stort eller for lite å snakke med en
              sjelesørger om.
            </p>
            <div className="flex gap-4 mt-8">
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
  )
}
