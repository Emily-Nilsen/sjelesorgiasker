import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Figma icon templates',
    description:
      'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669835439/Sjelesorg%20i%20Asker/sjelefred01_xh7ba4.jpg"
            alt="Sjelefred i Asker kirke"
            width={1024}
            height={1009}
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Weekly icon teardowns',
    description:
      'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669835386/Sjelesorg%20i%20Asker/AdobeStock_78726353_zk2rwl.jpg"
            alt="Sjelefred i Asker kirke"
            width={5260}
            height={3648}
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Community of icon designers',
    description:
      "A private Discord server where you can get help and give feedback on each others' work.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669835440/Sjelesorg%20i%20Asker/sjelefred02_rulvvv.jpg"
            alt="Sjelefred i Asker kirke"
            width={1600}
            height={895}
            unoptimized
          />
        </div>
      )
    },
  },
]

export function PeaceOfMind() {
  return (
    <section
      id="peace-of-mind"
      aria-labelledby="peace-of-mind-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="peace-of-mind-title">
          Sjelefred
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          “Sjelefred” er en kveldssamling med musikk og forbønn annenhver
          onsdag.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Design assets, icon teardowns, and a community of fellow icon
          designers where you can ask questions, get feedback, and accelerate
          your learning.
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
