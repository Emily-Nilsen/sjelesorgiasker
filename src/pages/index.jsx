import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { HopeTree } from '@/components/HopeTree'
import { Invitation } from '@/components/Invitation'
import { Hero } from '@/components/Hero'
import { ImageSubSection } from '@/components/ImageSubSection'
import { Introduction } from '@/components/Introduction'
import { Posts } from '@/components/Posts'
import { Sjelesorg } from '@/components/Sjelesorg'
import { NavBar } from '@/components/NavBar'
import { PeaceOfMind } from '@/components/PeaceOfMind'
import { Team } from '@/components/Team'
import { RecreationWeek } from '@/components/RecreationWeek'
import { Quote } from '@/components/Quote'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sjelesorg i Asker</title>
        <meta
          name="description"
          content="Sorg og kjærlighetssorg, eksistensielle spørsmål og troskriser - det er ingenting som er for stort eller for lite å snakke med en sjelesørger om. "
        />
        <meta
          name="keywords"
          content="Sjelesorg, Samtale,Livskrise, Sorg, Kjærlighetssorg, Konflikter, Relasjoner,Problemer, Forbønn, Skriftemål, Kirke, Håp, Hjelp, Asker,Østenstad kirke, jeg trenger hjelp, trenger hjelp, konflikt, problem"
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <ImageSubSection />
      <Sjelesorg />
      <Quote
        id="Quote-from-marianne-m-iversen"
        author={{
          name: 'Marianne M Iversen',
          role: 'Gestaltterapeut',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/markus-spiske-CznP38QmCCI-unsplash_dsufgj.jpg',
        }}
      >
        <p>
          “Det kan gjøre en forskjell å dele tanker og reaksjoner med en man har
          tillit til og som både tåler og tar imot. Det kan bidra til fotfeste
          og håp.”
        </p>
      </Quote>
      <HopeTree />
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
          “Den som ber om samtaler er selv eksperten på eget liv og vet hvordan
          det oppleves.”
        </p>
      </Quote>
      <Team />
      <Quote
        id="Quote-from-trond-arne-hauge"
        author={{
          name: 'Trond Arne Hauge',
          role: 'Prest (1953-2023)',
          image:
            'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,c_fill,h_200,w_200/Sjelesorg%20i%20Asker/praying_square_j2j5e9.jpg',
        }}
      >
        <p>
          “Samtalen kan gi innsikt og forandre livskvaliteten til det bedre.”
        </p>
      </Quote>
      <Contact />
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
          å oppdage utveier i en fastlåst situasjon.”
        </p>
      </Quote>
      <PeaceOfMind />
      <Invitation />
      {/* <RecreationWeek /> */}

      <Footer />
    </div>
  )
}
