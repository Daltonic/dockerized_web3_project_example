import axios from 'axios'
import { useEffect } from 'react'
import dale5v from '../assets/images/dale5v.png'
import { setGlobalState, useGlobalState } from '../store'

const Aside = () => {
  const [mints] = useGlobalState('mints')

  const getMints = async () => {
    return new Promise(async (resolve, reject) => {
      await axios
        .get('http://localhost:9000/mints')
        .then((data) => resolve(data))
        .catch((error) => reject(new Error(error)))
    })
  }
  useEffect(async () => {
    await getMints().then((res) => setGlobalState('mints', res.data.data))
  }, [])
  return (
    <div className="w-4/5 py-10 justify-center mt-8 mx-auto">
      <h1 className="text-3xl capitalize mb-4 text-[#bb1446] opacity-70 font-bold">
        Latest Artworks
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3
        lg:grid-cols-3 gap-6
        md:gap-4 lg:gap-3 py-2.5
      text-white font-mono px-1"
      >
        {mints.map((mint, i) => (
          <a
            href="https://testnets.opensea.io/collection/monsters-nft-v2-1"
            target="_blank"
            key={i}
            className="w-full  h-[20rem] hover:scale-90 transition-transform duration-700
            md:w-6/4 md:mt-0 font-sans relative mx-auto"
          >
            <img
              src={mint.image}
              alt="nft"
              className="object-cover rounded-md mx-auto w-full h-full shadow-md hover:shadow-[#bb1446]"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 flex flex-row justify-between items-center w-full p-4 rounded-md">
              <p>
                {mint.name} #{mint.id}
              </p>
              <span className="flex flex-row items-center">
                <img
                  src={dale5v}
                  alt="nft"
                  className=" w-8 h-8 rounded-full align-middle mx-2 border-none"
                />
                {mint.price}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Aside
