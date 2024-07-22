import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { RadioField, TextField } from '@/components/Fields'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import sjelesorgereKontaktSjema from '../../assets/sjelesorgereKontaktSjema'

function FacebookIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 512" {...props}>
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-title"
      className="relative scroll-mt-14 pb-3 pt-16 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-stone-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-stone-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-stone-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/contact-img.webp"
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
            <SectionHeading number="3" id="contact-title">
              Ta kontakt
            </SectionHeading>
            <p className="mt-8 font-display text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              <span className="block text-fuchsia-600">Ta kontakt –</span> Vi
              vil høre fra deg.
            </p>
            <p className="mt-4 text-lg tracking-tight text-stone-600">
              Om du fyller ut kontaktskjemaet under tar vi snart kontakt.
            </p>
            <AuthLayout>
              <form
                action="#"
                subject="Kontakt Sjelesorg i Asker"
                name="Sjelesorg i Asker - Kontakt skjema"
                data-netlify="true"
                method="POST"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="Sjelesorg i Asker - Kontakt skjema"
                />
                <input
                  type="hidden"
                  name="tema"
                  value="Kontakt Sjelesorg i Asker"
                />
                <div className="grid grid-cols-2 gap-6">
                  <TextField
                    label="Fornavn"
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    required
                  />
                  <TextField
                    label="Etternavn"
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    required
                  />
                  <TextField
                    label="Telefon"
                    id="telefon"
                    name="telefon"
                    type="tel"
                    autoComplete="tel"
                    required
                  />
                  <TextField
                    label="E-post"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  {/* <fieldset className="col-span-2">
                    <legend className="block text-base font-semibold text-stone-900">
                      Ønsker du en bestemt sjelesørger?
                    </legend>
                    <div className="grid grid-cols-1 mt-4 gap-y-4">
                      {sjelesorgereKontaktSjema.map((person) => (
                        <div key={person.name} className="flex items-center">
                          <input
                            id={`sjelesørger-${person.name}`}
                            name="sjelesørger"
                            defaultValue={person.name}
                            type="radio"
                            className="w-4 h-4 border-stone-300 text-fuchsia-600 focus:ring-fuchsia-500"
                          />
                          <label
                            htmlFor={`sjelesørger-${person.name}`}
                            className="ml-3"
                          >
                            <span className="block text-base text-stone-700">
                              {person.name}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset> */}

                  <div className="col-span-2 pt-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="form-message"
                        className="mb-2 block text-base font-semibold text-stone-900"
                      >
                        Hva ønsker du å arbeide med i samtalene? (Ikke skriv
                        sensitiv informasjon)
                      </label>
                      <span
                        id="form-message-description"
                        className="text-base text-slate-500"
                      >
                        {/* Max */}
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="form-message"
                        required
                        maxLength="500"
                        name="form-message"
                        aria-describedby="form-message-description"
                        rows={4}
                        className="shadow-none block w-full min-w-0 flex-auto appearance-none rounded-md border border-stone-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-stone-800/5 placeholder:text-stone-400 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/10 sm:text-base dark:border-stone-700 dark:bg-stone-700/[0.15] dark:text-stone-200 dark:placeholder:text-stone-500 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-400/10"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                {/* Agree */}

                <fieldset className="mt-6">
                  <div className="space-y-8">
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="samtykke"
                          name="samtykke"
                          type="checkbox"
                          required
                          className="h-4 w-4 rounded border-stone-300 text-fuchsia-600 focus:ring-fuchsia-500"
                        />
                      </div>
                      <div className="-mt-1 ml-3 text-base ">
                        <label
                          htmlFor="samtykke"
                          className="font-medium tracking-normal text-stone-600"
                        >
                          For å sikre at den sjelesorgen som gis blir best
                          mulig, samtykker jeg i at min sjelesørger tar imot
                          veiledning i et lukket forum. Ingen opplysninger vil
                          bli gitt der som kan identifisere meg.
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className="flex gap-6 sm:justify-end">
                  <Button
                    className="mt-8 w-fit px-10"
                    type="button"
                    href="#kontakt"
                    variant="outline"
                    color="fuchsiaDark"
                    onClick={() => window.location.reload()}
                  >
                    Slett
                  </Button>
                  <Button
                    type="submit"
                    color="fuchsia"
                    className="mt-8 w-fit px-10"
                  >
                    Send inn
                  </Button>
                </div>
              </form>
            </AuthLayout>
            {/* <p className="mt-8 opacity-100">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/%C3%98stenstad-kirke-2273108242925774"
                className="inline-flex items-center text-base font-medium tracking-tight text-fuchsia-600"
              >
                <FacebookIcon className="w-10 h-10 fill-current" />
                <span className="ml-4">Følg oss på Facebook</span>
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
