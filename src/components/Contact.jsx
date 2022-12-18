import Image from 'next/image'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author.png'

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

function TwitterIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 512" {...props}>
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative pt-16 pb-3 scroll-mt-14 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-stone-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative max-w-5xl pt-16 mx-auto sm:px-6">
        <div className="pt-px bg-stone-50 sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-stone-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/f_auto,q_auto/Sjelesorg%20i%20Asker/%C3%98stenstad_kirke_eydpot.jpg"
              alt="Østenstad kirke"
              fill
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
            <div
              className="absolute inset-0 bg-fuchsia-600 mix-blend-color"
              aria-hidden="true"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="contact-title">
              Ta kontakt
            </SectionHeading>
            <p className="mt-8 text-5xl font-extrabold tracking-tight font-display text-stone-900 sm:text-6xl">
              <span className="block text-fuchsia-600">Ta kontakt –</span> Vi
              vil høre fra deg.
            </p>
            <p className="mt-4 text-lg tracking-tight opacity-0 text-stone-700">
              I’ve been designing icons professionally for over a decade and
              have worked with dozens of the biggest brands to create custom
              sets for their products. I’m an accomplished conference speaker,
              and have been teaching icon design workshops every month for the
              last three years. I’ve worked with designers of all skill levels
              and honed my way of teaching to really click for anyone who has
              the itch to start designing their own icons.
            </p>
            <p className="mt-8 opacity-100">
              <Link
                href="#"
                className="inline-flex items-center text-base font-medium tracking-tight text-fuchsia-600"
              >
                <TwitterIcon className="w-10 h-10 fill-current" />
                <span className="ml-4">Follow on Facebook</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
