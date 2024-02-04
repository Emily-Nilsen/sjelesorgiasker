import clsx from 'clsx'

const formClasses =
  'block w-full min-w-0 flex-auto appearance-none rounded-md border border-stone-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-none shadow-stone-800/5 placeholder:text-stone-400 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/10 dark:border-stone-700 dark:bg-stone-700/[0.15] dark:text-stone-200 dark:placeholder:text-stone-500 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-400/10 sm:text-base'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="block mb-2 text-base font-semibold text-stone-900"
    >
      {children}
    </label>
  )
}

export function TextField({ id, label, type = 'text', className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

// export function SelectField({
//   id,
//   label,
//   type = 'radio',
//   className,
//   ...props
// }) {
//   return (
//     <div className={className}>
//       {label && <Label id={id}>{label}</Label>}
//       <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
//     </div>
//   )
// }
