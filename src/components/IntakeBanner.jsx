import { useIntakeClosed } from '@/lib/intakeStatus'

export function IntakeBanner() {
  const closed = useIntakeClosed()

  if (!closed) {
    return null
  }

  return (
    <div className="bg-fuchsia-600 text-white">
      <div className="mx-auto max-w-5xl px-4 py-3 text-center text-sm sm:px-6 sm:text-base">
        <p>
          <span className="font-semibold">Venteliste og inntaksstopp:</span> Vi
          tar dessverre ikke imot nye forespørsler om sjelesorgsamtaler i
          perioden 12. juni – 20. august. Velkommen tilbake fra 21. august.
        </p>
      </div>
    </div>
  )
}
