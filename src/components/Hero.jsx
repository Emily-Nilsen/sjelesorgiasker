import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/hero.png'

function Logo() {
  return (
    <Link href="/">
      <div className="absolute top-0 left-0 flex items-center w-full h-12 m-6">
        <div className="relative z-20 w-10 h-full">
          <Image
            className="w-full"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669743870/Sjelesorg%20i%20Asker/white_door_pqmsia.svg"
            width={150}
            height={300}
            contain
            center
            alt="Sjelesorg i Asker logo"
          />
        </div>
        <span className="relative z-20 pt-3.5 pl-3 font-display text-xs uppercase leading-4 text-white sm:text-sm">
          <p>sjelesorg</p>
          <p>i asker</p>
        </span>
      </div>
    </Link>
  )
}

function Testimonial() {
  return (
    <figure className="relative z-10 max-w-md p-2 pt-6 mx-auto text-center sm:p-0 lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="text-lg font-medium font-display text-stone-900 sm:text-xl">
          “I’ve looked at clouds from both sides now.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-xs text-stone-500 sm:text-sm sm:text-white">
        <strong className="font-semibold text-fuchsia-600 before:content-['—_']">
          Joni Mitchell
        </strong>
        , Sanger- og komponist
      </figcaption>
    </figure>
  )
}

function MovingGradient() {
  return (
    <div className="absolute left-0 bg-t top-20 sm:inset-0">
      <div className="relative flex items-center w-1/3 h-1/3 sm:h-full sm:w-full sm:items-end">
        <div className="relative h-96 w-96 max-w-lg bg-white sm:mb-28 sm:ml-20 sm:h-[500px] sm:w-full">
          {/* Three blobs */}
          <div className="absolute left-0 w-40 h-40 rounded-full opacity-100 animation-delay-2000 top-28 animate-text animate-blob bg-gradient-to-tl from-white via-yellow-300 to-fuchsia-500 mix-blend-multiply blur-2xl filter sm:-left-4 sm:top-0 sm:h-72 sm:w-72"></div>
          <div className="absolute w-40 h-40 rounded-full top-16 animate-text bg-gradient-to-b from-fuchsia-500 via-pink-300 to-yellow-300 opacity-70 mix-blend-multiply blur-2xl filter sm:-right-4 sm:top-0 sm:h-72 sm:w-72"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full animation-delay-4000 animate-text bg-gradient-to-r from-white via-yellow-300 to-fuchsia-500 opacity-70 mix-blend-multiply blur-2xl filter sm:-bottom-8 sm:left-20 sm:h-72 sm:w-72"></div>
        </div>
      </div>
    </div>
  )
}

function HeroText() {
  return (
    <div className="absolute right-0 max-w-xs p-12 top-20 sm:relative sm:-top-8 sm:block sm:max-w-none sm:p-0 lg:top-0">
      <div className="relative z-30 h-full z-full">
        <h1 className="text-4xl font-extrabold bg-transparent font-display text-stone-900 drop-shadow sm:text-6xl sm:drop-shadow-none">
          Sjelesorg i Asker.
        </h1>
        <p className="pb-0 mt-4 text-white text:lg drop-shadow sm:pb-4 sm:text-3xl sm:drop-shadow-none lg:pb-0">
          Sorg og kjærlighetssorg, eksistensielle spørsmål og troskriser - det
          er ingenting som er for stort eller for lite å snakke med en
          sjelesørger om.
        </p>
      </div>
    </div>
  )
}

function HeroButtons() {
  return (
    <div className="flex gap-4 mt-8">
      <Button href="#sjelesørgere" color="fuchsia">
        Våre sjelesørgere
      </Button>
      <Button href="#kontakt" variant="outline" color="fuchsiaLight">
        Ta kontakt
      </Button>
    </div>
  )
}

export function Hero() {
  return (
    <>
      {/* HERO MOBILE */}
      <header className="bg-t relative flex h-[100vh] max-h-[670px] w-full flex-col overflow-hidden sm:hidden">
        <Logo />
        {/* Hero image */}
        <div className="relative h-[600px]">
          {/* Hero image mobile */}
          <div className="relative z-10 w-full h-full opacity-100 sm:hidden">
            <Image
              className="w-full"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669970527/Sjelesorg%20i%20Asker/sjelesorg_hero_mobile_irzsj2.svg"
              fill
              objectFit="cover"
              alt="Sjelesorg i Asker"
              priority
            />
          </div>
          {/* Blurry, animated background shapes */}
          <MovingGradient />
          {/* Hero text */}
          <div className="w-full h-full max-w-xs">
            <HeroText />
          </div>
          <div className="absolute left-0 z-20 flex justify-center w-full bottom-8">
            {/* Hero buttons */}
            <HeroButtons />
          </div>
        </div>
        <div className="relative w-full">
          <Testimonial />
        </div>
      </header>

      {/* DO NOT EDIT BELOW! */}

      {/* HERO DESKTOP */}
      <header className="relative hidden min-h-[70vh] overflow-hidden bg-stone-100 sm:block lg:bg-transparent lg:px-5">
        <Logo />
        {/* Hero image */}
        <div className="absolute inset-0">
          {/* Hero image desktop */}
          <div className="relative z-10 w-full h-full opacity-100">
            <Image
              className="w-full"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669817165/Sjelesorg%20i%20Asker/adjusted_v4_mb4lza.svg"
              fill
              objectFit="cover"
              alt="Sjelesorg i Asker"
              priority
            />
          </div>

          {/* Blurry, animated background shapes */}
          <MovingGradient />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
          <div className="relative flex items-end lg:col-span-5 lg:row-span-2"></div>
          <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
            <div className="lg:bg-t hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block" />
            <Testimonial />
          </div>
          <div className="relative z-10 max-w-md px-6 pt-16 pb-4 mb-10 ml-auto mr-10 bg-t lg:col-span-7 lg:m-0 lg:max-w-none lg:p-0 lg:pt-0 lg:pl-16 xl:pl-20">
            <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              {/* Hero text */}
              <HeroText />
              <div className="mt-6 lg:mt-0">
                {/* Hero buttons */}
                <HeroButtons />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
