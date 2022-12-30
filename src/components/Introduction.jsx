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
          <span className="italic font-semibold">håpstre</span> som gir hjelp
          til å holde fast troen på at vi er sett av Gud og at Gud har omsorg
          for oss.
        </p>

        <p className="mt-4">
          Vår logo er designet av Emily Nilsen. Vi ønsket oss en logo som er
          jordnær og som viser at sjelesorg gir hjelp til vekst. Så tegnet hun
          treet. Animasjonen du ser når du åpner siden, viser at treet har en
          stamme som likner et kors. Korset er symbolet på lidelsen som førte
          til forløsning, liv og oppstandelse for alle. Den kristne troen er
          bærebjelken for sjelesørgerne. Den hjelper oss til å tro at fremtiden
          er i Guds hender selv om fortiden og nåtiden er vanskelig. Derfor
          vokser greiner og kvister med blader ut av treet slik vår logo viser.
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
