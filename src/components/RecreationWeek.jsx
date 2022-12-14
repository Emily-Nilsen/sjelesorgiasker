import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/outline'

const tableOfContents = {
  'Dette får du': {
    'Tidebønner morgen, middag og kveld.': 0,
    'Undervisning i temaer som berører livet og troen.': 0,
    'Tilbud om sjelesorgsamtaler.': 0,
    'Måltider, inkludert ett varmt måltid hver dag bortsett fra søndag.': 0,
    'Tilgang til vakre Løkenes gård med hyggelig stue, hage og parkanlegg.': 0,
  },
}

export function RecreationWeek() {
  return (
    <section
      id="rekreasjonsuke"
      aria-labelledby="rekreasjonsuke-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="4" id="rekreasjonsuke-title">
          Rekreasjonsuke
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-stone-900">
          Retreatuke på Løkenes gård.
        </p>
        <p className="mt-4 text-lg tracking-tight text-stone-700">
          {/* Onsdag 14. juni starter årets retreatuke i regi av Sjelesorg i Asker.
          Uken avsluttes med åpen vandringsgudstjeneste søndag 18. juni. */}
          I midten av juni arrangerer Sjelesorg i Asker en rekreasjonsuke på
          Løkenes gård. Det er plass til 15 deltakere. Vi baserer oss på at
          deltakerne sover hjemme, men deltar i programmet hver dag fra morgen
          til kveld. Arrangementet oppdateres med tid og program innen 1. mars.
        </p>
        {/* <p className="mt-4 text-lg tracking-tight text-stone-700">
          Det er plass til 15 deltakere på retreatuken. Vi baserer oss på at
          deltakerne sover hjemme, men er med på programmet på retreatuken hver
          dag fra kl. 10.00 til kl. 18.00.
        </p> */}
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 0)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="text-3xl font-bold tracking-tight font-display text-stone-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="px-6 py-3 mt-8 text-base tracking-tight divide-y divide-stone-300/30 rounded-2xl bg-stone-50 sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title]) => (
                          <li
                            key={title}
                            className="flex py-3"
                            aria-label={`${title}`}
                          >
                            <span
                              className="font-medium text-stone-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              {isExpanded ? (
                <div className="mx-auto mt-6 tracking-tight prose prose-lg prose-fuchsia text-stone-700">
                  <figure className="my-10">
                    <Image
                      className="w-full rounded-lg"
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Sjelesorg%20i%20Asker/L%C3%B8kenes_g%C3%A5rd_nwgdhf.jpg"
                      alt="Løkenes gård"
                      width={1080}
                      height={551}
                    />
                    <figcaption>
                      Løkenes gård ligger vakkert til på veien ned mot
                      Konglungen, har strandlinje og kyststi. Foto: Karl Braanes
                    </figcaption>
                  </figure>
                  <p className="mt-12 text-3xl font-bold tracking-tight font-display text-stone-900">
                    Praktisk info
                  </p>
                  <ul role="list">
                    <li>Pris fastsettes senere </li>
                    <li>Betaling til bankkonto</li>
                    <li>
                      Påmelding innen 1. juni til{' '}
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="mailto:am762@kirken.no"
                      >
                        Astrid Sætrang Morvik
                      </a>
                    </li>
                    <li>
                      Bestillingen er bekreftet når betalingen er kommet inn på
                      konto
                    </li>
                    <li>Programmet for hver dag utarbeides etter hvert</li>
                  </ul>
                </div>
              ) : null}
              <Expandable.Button>Se mer</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
