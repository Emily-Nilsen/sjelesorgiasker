import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'
import { CameraIcon } from '@heroicons/react/24/solid'

export function HopeTree() {
  return (
    <Container>
      <div className="py-16 overflow-hidden bg-white lg:py-24">
        <div className="relative max-w-xl mx-auto lg:max-w-7xl">
          <div className="relative">
            <h2 className="mt-2 text-4xl font-bold tracking-tight font-display text-stone-900 sm:text-center">
              Sjelesorgens forankring
            </h2>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-2xl font-bold tracking-tight font-display text-stone-900 sm:text-3xl">
                Håpstreet
              </h3>

              <p className="mt-3 text-base text-stone-600">
                Ved Modum Bad der mange sjelesørgere får sin utdanning, ligger
                en liten kirke som heter Olavskirken, og i den kirken finnes en
                installasjon: et tre laget av finmasket netting og ståltråd.
                Treet har røtter, stamme og mange grener med kvister. Til
                kvistene kan man feste glasskår som symboliserer det livet som
                er gått i stykker.
              </p>
              <p className="mt-3 text-base text-stone-600">
                Når man fester glasskårene på treet, er det et symbol på håp.
                Treet er et{' '}
                <span className="italic font-semibold text-stone-800">
                  håpstre
                </span>{' '}
                som gir hjelp til å tro at vi er sett av Gud og at Gud har
                omsorg for oss.
              </p>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <div className="w-3/4 h-auto mx-auto">
                <Image
                  className="relative mx-auto rounded-xl"
                  width={1296}
                  height={1944}
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1673365952/Sjelesorg%20i%20Asker/Ha%CC%8Apstreet_Olavskirken_075_u1m8od.jpg"
                  alt="Håpstreet i Olavskirken - bilde av Unni Tobiassen Lie"
                />
                <figcaption className="flex items-center mt-0 text-base italic font-base text-stone-600">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-fuchsia-300"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Foto tatt av Unni Tobiassen Lie</span>
                </figcaption>
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight font-display text-stone-900 sm:text-3xl">
                  Vår logo
                </h3>
                <p className="mt-3 text-base text-stone-600">
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
                </p>
              </div>

              <div className="relative mt-10 -mx-4 lg:col-start-1 lg:mt-0">
                <div className="relative z-10 flex items-center justify-center w-3/5 h-full px-6 py-8 mx-auto overflow-hidden rounded-lg shadow-none opacity-100 bg-fuchsia-700">
                  <Logo width="220px" height="220px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
