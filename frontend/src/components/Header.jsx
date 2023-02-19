import { useGlobalState } from '../store'
import dale from '../assets/images/dale.png'
import { requestWalletConnection } from '../shared/metamask'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const shortenAddress = (address) =>
    `${address.slice(0, 4)}...${address.slice(-4)}`

  return (
    <nav className="w-4/5 flex flex-row md:justify-center justify-between items-center py-4 mx-auto z-[4000]">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <div className="text-white flex flex-row items-center py-2">
          <img
            src={dale}
            alt="nft"
            className="p-1 w-10 h-10 rounded-full align-middle bg-gradient-to-t from-[#000428] via-[#bb1446] to-[#000428] border-none"
          />
          <button className="px-4 font-semibold italic text-xs md:text-lg sm:text-lg">
            Monster-NFT
          </button>
        </div>
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
      hidden list-none flex-row justify-evenly 
      items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">About</li>
        <li className="mx-4 cursor-pointer">Faq</li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
          bg-[#bb1446] hover:bg-[#0b0d3d] md:text-xs p-2
          rounded-full cursor-pointer text-xs sm:text-base"
        >
          {shortenAddress(connectedAccount)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
          bg-[#bb1446] hover:bg-[#0b0d3d] md:text-xs p-2
          rounded-full cursor-pointer text-xs sm:text-base"
          onClick={requestWalletConnection}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}
export default Header
