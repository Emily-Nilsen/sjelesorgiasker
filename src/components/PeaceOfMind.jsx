import Image from 'next/image'
import Link from 'next/link'
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
            src="/images/peace-of-mind-img-1.webp"
            alt="Anne Kristine Merkesvik"
            className="relative object-cover"
            fill
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Kveldssamling',
    description: 'Samlingene starter kl. 20.30 og varer til ca. kl. 21.00.',
    image: function ImageTwo() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="relative object-cover"
            src="/images/peace-of-mind-img-3.webp"
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
      'Vakker musikk og sang, meditative betraktninger, enkle bønner og tilbud om forbønn.',
    image: function ImageThree() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-full object-cover">
            <Image
              src="/images/peace-of-mind-img-2.webp"
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
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="4" id="sjelefred-title">
          Sjelefred
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          “Sjelefred” er en kveldssamling med musikk og forbønn i Østenstad
          kirke.
          {/* “Sjelefred” er en kveldssamling med musikk og forbønn annenhver onsdag
          i Østenstad kirke. */}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          I tillegg til tilbud om samtale, vil Sjelesorg i Asker tilby{' '}
          <Link
            href="/#invitation"
            className="font-semibold text-fuchsia-500 hover:text-fuchsia-700"
          >
            regelmessige samlinger
          </Link>{' '}
          der du kan oppleve ro og fred til sjel og sinn. Samlingene vil
          inneholde vakker musikk og sang, meditative betraktninger, enkle
          bønner å bli med i og tilbud om forbønn. Samlingene starter kl. 20.30
          og varer til ca. kl. 21.00. Ansvarlig er Anne Kristine Merkesvik
          (piano og sang) og Astrid Sætrang Morvik.
        </p>{' '}
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-base text-slate-600">
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
