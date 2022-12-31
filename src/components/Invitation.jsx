import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

// const items = [
//   { month: 'februar', date: [1, 15] },
//   { month: 'mars', date: [1, 15, 29] },
//   { month: 'april', date: [12, 29] },
//   { month: 'mai', date: [10, 24] },
// ]

const items = [
  '1. februar',
  '15. februar',
  '1. mars',
  '15. mars',
  '29. mars',
  '12. april',
  '29. april',
  '10. mai',
  '24. mai',
]

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
          className="relative grid items-end grid-cols-1 py-20 gap-y-12 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute left-0 w-full -top-32 sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight text-white font-display sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Sjelefred våren 2023
            </h2>
            <ul
              role="list"
              className="w-full mt-10 space-y-2 text-lg tracking-tight text-fuchsia-100"
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
                  <ClockIcon className="w-5 h-5 mr-2 text-fuchsia-300" />
                </span>

                <h3 className="text-base font-medium tracking-tight text-white">
                  kl. 20.30-21.15, annenhver onsdag
                </h3>
              </div>
              <div className="flex items-center group">
                <MapPinIcon className="w-5 h-5 mr-2 transition text-fuchsia-300 group-hover:text-fuchsia-50" />
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
