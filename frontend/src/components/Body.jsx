import React from 'react'
import Bidder from './Bidder'
import CreateNFT from './CreateNFT'

const Body = () => {
  return (
    <div className="bg-gradient-to-t from-[#000428] via-[#bb1446] to-[#000428] mb-5">
      <div className="flex flex-col items-start md:flex-row w-4/5 py-10 mx-auto mt-11">
        <CreateNFT />
        <Bidder />
      </div>
    </div>
  )
}

export default Body
