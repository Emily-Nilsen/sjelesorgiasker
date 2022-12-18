import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Invitation } from '@/components/Invitation'
import { Hero } from '@/components/Hero'
import { ImageSubSection } from '@/components/ImageSubSection'
import { Introduction } from '@/components/Introduction'
import { Posts } from '@/components/Posts'
import { NavBar } from '@/components/NavBar'
import { PeaceOfMind } from '@/components/PeaceOfMind'
import { Team } from '@/components/Team'
import { RecreationWeek } from '@/components/RecreationWeek'
import { Quote } from '@/components/Quote'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sjelesorg i Asker</title>
        <meta
          name="description"
          content="Sorg og kjærlighetssorg, eksistensielle spørsmål og troskriser - det er ingenting som er for stort eller for lite å snakke med en sjelesørger om. "
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
          name: 'Forfatternavn',
          role: 'Sitatkilde',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/therapy_01_cvjhwa.jpg',
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
          name: 'Forfatternavn',
          role: 'Sitatkilde',
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
      <Invitation />
      <RecreationWeek />

      <Quote
        id="Quote-from-gerardo-stark"
        author={{
          name: 'Forfatternavn',
          role: 'Sitatkilde',
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
