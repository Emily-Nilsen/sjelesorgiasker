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
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="sjelesørgere-title">
          Sjelesørgere
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-stone-900">
          Våre sjelesørgere.
        </p>
        <p className="mt-4 text-lg tracking-tight text-stone-700">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
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
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <Image
                      className="rounded-lg bg-fuchsia-200/50 object-cover shadow-lg"
                      src={person.image}
                      alt={person.name}
                      fill
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>

                      <p className="pb-3 text-fuchsia-600">{person.role}</p>
                      <p className="mt-3 w-fit rounded-full border border-stone-300 px-4 py-1 text-sm text-stone-500 transition duration-300 ease-in-out hover:bg-stone-50 hover:text-stone-900">
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
