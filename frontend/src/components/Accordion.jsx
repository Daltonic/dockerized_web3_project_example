import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useRef, useState } from 'react'

const Accordion = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false)
  const el = useRef()

  const handleClick = () => {
    if (!isOpen) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <ul className="p-3 w-full shadow-2xl">
      <li className="w-full">
        <div
          className="flex justify-between items-center"
          onClick={handleClick}
        >
          <h1 className="text-white text-sm md:text-md">{question}</h1>
          <MdKeyboardArrowDown
            className={`text-2xl transiton-all duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            onClick={handleClick}
          />
        </div>

        <ul>
          <li
            className="overflow-y-hidden transiton-all duration-200"
            ref={el}
            style={
              isOpen ? { height: el.current.scrollHeight } : { height: '0px' }
            }
          >
            <div className="py-5 px-2 text-white text-justify text-sm md:text-md">
              {answer}
            </div>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default Accordion
