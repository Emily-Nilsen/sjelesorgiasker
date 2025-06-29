import Link from 'next/link'
import Image from 'next/image'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    id: 1,
    question: 'Hva betyr «sjelesorg»?',
    answer:
      'Ordet «sjelesorg» kommer av et tysk uttrykk som betyr «omsorg for sjelen». «Sjelen» har i flere tusen år vært et begrep som betegner «det indre mennesket». Vårt indre menneske rommer både tanker, tro og følelser. Når vi har omsorg for sjelen, betyr det at vi er opptatt av å hjelpe den enkelte til å ha det best mulig med seg selv eller i relasjon til andre mennesker eller til Gud, dersom man har en gudstro.',
  },
  {
    id: 2,
    question: 'Hva kan jeg snakke med en sjelesørger om?',
    answer:
      'Sjelesorgsamtaler er samtaler der du kan snakke om ditt eget liv og hvordan du tenker og føler om det du opplever. En kompetent sjelesørger har et helhetlig menneskesyn: Vi har alle både kropp, følelser og tanker. Det vi opplever, kan sette dype spor både i kroppen og i følelseslivet vårt. Da kan det være en god hjelp å ha noen å snakke med. Noen er bekymret for fremtiden. Noen ganger trenger man hjelp til å komme ut av en fastlåst situasjon eller til å få et annet perspektiv på det som skjer. Sjelesørgeren har trening i å se på livet fra flere sider og møte den andre med forståelse og støtte.',
  },
  {
    id: 3,
    question: 'Er sjelesorg det samme som terapi?',
    answer:
      'Nei, sjelesorg er ikke terapi, og den som er psykisk syk får best behandling av en psykiater eller psykolog. Sjelesorg kan likevel ha terapeutisk virkning: Mange opplever at det gjør godt å ha en samtalepartner som lytter oppmerksomt og vil deg vel. Problemet oppleves ofte mindre overveldende når de blir satt ord på og delt med en som lytter.',
  },
  {
    id: 4,
    question: 'Kan par gå i sjelesorg sammen?',
    answer:
      'Flere av våre sjelesørgere har erfaring med parsamtaler og vil kunne ta imot par.',
  },
  {
    id: 5,
    question: 'Hvor og hvordan foregår sjelesorg?',
    answer:
      'Samtalene foregår enten på sjelesørgerens eget kontor der han eller hun arbeider, eller i et samtalerom i Østenstad kirke. Sjelesørgerens oppgave er å passe tiden som vanligvis er én klokketime dersom ikke annet er avtalt. Sjelesørgeren har ingen bestemt metode slik en terapeut har. Sjelesørgerens viktigste redskap er å lytte og stille spørsmål som hjelper den andre til å sette ord på det man bærer på. Sjelesorg er ikke rådgivning, men sjelesørgeren kan hjelpe til å avklare handlingsalternativer. Dersom man ønsker forbønn eller skriftemål, kan sjelesørgeren stille seg til rådighet for dette.',
  },
  {
    id: 6,
    question: 'Hvem kan kalle seg sjelesørger?',
    answer:
      'Sjelesørger er ingen beskyttet tittel. Det betyr at alle i prinsippet kan kalle seg sjelesørger når de er samtalepartnere som ønsker å hjelpe et medmenneske. Våre sjelesørgere har relevant utdanning og erfaring som gjør dem særlig godt egnet til å være sjelesørgere. Les mer om kompetansen og erfaringen til hver enkelt av våre sjelesørgere',
    link: 'her',
  },
  {
    id: 7,
    question: 'Hvor lenge kan man gå i sjelesorg?',
    answer:
      'Sjelesørgeren og du legger en plan i løpet av det første møtet. En ramme på to til fem samtaler kan være naturlig å avtale i første omgang.',
  },
  {
    id: 8,
    question: 'Må jeg være medlem av kirken for å bruke dette tilbudet?',
    answer:
      'Nei, du trenger ikke en gang å tro på Gud. Vi vil tilby hjelp til alle som trenger det ut fra våre rammer og kvalifikasjoner.',
  },
  {
    id: 9,
    question: 'Hvorfor er sjelesorg gratis?',
    answer:
      'Kirken har alltid tilbudt sjelesorg som en del av sin tjeneste i møte med mennesker. Våre sjelesørgere er enten prester med fast jobb i kirken, eller de er pensjonister eller andre som ønsker å gi noen timer hver uke som en frivillig tjeneste.',
  },
  {
    id: 10,
    question: 'Har sjelesørgeren taushetsplikt?',
    answer: `Ja, sjelesørgere har svært streng taushetsplikt. Du skal ikke være redd for at det du sier blir røpet for andre eller at sjelesørgeren forteller at du går til samtaler. Taushetsplikten må likevel vike for <a target='_blank' rel='noreferrer' style='color:#c026d3; font-weight:500; text-decoration:underline;' href='https://plikt.no/'> avvergeplikten</a> som er beskrevet i <a target='_blank' rel='noreferrer' style='color:#c026d3; font-weight:500; text-decoration:underline;' href='https://lovdata.no/dokument/NL/lov/2005-05-20-28/KAPITTEL_2-5#%C2%A7184'> straffelovens §196</a>. Alle mennesker har plikt til å forsøke å avverge vold eller seksualovergrep. Det gjelder også dem som har taushetsplikt. Dersom man får kunnskap om at en slik straffbar handling vil skje, eller tror at det er mest sannsynlig at handlingen vil skje, må man melde fra til politi eller barnevern.`,
  },
  {
    id: 11,
    question: 'Hvorfor må jeg samtykke i at sjelesørgeren mottar veiledning?',
    answer:
      'Fordi sjelesørgere trenger veiledning. Noen ganger kan sjelesørgeren oppleve at man står fast og trenger andres syn på en situasjon. Våre sjelesørgere er forpliktet til å motta regelmessig veiledning i et lukket forum der alle har taushetsplikt. Der blir ingens identitet røpet, men man forteller om den aktuelle situasjonen og får innspill til hvordan man kan gå videre. Veiledning gir bedre kvalitet til sjelesorgen vi tilbyr. Veiledning gir også trygghet både for sjelesørgeren og den som får sjelesorg. Fordi sjelesorgen foregår i et lukket rom, er det viktig at ingen står helt alene i det man opplever der.',
  },
  {
    id: 12,
    question: 'Hvordan gjør jeg avtale med en sjelesørger?',
    answer:
      'Ta kontakt med oss gjennom kontaktskjemaet under. Din melding sendes til administrativ leder for Sjelesorg i Asker, Kari Anne Omberg Lier, som videresender din forespørsel til en sjelesørger som har ledig kapasitet. Sjelesørgeren tar kontakt på telefon og gjør en avtale om tid og sted. Du kan regne med å få svar av din sjelesørger innen en uke.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Sjelesorg() {
  return (
    <section
      id="sjelesorg"
      aria-labelledby="sjelesorg-title"
      aria-label="Sjelesorg"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container>
        <SectionHeading className="mb-10" number="1" id="sjelesorg-title">
          Sjelesorg
        </SectionHeading>

        <div className="md:mx-none rounded-2xl bg-stone-50 sm:rounded-4xl md:-mx-20 md:rounded-6xl">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-12 sm:py-16 lg:px-8">
            <div className="max-w-3xl mx-auto divide-y-2 divide-stone-200">
              <h2 className="text-4xl font-bold tracking-tight font-display text-stone-900 sm:text-center">
                Ofte stilte spørsmål
              </h2>
              <dl className="mt-6 space-y-6 divide-y divide-stone-200">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="flex items-start justify-between w-full text-left text-stone-400">
                            <span className="font-medium text-stone-900">
                              {faq.question}
                            </span>
                            <span className="flex items-center ml-6 h-7">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="pr-12 mt-2">
                          {faq.id === 10 ? (
                            <div
                              className="text-base text-stone-500"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                              key={faq.id}
                            />
                          ) : (
                            <>
                              <p className="text-base text-stone-500">
                                {faq.answer}
                                {faq.link ? (
                                  <span>
                                    {' '}
                                    <Link
                                      className="font-semibold transition text-fuchsia-600 hover:text-fuchsia-700"
                                      href="/#sjelesørgere"
                                    >
                                      {faq.link}
                                    </Link>
                                    {'.'}
                                  </span>
                                ) : null}
                              </p>
                            </>
                          )}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
