import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className="mx-auto w-full mt-10 px-10 py-10 bg-opacity-50 bg-[#1e052e] text-white flex flex-col md:flex-row justify-evenly items-center">
      <div className="flex flex-col w-full md:w-4/5">
        <div className="text-[#bb1446] font-bold text-xl mb-20">
          Faq NFT
          <h1 className="text-white font-bold">Monster ape planet</h1>
          <p className="text-sm font-extralight text-white mt-2 w-4/5 ">
            A Monster Ape NFT (non-fungible token) is a type of digital asset
            that represents ownership of a unique, collectible item in the form
            of a digital art piece or other creative work. NFTs are stored on a
            blockchain, which is a decentralized, digital ledger that records
            transactions and ensures their authenticity and security.
          </p>
        </div>
      </div>
      <div className="my-5 w-full md:4/5">
        <Accordion
          question={'What are NFTs'}
          answer={
            'An NFT, or non-fungible token, is a type of digital asset that represents ownership of a unique item or piece of content. NFTs are stored on a blockchain, which allows for secure and verifiable ownership and transfer of the asset.'
          }
        />
        <Accordion
          question={'Can I use my monster NFT in a game or application ?'}
          answer={
            "It depends on the game or application. Some games and applications may allow you to use your monster NFT as a collectible or in-game item, while others may not support NFTs at all. It's a good idea to check with the game or application developer to see if they support the use of NFTs."
          }
        />
        <Accordion
          question={'How do I buy a monster-NFT ?'}
          answer={
            'To buy a monster NFT, you will need to use a cryptocurrency such as Ethereum to purchase the NFT on a marketplace like OpenSea or Rarible. Some marketplaces may also accept other forms of payment, such as credit card or PayPal.'
          }
        />
        <Accordion
          question={'Are monster-NFTs a good investment ?'}
          answer={
            "It's difficult to predict the future value of any asset, including monster NFTs. The value of an NFT can fluctuate significantly based on a variety of factors, including the popularity of the artist, the demand for the monster, and market conditions. As with any investment, it's important to do your own research and be aware of the risks involved."
          }
        />
      </div>
    </div>
  )
}

export default Faq
