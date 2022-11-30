import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/hero.png'

function Testimonial() {
  return (
    <figure className="relative z-10 max-w-md mx-auto text-center lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="text-xl font-medium font-display text-stone-900">
          “I’ve looked at clouds from both sides now.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-white">
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
    <header className="relative min-h-[70vh] overflow-hidden bg-stone-100 lg:bg-transparent lg:px-5">
      <Link href="/">
        <div className="absolute top-0 left-0 flex items-center w-full h-12 m-6">
          <div className="relative z-20 w-10 h-full">
            <Image
              className="w-full"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669743870/Sjelesorg%20i%20Asker/white_door_pqmsia.svg"
              width={150}
              height={300}
              objectFit="contain"
              objectPosition="center"
              alt="Sjelesorg i Asker"
            />
          </div>
          <span className="relative z-20 pt-3.5 pl-3 font-display text-sm uppercase leading-4 text-white">
            <p>sjelesorg</p>
            <p>i asker</p>
          </span>
        </div>
      </Link>
      {/* Blurry, animated background shapes */}
      <div className="absolute inset-0">
        <div className="relative z-10 w-full h-full opacity-100">
          <Image
            className="w-full"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669817165/Sjelesorg%20i%20Asker/adjusted_v4_mb4lza.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            alt="Sjelesorg i Asker"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-t">
          <div className="relative flex items-end w-full h-full">
            <div className="relative mb-28 ml-20 h-[500px] w-full max-w-lg bg-white">
              <div className="absolute top-0 rounded-full opacity-100 animation-delay-2000 -left-4 h-72 w-72 animate-text animate-blob bg-gradient-to-tl from-yellow-300 via-white to-fuchsia-500 mix-blend-multiply blur-2xl filter"></div>
              <div className="absolute top-0 rounded-full -right-4 h-72 w-72 animate-text bg-gradient-to-b from-fuchsia-300 via-pink-300 to-yellow-300 opacity-70 mix-blend-multiply blur-2xl filter"></div>
              <div className="absolute rounded-full animation-delay-4000 left-20 -bottom-8 h-72 w-72 animate-text bg-gradient-to-r from-white via-yellow-300 to-fuchsia-500 opacity-70 mix-blend-multiply blur-2xl filter"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          {/* <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-fuchsia-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div> */}
          {/* <div className="relative z-10 flex w-64 mx-auto shadow-xl rounded-xl bg-stone-600 md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div> */}
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="lg:bg-t hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block" />
          <Testimonial />
        </div>
        <div className="relative z-10 pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="text-5xl font-extrabold font-display text-stone-900 sm:text-6xl">
              Sjelesorg i Asker.
            </h1>
            <p className="mt-4 text-3xl text-white">
              Sorg og kjærlighetssorg, eksistensielle spørsmål og troskriser -
              det er ingenting som er for stort eller for lite å snakke med en
              sjelesørger om.
            </p>
            <div className="flex gap-4 mt-8">
              <Button href="#sjelesørgere" color="fuchsia">
                Våre sjelesørgere
              </Button>
              <Button href="#kontakt" variant="outline" color="fuchsiaLight">
                Ta kontakt
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
