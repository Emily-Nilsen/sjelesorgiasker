import Head from 'next/head'

import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { ImageSubSection } from '@/components/ImageSubSection'
import { Introduction } from '@/components/Introduction'
import { Posts } from '@/components/Posts'
import { NavBar } from '@/components/NavBar'
// import { Pricing } from '@/components/Pricing'
import { PeaceOfMind } from '@/components/PeaceOfMind'
import { Team } from '@/components/Team'
import { RecreationWeek } from '@/components/RecreationWeek'
import { Quote } from '@/components/Quote'
// import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sjelesorg i Asker</title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <ImageSubSection />
      <Posts />
      <Quote
        id="Quote-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/praying_square_j2j5e9.jpg',
        }}
      >
        <p>
          “Id dictum dis interdum molestie praesent integer sed, pharetra ligula
          duis per mus aenean nisl.”
        </p>
      </Quote>
      <Team />
      <Quote
        id="Quote-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/flower_in_crack_ybj3ac.jpg',
        }}
      >
        <p>
          “Imperdiet quis dapibus eleifend varius euismod est, urna accumsan
          justo hac sagittis dis pharetra, proin cubilia rutrum ac bibendum.”
        </p>
      </Quote>
      <PeaceOfMind />
      <FreeChapters />
      <RecreationWeek />

      <Quote
        id="Quote-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/praying_square_j2j5e9.jpg',
        }}
      >
        <p>
          “Eget felis varius mus orci, quisque urna habitant himenaeos laoreet
          mollis fames, natoque sed etiam ultricies massa.”
        </p>
      </Quote>

      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}
