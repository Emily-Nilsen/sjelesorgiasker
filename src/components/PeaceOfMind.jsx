import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

const resources = [
  {
    title: 'Piano og sang',
    description:
      'Anne Kristine Merkesvik er musikalsk ansvarlig for Sjelefred.',
    image: function ImageOne() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/c_fill,g_face,h_300,w_480,q_auto,f_auto/Sjelesorg%20i%20Asker/Anne_Kristine_Merkesvik_pianist_nstdry.jpg"
            alt="Anne Kristine Merkesvik"
            width={2262}
            height={1926}
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Kveldssamling',
    description: 'Samlingene starter kl. 20.30 og varer til ca. kl. 21.15.',
    image: function ImageTwo() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="relative"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/c_crop,g_north,h_951,w_1181,y_0/v1671638462/Sjelesorg%20i%20Asker/Hilde_Harket_Ostenstad_lys_pjk5yi.jpg"
            alt="Sjelefred i Asker kirke"
            fill
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Musikk og forbønn',
    description:
      'Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales.',
    image: function ImageThree() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative object-cover w-full h-full">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/f_auto,q_auto/Sjelesorg%20i%20Asker/Hilde_Harket_Ostenstad9_-_vinduslys_sq04am.jpg"
              alt="Sjelefred i Asker kirke"
              fill
              unoptimized
            />
          </div>
        </div>
      )
    },
  },
]

export function PeaceOfMind() {
  return (
    <section
      id="sjelefred"
      aria-labelledby="sjelefred-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="sjelefred-title">
          Sjelefred
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          “Sjelefred” er en kveldssamling med musikk og forbønn annenhver onsdag
          i Østenstad kirke.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          I tillegg til tilbud om samtale, vil Sjelesorg i Asker tilby
          regelmessige samlinger der du kan oppleve ro og fred til sjel og sinn.
          Samlingene vil inneholde vakker musikk og sang, meditative
          betraktninger, enkle bønner å bli med i og tilbud om forbønn.
          Samlingene starter kl. 20.30 og varer til ca. kl. 21.15. Ansvarlig er
          Anne Kristine Merkesvik (piano og sang) og Astrid Sætrang Morvik.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 -mx-3 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid items-center grid-cols-1 gap-8 px-3 auto-rows-min sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden shadow-lg rounded-2xl sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
