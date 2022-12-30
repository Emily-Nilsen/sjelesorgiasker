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
        id="Quote-from-oscar-braadlie"
        author={{
          name: 'Oscar Braadlie',
          role: 'Sykehusprest (pensjonist)',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/therapy_01_cvjhwa.jpg',
        }}
      >
        <p>
          “Den som ber om samtaler er selv eksperten på eget liv og hvordan det
          oppleves, og sammen kan vi gå inn i følelser, tanker og spørsmål som
          har med ens liv å gjøre.”
        </p>
      </Quote>
      <Team />
      <Quote
        id="Quote-from-trond-arne-hauge"
        author={{
          name: 'Trond Arne Hauge',
          role: 'Prest (pensjonist)',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/praying_square_j2j5e9.jpg',
        }}
      >
        <p>
          “Erfaringer fra prestetjenesten er at det kan hjelpe å samtale om det
          som opptar oss i livene våre. Samtalen kan gi innsikt og forandre
          livskvaliteten til det bedre.”
        </p>
      </Quote>
      <PeaceOfMind />
      <Invitation />
      <RecreationWeek />

      <Quote
        id="Quote-from-astrid-sætrang-morvik"
        author={{
          name: 'Astrid Sætrang Morvik',
          role: 'Sokneprest i Østenstad',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/flower_in_crack_ybj3ac.jpg',
        }}
      >
        <p>
          “Noen trenger å forsone seg med livet slik det er, mens andre trenger
          å oppdage utveier i en fastlåst situasjon. Noen trenger bare omtanke
          og støtte for å holde seg oppreist gjennom tunge tider.”
        </p>
      </Quote>
      <Contact />
      <Footer />
    </>
  )
}
