import { BsArrowRightShort } from 'react-icons/bs'
import { setGlobalState, useGlobalState } from '../store/index'

const CreateNFT = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <div
      className="flex flex-col md:flex-row w-full justify-between 
        items-center mx-auto mt-10"
    >
      <div className="">
        <h1 className="text-white font-bold text-5xl py-1">
          Rare Monster <span className="text-[#bb1446]">NFT</span>
        </h1>
        <h1 className="font-semibold text-5xl text-white mb-5 py-1">
          collection
        </h1>
        <p className="text-white text-sm font-light mt-1 text-left">
          "Unlock Your Digital Assets With Monster NFT!"
          <br />
          "Experience the Possibilities of Collecting with Minting NFTS"
        </p>
        {connectedAccount ? (
          <div className="flex flew-row text-5xl mt-5 mb-5">
            <button
              className="text-white text-sm px-4 py-3 bg-[#bb1446] rounded-lg 
              w-auto flex flex-row justify-center items-center shadow-md
              shadow-gray-700"
              onClick={() => setGlobalState('boxModal', 'scale-100')}
            >
              Mint NFT
              <BsArrowRightShort className="font-bold animate-pulse" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CreateNFT
