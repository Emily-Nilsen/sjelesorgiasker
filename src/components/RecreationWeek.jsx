import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Getting started': {
    'Getting started': 1,
    'Intro to Figma': 15,
    'Setting up your first artboard': 20,
  },
  Fundamentals: {
    'Strokes and fills': 21,
    'End points': 22,
    'Bezier curves': 26,
    'Designing on a grid': 31,
    'Vector shapes': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
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
          Rekreasjonsuke i juni med tilbud om samtaler, tidebønner, osv.
        </p>
        <p className="mt-4 text-lg tracking-tight text-stone-700">
          “Sjelesorgprosjektet” inkluderer...imperdiet quis dapibus eleifend
          varius euismod est, urna accumsan justo hac sagittis dis pharetra,
          proin cubilia rutrum ac bibendum.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              {/* <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="text-3xl font-bold tracking-tight font-display text-stone-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="px-6 py-3 mt-8 text-base tracking-tight divide-y divide-stone-300/30 rounded-2xl bg-stone-50 sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-stone-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-stone-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol> */}
              <Expandable.Button>Se mer</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
