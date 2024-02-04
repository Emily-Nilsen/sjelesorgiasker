import { GridPattern } from '@/components/GridPattern'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="flex flex-col items-center justify-center py-4 sm:flex-row">
        {/* Sjelesorg i Asker */}
        <div className="flex items-center pb-2">
          <div className="relative z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1670131516/Sjelesorg%20i%20Asker/sjelesorgiasker_logo_eoexut.svg"
              alt="Sjelesorg i Asker"
              width={266}
              height={302}
              className="w-8 h-8 overflow-hidden rounded-full"
            />
          </div>
          <div className="w-full pl-2">
            <h2 className="text-base font-medium text-zinc-900">
              Sjelesorg i Asker{' '}
              <span className="font-normal text-zinc-600 sm:inline">
                er et tilbud i regi av
              </span>{' '}
            </h2>
          </div>
        </div>
        {/* Kirken.no */}
        <div className="flex items-center py-2 pl-2 sm:py-0 sm:pb-2">
          <div className="relative z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1669638161/Sjelesorg%20i%20Asker/kirken.no_logo_jfg9hn.svg"
              alt="Kirken.no"
              width={266}
              height={302}
              className="w-6 h-5 overflow-hidden rounded-none"
            />
          </div>
          <div className="w-full pl-2">
            <h2 className="text-base font-medium text-zinc-900">
              Den norske kirke
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-base text-center text-slate-600">
        <p>Copyright &copy; {new Date().getFullYear()} Sjelesorg i Asker</p>
      </div>
    </footer>
  )
}
