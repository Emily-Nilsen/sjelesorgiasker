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
          Jeg tok mye av min utdanning i sjelesorg ved Modum Bad. Der er det en
          liten kirke som heter Olavskirken, og i den kirken finnes en
          installasjon; et tre laget av finmasket netting og ståltråd. Treet har
          røtter, stamme og mange grener med kvister. Til kvistene kan man feste
          glasskår som symboliserer det livet som er gått i stykker. Når man
          fester glasskårene på treet, er det et symbol på håp. Treet er et{' '}
          <span className="italic font-medium">håpstre</span> som gir hjelp til
          å holde fast troen på at vi er sett av Gud og at Gud har omsorg for
          oss.
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
