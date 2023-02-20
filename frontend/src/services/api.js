import axios from 'axios'

const BASE_URI = process.env.REACT_APP_BACKEND_BASE_URI

const getMints = async () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(BASE_URI + '/mints')
      .then((data) => resolve(data.data.data))
      .catch((error) => reject(new Error(error)))
  })
}

const mintNFT = async (formData) => {
  new Promise(async (resolve, reject) => {
    await axios
      .post(BASE_URI + '/process', formData)
      .then((res) => resolve(res.data))
      .catch(() => reject())
  })
}

export { getMints, mintNFT }
