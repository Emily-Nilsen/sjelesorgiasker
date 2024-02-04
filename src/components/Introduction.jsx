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
          Alle menighetene i Asker har medarbeidere som tilbyr å være
          samtalepartner for mennesker som i en periode har behov for denne
          typen hjelp. Gjennom{' '}
          <span className="italic font-semibold">Sjelesorg i Asker</span> ønsker
          Den norske kirke i Asker å løfte fram dette tilbudet. Du kan kontakte
          din lokale menighet for avtale med prest eller diakon, eller du kan få
          en avtale med en av sjelesørgerne i nettverket Sjelesorg i Asker. Vårt
          mål er at sjelesorg skal være lett tilgengelig, trygt og gratis.
        </p>

        <p className="mt-10">
          <Link
            href="#kontakt"
            className="text-base font-medium text-fuchsia-600 hover:text-fuchsia-800"
          >
            Snakk med oss! <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
