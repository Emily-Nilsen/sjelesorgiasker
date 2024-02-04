import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

import slugify from 'slugify'
import { useRouter } from 'next/router'

import sjelesorgere from '../../assets/sjelesorgere'

export function Team(props) {
  const slugify = require('slugify')
  const { asPath } = useRouter()

  return (
    <section
      id="sjelesørgere"
      aria-labelledby="sjelesørgere-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="sjelesørgere-title">
          Sjelesørgere
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-stone-900">
          Våre sjelesørgere
        </p>
        <p className="mt-4 text-lg tracking-tight text-stone-700">
          Sjelesorg i Asker setter deg i kontakt med en sjelesørger som passer
          dine behov. Les om hver enkelt sine kvalifikasjoner og erfaring her.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          {sjelesorgere.map((person) => (
            <li key={person.name}>
              <Link passHref href={`/sjelesorgere/${slugify(person.name)}`}>
                <div className="space-y-4 group">
                  <div className="aspect-w-3 aspect-h-2">
                    <Image
                      className="object-cover transition duration-300 ease-in-out rounded-lg shadow-lg bg-fuchsia-200/50 group-hover:brightness-110"
                      src={person.image}
                      alt={person.name}
                      fill
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>

                      <p className="pb-3 text-fuchsia-600">{person.role}</p>
                      <p className="px-4 py-1 mt-3 text-base transition duration-300 ease-in-out border rounded-full w-fit border-stone-300 text-stone-500 hover:bg-stone-50 hover:text-stone-900">
                        Les profil
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
