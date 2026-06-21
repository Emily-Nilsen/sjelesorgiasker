import { Fragment, useState } from 'react'
import clsx from 'clsx'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// Styled dropdown built on Headless UI's Listbox so the open menu matches the
// rest of the site (a native <select>'s option list is drawn by the OS and
// can't be styled). A hidden <input> mirrors the selected value so Netlify
// still detects the field at build time and submits it with the form.
export function SelectMenu({
  name,
  label,
  options = [],
  placeholder = 'Velg gjerne et alternativ',
  defaultValue = '',
  className,
}) {
  const [selected, setSelected] = useState(defaultValue)

  return (
    <Listbox
      as="div"
      value={selected}
      onChange={setSelected}
      className={className}
    >
      {label && (
        <Listbox.Label className="mb-2 block text-base font-semibold text-stone-900">
          {label}
        </Listbox.Label>
      )}
      <input type="hidden" name={name} value={selected} />
      <div className="relative">
        <Listbox.Button className="relative block w-full cursor-pointer rounded-md border border-stone-900/10 bg-white py-[calc(theme(spacing.2)-1px)] pl-3 pr-10 text-left text-base text-stone-900 shadow-none focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/10 sm:text-base">
          <span
            className={clsx('block truncate', !selected && 'text-stone-400')}
          >
            {selected || placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronUpDownIcon
              className="h-5 w-5 text-stone-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-md border border-stone-900/10 bg-white py-1 text-base shadow-lg ring-1 ring-stone-900/5 focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className={({ active }) =>
                  clsx(
                    'relative cursor-pointer select-none py-2 pl-10 pr-4',
                    active ? 'bg-fuchsia-50 text-fuchsia-900' : 'text-stone-700'
                  )
                }
              >
                {({ selected: isSelected }) => (
                  <>
                    <span
                      className={clsx(
                        'block truncate',
                        isSelected ? 'font-semibold' : 'font-normal'
                      )}
                    >
                      {option}
                    </span>
                    {isSelected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-fuchsia-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
