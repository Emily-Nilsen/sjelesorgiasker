import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

const items = ['14. februar', '13. mars', '3. april', '15. mai']

export function Invitation() {
  return (
    <section
      id="invitation"
      aria-label="Sjelefred våren 2023"
      className="scroll-mt-14 bg-fuchsia-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:w-1/2 sm:text-5xl lg:w-auto">
              Sjelefred våren 2024
            </h2>
            <ul
              role="list"
              className="mt-10 space-y-2 text-lg tracking-tight text-fuchsia-100"
            >
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="lg:pl-16">
              <div className="flex items-center">
                <span>
                  <ClockIcon className="mr-2 h-5 w-5 text-fuchsia-300" />
                </span>

                <h3 className="text-base font-medium tracking-tight text-white">
                  kl. 20.30-21.00
                </h3>
              </div>
              <div className="group flex items-center">
                <MapPinIcon className="mr-2 h-5 w-5 text-fuchsia-300 transition group-hover:text-fuchsia-50" />
                <h3 className="text-base font-medium tracking-tight text-white">
                  <a
                    className="underline transition group-hover:text-fuchsia-100"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.google.com/maps/place/%C3%98stenstad+menighet/@59.8126349,10.4595882,17z/data=!3m1!4b1!4m5!3m4!1s0x46411574000c6d5b:0x4358793260a7b359!8m2!3d59.8124251!4d10.4638969"
                  >
                    Østenstad kirke
                  </a>
                  , Asker{' '}
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
