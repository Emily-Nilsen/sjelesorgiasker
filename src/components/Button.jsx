import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-lg font-semibold tracking-tight shadow-sm focus:outline-none transition duration-300 ease-in-out',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-lg font-semibold tracking-tight focus:outline-none transition duration-300 ease-in-out',
}

const variantStyles = {
  solid: {
    stone:
      'bg-stone-900 text-white hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 active:bg-stone-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-stone-900',
    fuchsia:
      'bg-fuchsia-600 text-white hover:bg-fuchsia-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600 active:bg-fuchsia-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-fuchsia-600',
    white:
      'bg-white text-fuchsia-600 hover:text-fuchsia-700 focus-visible:text-fuchsia-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-fuchsia-50 active:text-fuchsia-900/80 disabled:opacity-40 disabled:hover:text-fuchsia-600',
  },
  outline: {
    stone:
      'border-stone-200 text-stone-900 hover:border-stone-300 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600 active:border-stone-200 active:bg-stone-50 active:text-stone-900/70 disabled:opacity-40 disabled:hover:border-stone-200 disabled:hover:bg-transparent',
    fuchsia:
      'border-fuchsia-300 lg:text-fuchsia-100 text-fuchsia-600 hover:border-fuchsia-400 hover:bg-fuchsia-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600 active:text-fuchsia-600/70 disabled:opacity-40 disabled:hover:border-fuchsia-300 disabled:hover:bg-transparent hover:text-fuchsia-600',
    fuchsiaLight:
      'border-fuchsia-50 text-fuchsia-100 lg:text-fuchsia-600 hover:border-fuchsia-100 hover:bg-fuchsia-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600 active:text-fuchsia-600/70 disabled:opacity-40 disabled:hover:border-fuchsia-300 disabled:hover:bg-transparent',
    fuchsiaDark:
      'border-fuchsia-200 text-fuchsia-900 hover:border-fuchsia-300 hover:bg-fuchsia-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600 active:border-fuchsia-200 active:bg-fuchsia-50 active:text-fuchsia-900/70 disabled:opacity-40 disabled:hover:border-fuchsia-200 disabled:hover:bg-transparent',
  },
}

export function Button({
  variant = 'solid',
  color = 'stone',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
