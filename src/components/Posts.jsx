import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-base text-stone-400 dark:text-stone-400',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-stone-200 dark:bg-stone-500" />
        </span>
      )}
      {children}
    </Component>
  )
}

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('no-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function Posts() {
  return (
    <section
      id="innlegg"
      aria-labelledby="innlegg-title"
      aria-label="Innlegg"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
      // className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-stone-700">
        <SectionHeading number="1" id="introduction-title">
          Innlegg
        </SectionHeading>

        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          “Det går bra med meg. Jeg klarer meg.”
        </p>

        <figcaption className="mt-4 text-lg text-stone-700">
          <strong className="font-semibold text-fuchsia-600 before:content-['—_']">
            Av Astrid Sætrang Morvik
          </strong>
          , Sokneprest med master i klinisk sjelesorg
        </figcaption>
        <CardEyebrow as="time" dateTime="2022-09-05" decorate>
          {formatDate('2022-09-05')}
        </CardEyebrow>
        <p className="mt-8">
          Joda, du klarer deg sikkert, og for noen fungerer det best å ikke
          dvele ved livets nedturer. Men mange av oss har det bedre når vi får
          snakket oss gjennom det som plager oss. Hadde vi bare hatt noen å
          snakke med.
        </p>
        <p className="mt-12 text-3xl font-bold tracking-tight font-display text-stone-900">
          Sjelesorg er samtaler om livet
        </p>
        <p className="mt-4">
          Kanskje hjelpen er nærmere enn du tror? Kirkens sjelesorg er gratis og
          tilgjengelig. Sjelesorgsamtaler er samtaler der du kan snakke om ditt
          eget liv og hvordan du tenker og føler om det du opplever. En
          kompetent sjelesørger har et helhetlig menneskesyn: Vi har alle både
          følelser, tro og tanker. Vi gjør oss erfaringer som setter spor i sinn
          og kropp. Vi kan ha utfordringer med helse og med relasjoner til
          andre.
        </p>
        <p className="mt-4">
          Mange er bekymret for fremtiden. En sjelesørger møter den andre med et
          åpent sinn: Det er du som bestemmer hva vi skal snakke om, men en
          sjelesørger vil hjelpe deg å sette ord på det du bærer på. Noen ganger
          trenger man hjelp til å komme ut av en fastlåst situasjon eller til å
          få et annet perspektiv på det som skjer. Sjelesørgeren har trening i å
          se på livet fra flere sider.
        </p>
        <p className="mt-12 text-3xl font-bold tracking-tight font-display text-stone-900">
          Ikke terapi, men godt likevel
        </p>
        <p className="mt-4">
          Sjelesorg er ikke terapi, og den som er psykisk syk får best
          behandling av psykolog eller psykiater. Sjelesorgsamtaler kan likevel
          ha terapeutisk virkning!
        </p>
        <p className="mt-4">
          Det er utrolig hvor godt det er å få snakket seg gjennom et problem
          med et menneske som lytter oppmerksomt og vil deg vel. Også mennesker
          med en psykiatrisk diagnose kan ha god hjelp av å snakke med en
          sjelesørger, for med en sjelesørger kan man ta opp andre tema og
          snakke på en annen måte enn med en terapeut.
        </p>
        <p className="mt-12 text-3xl font-bold tracking-tight font-display text-stone-900">
          Gode rammer og veiledning
        </p>
        <p className="mt-4">
          Sjelesørgeren setter trygge rammer for samtalen både når det gjelder
          tid og konfidensialitet: Det avtales et bestemt antall samtaler som
          gir gode rammer både for deg og din sjelesørger. Og ingen har så
          streng taushetsplikt som en prest eller diakon som tar imot mennesker
          i sjelesorg! Nettverket av sjelesørgere sikrer også at den enkelte får
          god veiledning i sin tjeneste.
        </p>
        <p className="mt-4">
          Veiledning gir kvalitet. Også veiledningen er preget av
          taushetsplikten. Det som må fortelles, blir anonymisert slik at ingen
          skal kunne identifiseres.
        </p>
        <p className="mt-12 text-3xl font-bold tracking-tight font-display text-stone-900">
          Et rom for samtale, et nettverk av sjelesørgere
        </p>
        <p className="mt-4">
          Sjelesørgere er ofte en prest eller diakon med relevant
          etterutdanning. Etter flere år med etterutdanning for å bli en bedre
          sjelesørger, åpner jeg et nytt rom i Østenstad kirke, et samtalerom
          der du kan komme uten å møte alle de andre som jobber i kirken.
          Samtidig har jeg etablert et nettverk av sjelesørgere som består av
          kompetente kolleger.
        </p>
        <p className="mt-4">
          Kanskje du foretrekker å møte en samtalepartner du ikke kjenner fra
          før? Askers menigheter har dyktige prester og diakoner som er gode å
          snakke med. Nettverket av sjelesørgere består av personer som enten
          har spesialisering i sjelesorg eller annen relevant utdanning og
          erfaring. Ta kontakt eller les mer om kirkens sjelesorgtilbud og
          medlemmene av nettverket på www.sjelesorgiasker.no.
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
