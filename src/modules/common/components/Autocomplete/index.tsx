import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import CheckIcon from '@mui/icons-material/Check';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type AutocompleteProps = {
  options: AutocompleteItemProps[]
  defaultSelected?: AutocompleteItemProps
  defaultInputValue?: string
  onChange?: (e: AutocompleteItemProps | undefined) => void
  className?: string
}

export type AutocompleteItemProps = {
  label: string
  value: any
}

export default function Autocomplete({options, defaultSelected, defaultInputValue, onChange, className = ''}: AutocompleteProps) {
  const [selected, setSelected] = useState<AutocompleteItemProps | undefined>(defaultSelected || undefined)
  const [query, setQuery] = useState<string>(defaultInputValue || "")
  const [filteredItems, setFilteredItems] = useState<AutocompleteItemProps[]>(options)

  useEffect(() => {
    if(query){
      setFilteredItems(options.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())))
    }else{
      setFilteredItems(options)
    }
  }, [query])

  useEffect(() => {
    const _option = options.find((item) => item.value === selected)
    if(_option){
      if(onChange) onChange(_option)
    }
  }, [selected])



  return (
    <div className={`fixed top-16 w-72 ${className}`}>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(item :AutocompleteItemProps) => item.label}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ExpandMoreIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredItems.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map((item :AutocompleteItemProps, index: number) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      }`
                    }
                    value={item.value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-primary'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
