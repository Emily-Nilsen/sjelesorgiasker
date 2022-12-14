import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import { Logo } from '@/components/Logo'

function Testimonial() {
  return (
    <figure className="relative z-10 max-w-md p-2 pt-6 mx-auto text-center sm:p-0 lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="text-lg font-medium text-white font-display sm:text-xl">
          âIâve looked at life from both sides now.â
        </p>
      </blockquote>
      <figcaption className="mt-2 text-xs font-medium text-fuchsia-200 sm:text-sm">
        <strong className="font-semibold text-fuchsia-100 before:content-['â_']">
          Joni Mitchell
        </strong>
        , Sanger- og komponist
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-fuchsia-500 opacity-90">
      <Image
        className="absolute inset-0 h-full w-full overflow-hidden mix-blend-multiply blur-[2px] sm:blur-sm lg:object-cover"
        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1671207597/Sjelesorg%20i%20Asker/kirke-mixed_overlay_hw9fay.svg"
        alt="Sjelesorg i Asker logo"
        priority
        fill
        unoptimized
      />
      <div
        className="absolute inset-0 bg-stone-600 mix-blend-hard-light"
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 hidden p-6 sm:block">
        <div>
          <Logo width="150px" height="150px" />
        </div>
      </div>
      <header className="overflow-hidden bg-t lg:bg-t lg:px-5">
        <div className="z-1 relative mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
          <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
            <div className="relative z-10 flex mx-auto rounded-none shadow-none opacity-100 bg-t sm:hidden">
              <Logo width="256px" height="256px" />
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
            <div className="lg:bg-t hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block" />
            <Testimonial />
          </div>
          <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
            <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              <h1 className="text-5xl font-extrabold font-display text-stone-900 sm:text-6xl lg:text-white">
                Sjelesorg i Asker
              </h1>
              <p className="mt-4 text-3xl text-stone-600 lg:text-fuchsia-200">
                Sorg og eksistensielle spÃ¸rsmÃ¥l, troskriser eller problemer i
                nÃ¦re relasjoner â det er ingenting som er for stort eller for
                lite til Ã¥ snakke med en sjelesÃ¸rger om.
              </p>
              <div className="flex gap-4 mt-8">
                <Button href="#sjelesÃ¸rgere" color="fuchsia">
                  VÃ¥re sjelesÃ¸rgere
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
