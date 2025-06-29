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
          image: '/images/quote-1.webp',
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
          image: '/images/quote-4.webp',
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
          image: '/images/quote-2.webp',
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
          name: 'Kari Anne Omberg Lier',
          role: 'Prostiprest i Asker og prest i Holmen',
          image: '/images/quote-3.webp',
        }}
      >
        <p>
          “Hvis du har tanker om at du har en slags tro, søken eller lengsel,
          kan det være spennende å lete og utforske hvor Gud er i livet ditt.”
        </p>
      </Quote>
      {/* <PeaceOfMind /> */}
      {/* <Invitation /> */}
      {/* <RecreationWeek /> */}

      <Footer />
    </div>
  )
}
