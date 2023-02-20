import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaTimes } from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import { getMints, mintNFT } from '../services/api'

const Minter = () => {
  const [boxModal] = useGlobalState('boxModal')
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !price || !description || !image) return

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('recipientAddress', connectedAccount)
    formData.append('image', image)

    await toast.promise(
      new Promise(async (resolve, reject) => {
        await mintNFT(formData)
          .then(async () => {
            await getMints().then((res) => setGlobalState('mints', res))
            closeModal()
            resolve()
          })
          .catch((error) => reject(error))
      }),
      {
        pending: 'Minting & saving data to chain...',
        success: 'Minting completed, will reflect within 30sec 👌',
        error: 'Encountered error 🤯',
      },
    )
  }

  const closeModal = () => {
    setGlobalState('boxModal', 'scale-0')
    resetForm()
  }

  const resetForm = () => {
    setImage('')
    setName('')
    setPrice('')
    setDescription('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${boxModal}`}
    >
      <div
        className="bg-gradient-to-t from-[#000428] via-[#bb1446] to-[#000428] shadow-xl
      shadow-[#bb1446] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-gray-400">Verbwire Goerli Chain</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          {image ? (
            <div className="flex flex-row justify-center items-center rounded-xl mt-5">
              <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
                <img
                  alt="NFT"
                  className="h-full w-full object-cover cursor-pointer"
                  src={image}
                />
              </div>
            </div>
          ) : null}

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 px-4 py-2"
              type="url"
              name="image"
              placeholder="Image URL"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 px-4 py-2"
              type="text"
              name="name"
              placeholder="Title"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 px-4 py-2"
              type="number"
              name="price"
              step={0.01}
              min={0.01}
              placeholder="Price (Eth)"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-18 py-2 px-4"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex flex-row justify-center items-center
              w-full text-white text-md bg-gray-800
              py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              hover:bg-transparent hover:text-[#ffffff]
              hover:border hover:border-gray-800
              focus:outline-none focus:ring mt-5"
          >
            Mint Free
          </button>
        </form>
      </div>
    </div>
  )
}

export default Minter
