import Image from 'next/image'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'

export function Quote({ id, author, children }) {
  return (
    <aside
      id={id}
      aria-label={`Quote from ${author.name}`}
      className="relative py-16 bg-fuchsia-100 sm:py-32"
    >
      <div className="text-fuchsia-400/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          <div className="flex text-stone-900 sm:justify-center">
            {/* <StarRating /> */}
          </div>
          <blockquote className="mt-10 text-3xl font-medium tracking-tight font-display text-stone-900 sm:text-center sm:text-4xl">
            {children}
          </blockquote>
          <figcaption className="flex items-center mt-10 sm:justify-center">
            <div className="overflow-hidden rounded-full bg-stone-200">
              <Image
                className="object-cover w-12 h-12"
                src={author.image}
                alt="Håp"
                width={48}
                height={48}
              />
            </div>
            <div className="ml-4">
              <strong className="font-semibold text-fuchsia-600 before:content-['—_']">
                {author.name}
              </strong>
              <div className="mt-1 text-base text-stone-600">{author.role}</div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  )
}
