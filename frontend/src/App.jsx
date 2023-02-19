import Header from './components/Header'
import Footer from './components/Footer'
import PageProgressBar from './components/PageProgressBar'
import About from './components/About'
import Aside from './components/Aside'
import Body from './components/Body'
import Faq from './components/Faq'
import Minter from './components/Minter'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { checkWalletConnection } from './shared/metamask'

function App() {
  useEffect(async () => {
    await checkWalletConnection()
  }, [])
  return (
    <div
      className="min-h-screen bg-gradient-to-t from-gray-900 to-[#000428] 
    bg-center subpixel-antialiased bg-repeat cursor-pointer"
    >
      <PageProgressBar />
      <Header />
      <div>
        <Body />
        <Aside />
        <About />
        <Faq />
      </div>
      <Footer />
      <Minter />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
export default App
