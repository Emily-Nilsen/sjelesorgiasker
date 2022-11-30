import Link from 'next/link'
import Image from 'next/image'

// import { Logo } from '@/components/Logo'
// import logoEmilyNilsen from '@/images/logos/emily_favicon.svg'

function BackgroundIllustration(props) {
  return (
    <svg
      viewBox="0 0 1090 1090"
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      <circle cx={545} cy={545} r="544.5" />
      <circle cx={545} cy={545} r="480.5" />
      <circle cx={545} cy={545} r="416.5" />
      <circle cx={545} cy={545} r="352.5" />
    </svg>
  )
}

export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex min-h-full pt-16 overflow-hidden sm:py-28">
      <div className="flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6">
        <Link href="/" aria-label="Home">
          <div className="flex">
            {/* <div className="mx-auto">
              <Image
                src={logoEmilyNilsen}
                alt="Emily Nilsen logo"
                width="100"
                height="70"
                objectFit="cover"
                objectPosition="center"
                unoptimized
              />
            </div> */}
          </div>
        </Link>
        <div className="relative mt-12 sm:mt-16">
          <BackgroundIllustration
            width="1090"
            height="1090"
            className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-teal-200/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
          />
          <h1 className="text-4xl font-extrabold tracking-tight text-center text-zinc-900">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-lg text-center text-zinc-600">{subtitle}</p>
          )}
        </div>
        <div className="flex-auto px-4 py-10 mt-10 -mx-4 bg-white shadow-2xl shadow-zinc-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
          {children}
        </div>
      </div>
    </main>
  )
}
