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
          Sjelesorg i Asker: Et tilbud om samtaler til dem som trenger det
        </p>
        <p className="mt-4">
          Gjennom nettverket «Sjelesorg i Asker» ønsker Den norske kirke i Asker
          å tilby en kvalifisert samtalepartner til alle som i en periode har
          behov for denne typen hjelp. Nettverket består av dyktige sjelesørgere
          som man kan få en avtale med. Vårt mål er at sjelesorg skal være lett
          tilgjengelig og gratis.
        </p>

        <p className="mt-10">
          <Link
            href="#contact"
            className="text-base font-medium text-fuchsia-600 hover:text-fuchsia-800"
          >
            Snakk med oss! <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
