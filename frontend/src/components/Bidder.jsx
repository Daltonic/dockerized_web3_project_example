import React from 'react'
import dale4 from '../assets/images/dale4.png'

const Bidder = () => {
  return (
    <div
      className="w-full text-white overflow-hidden
      md:w-3/5 lg:w-2/5 md:mt-0 shadow-[#000428] shadow-xl rounded-lg"
    >
      <img
        src={dale4}
        alt="nft"
        className=" w-full h-80 rounded-md object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  )
}

export default Bidder
