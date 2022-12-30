import Link from 'next/link'
import Image from 'next/image'

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
    <main className="flex min-h-full overflow-hidden pt-0 sm:py-16">
      <div className="mx-left flex w-full max-w-2xl flex-col px-0 sm:px-0">
        <Link href="/" aria-label="Home">
          <div className="flex"></div>
        </Link>
        <div className="relative mt-0 sm:mt-0">
          <BackgroundIllustration
            width="1090"
            height="1090"
            className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-fuchsia-200/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
          />
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-stone-900">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-center text-lg text-stone-600">
              {subtitle}
            </p>
          )}
        </div>
        <div className="shadow-none bg-t -mx-4 mt-10 flex-auto px-4 py-10 shadow-stone-900/10 sm:mx-0 sm:flex-none sm:rounded-none sm:p-1">
          {children}
        </div>
      </div>
    </main>
  )
}
