import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/Logo'

export function HopeTree() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 md:pb-52 lg:max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="pb-10 border-b border-stone-200">
              <p className="mt-2 text-3xl font-bold tracking-tight font-display text-stone-900 sm:text-4xl">
                Sjelesorgens forankring
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              <div>
                <dt className="text-2xl font-bold tracking-tight font-display text-stone-900 sm:text-3xl">
                  Håpstreet i Olavskirken
                </dt>
                <dd className="mt-3 text-base text-stone-500">
                  Ved Modum Bad der mange sjelesørgere får sin utdanning, ligger
                  en liten kirke som heter Olavskirken, og i den kirken finnes
                  en installasjon: et tre laget av finmasket netting og
                  ståltråd. Treet har røtter, stamme og mange grener med
                  kvister. Til kvistene kan man feste glasskår som symboliserer
                  det livet som er gått i stykker.
                </dd>
                <dd className="mt-3 text-base text-stone-500">
                  Når man fester glasskårene på treet, er det et symbol på håp.
                  Treet er et{' '}
                  <span className="italic font-semibold text-stone-800">
                    håpstre
                  </span>{' '}
                  som gir hjelp til å tro at vi er sett av Gud og at Gud har
                  omsorg for oss.
                </dd>
              </div>
            </dl>
            <dl className="mt-10 space-y-10">
              <div>
                <dt className="text-2xl font-bold tracking-tight font-display text-stone-900 sm:text-3xl">
                  Vår logo
                </dt>
                <dd className="mt-3 text-base text-stone-500">
                  Vår logo er designet av{' '}
                  <a
                    className="font-semibold text-fuchsia-600"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.emilynilsen.com"
                  >
                    Emily Nilsen
                  </a>
                  . Vi ønsket oss en logo som er jordnær og som viser at
                  sjelesorg gir hjelp til vekst. Så tegnet hun treet.
                  Animasjonen du ser når du åpner siden, viser at treet springer
                  ut av en korsformet stamme. Den kristne troen er bærebjelken
                  for sjelesørgerne. Den gir oss håp om at Gud har noe godt i
                  vente for oss, selv om fortiden og nåtiden er vanskelig.
                </dd>
                <dd className="mt-3 text-base text-stone-500">
                  Derfor vokser det greiner og kvister med blader og frukt ut av
                  stammen, slik vår logo viser.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg aspect-w-1 aspect-h-1 bg-stone-100">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1671638477/Sjelesorg%20i%20Asker/Hilde_Harket_Ostenstad8_-_altersmykke_web_gstkhq.jpg"
                alt="Østenstad kirke - bilde av Hilde Harket"
                className="object-cover object-center w-full h-full"
                fill
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="overflow-hidden rounded-lg h-fit bg-stone-100">
                <div className="relative object-cover object-center w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1672677363/Sjelesorg%20i%20Asker/tree_yp2a6g.jpg"
                    alt="Håpstreet i Olavskirken"
                    width={200}
                    height={200}
                    className="object-cover object-center w-full overflow-hidden rounded-lg"
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center w-full h-full px-6 mx-auto overflow-hidden rounded-lg shadow-none opacity-100 bg-fuchsia-700">
                <Logo width="220px" height="220px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
