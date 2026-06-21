import { useEffect, useState } from 'react'

// Sommerstengt for nye sjelesorgforespørsler i 2026.
// Stengt f.o.m. 12. juni t.o.m. 20. august. Datoene er angitt i norsk tid
// (CEST = UTC+2), som gjelder for hele perioden.
const CLOSED_FROM = Date.UTC(2026, 5, 11, 22, 0, 0) // 12. juni 2026, 00:00 norsk tid
const CLOSED_UNTIL = Date.UTC(2026, 7, 20, 22, 0, 0) // 21. august 2026, 00:00 norsk tid

export function isIntakeClosed(now = Date.now()) {
  return now >= CLOSED_FROM && now < CLOSED_UNTIL
}

// Forhåndsvisning: med ?intake=closed i URL-en kan man se den stengte
// tilstanden utenom perioden (nyttig for å vise kunden hvordan det blir).
// Kan kun tvinge tilstanden til STENGT – aldri åpen – slik at lenken ikke
// kan brukes til å omgå inntaksstoppen.
function isPreviewClosed() {
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get('intake') === 'closed'
}

// Lokal forhåndsvisning av ÅPEN tilstand: med ?intake=open kan man se det
// gjenåpnede skjemaet midt i inntaksstoppen (nyttig for å teste skjemaet).
// Virker KUN i utvikling (next dev) – i produksjonsbygget ignoreres det helt,
// slik at lenken aldri kan brukes til å omgå inntaksstoppen på den live siden.
function isPreviewOpen() {
  if (typeof window === 'undefined') return false
  if (process.env.NODE_ENV === 'production') return false
  return new URLSearchParams(window.location.search).get('intake') === 'open'
}

// Forsiden er statisk generert, så vi avgjør status på klienten for å få
// riktig dato uten å måtte bygge siden på nytt. Standardverdien `false` gjør
// at skjemaet alltid finnes i den statiske HTML-en (slik at Netlify fortsatt
// oppdager skjemaet), mens klienten skjuler det i den stengte perioden.
export function useIntakeClosed() {
  const [closed, setClosed] = useState(false)
  useEffect(() => {
    setClosed(isPreviewClosed() || (!isPreviewOpen() && isIntakeClosed()))
  }, [])
  return closed
}
