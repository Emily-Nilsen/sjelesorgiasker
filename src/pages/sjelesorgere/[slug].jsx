import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import sjelesorgere from '../../../assets/sjelesorgere'
import { motion } from 'framer-motion'
import { CameraIcon } from '@heroicons/react/24/solid'
import ReactMarkdown from 'react-markdown'
import { components } from 'react-markdown'

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify')
  const sjelesorgereList = sjelesorgere.filter(
    (person) => slugify(person.name) === params.slug
  )
  return {
    props: {
      person: sjelesorgereList[0],
    },
  }
}

export const getStaticPaths = async () => {
  const slugify = require('slugify')
  const paths = sjelesorgere.map((person) => {
    return {
      params: { slug: slugify(person.name) },
    }
  })

  return { paths, fallback: false }
}

const Person = ({ person }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{person.name}</title>
        <meta name="description" content={person.role} />
      </Head>
      <section className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-fuchsia-200 opacity-25 lg:right-72" />
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Sjelesørge*/}
              <figure>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden rounded-lg lg:aspect-none"
                >
                  <div className="relative overflow-hidden rounded-lg object-cover object-center shadow-xl">
                    <Image
                      priority
                      src={person.image}
                      alt={person.name}
                      width={1200}
                      height={1000}
                      unoptimized
                      className="overflow-hidden rounded-lg"
                    />
                  </div>
                </motion.div>
                <figcaption className="mt-3 flex items-center text-base font-medium text-stone-600">
                  <CameraIcon
                    className="h-5 w-5 flex-none text-fuchsia-300"
                    aria-hidden="true"
                  />
                  <span className="ml-2">{person.name}</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h1 className="font-display text-4xl font-extrabold tracking-normal text-stone-800 sm:text-5xl">
                {person.name}
              </h1>
              <h2 className="mt-2 text-lg font-medium text-fuchsia-600">
                {person.role}
              </h2>
              <div className="mt-6 space-y-6 text-stone-600">
                <ul role="list" className="flex flex-col space-y-5">
                  {person.profile.map((description, i) => (
                    <li key={i}>
                      <ReactMarkdown
                        components={{
                          a: ({ node, ...props }) => (
                            <a
                              {...props}
                              className="font-semibold text-fuchsia-500 duration-200 ease-in-out hover:text-fuchsia-600"
                            />
                          ),
                        }}
                      >
                        {description}
                      </ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <div className="mt-10">
                <Link
                  href="/#sjelesørgere"
                  passHref
                  className="text-base font-medium text-fuchsia-500 transition duration-200 ease-in-out hover:text-stone-800"
                >
                  Tilbake <span aria-hidden="true">&rarr;</span>{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Person
