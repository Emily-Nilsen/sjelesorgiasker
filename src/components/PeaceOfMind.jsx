import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Tittel 1',
    description: 'Odio nisi, lectus dis nulla. Tempus quis et.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/c_fill,g_north,h_502,w_1000/v1671638464/Sjelesorg%20i%20Asker/Hilde_Totland_Harket_Ostenstad3_-_orgelstemmer_ldtkcq.jpg"
            alt="Sjelefred i Asker kirke"
            fill
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Tittel 2',
    description:
      'Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="relative"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/c_crop,g_north,h_951,w_1181,y_0/v1671638462/Sjelesorg%20i%20Asker/Hilde_Harket_Ostenstad_lys_pjk5yi.jpg"
            alt="Sjelefred i Asker kirke"
            fill
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Tittel 3',
    description:
      'Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative object-cover w-full h-full">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/f_auto,q_auto/Sjelesorg%20i%20Asker/Hilde_Harket_Ostenstad9_-_vinduslys_sq04am.jpg"
              alt="Sjelefred i Asker kirke"
              fill
              unoptimized
            />
          </div>
        </div>
      )
    },
  },
]

export function PeaceOfMind() {
  return (
    <section
      id="sjelefred"
      aria-labelledby="sjelefred-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="sjelefred-title">
          Sjelefred
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          “Sjelefred” er en kveldssamling med musikk og forbønn annenhver
          onsdag.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 -mx-3 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid items-center grid-cols-1 gap-8 px-3 auto-rows-min sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden shadow-lg rounded-2xl sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
