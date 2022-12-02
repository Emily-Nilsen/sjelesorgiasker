import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-stone-700">
        <p className="text-4xl font-bold tracking-tight font-display text-stone-900">
          Sjelesorgprosjektet ... odio nisi, lectus dis nulla..
        </p>
        <p className="mt-4">
          Id torquent porta fusce mi nec hendrerit facilisi felis sed mauris, eu
          bibendum ultricies cras facilisis gravida nibh ante quisque accumsan,
          egestas tellus sagittis ridiculus est aptent placerat tempus posuere.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, quisque
          pulvinar per.
        </p>

        <p className="mt-10">
          <Link
            href="#contact"
            className="text-base font-medium text-fuchsia-600 hover:text-fuchsia-800"
          >
            Ta kontakt med oss! <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
