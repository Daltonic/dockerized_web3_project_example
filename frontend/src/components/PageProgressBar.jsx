import React from 'react'
import {useEffect,useRef} from 'react'

const PageProgressBar = () => {
    const el = useRef()

    useEffect(()=>{
       window.addEventListener('scroll',function() {
         const scrollPosition = window.scrollY
         const maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight

         const scrollPercentage = (scrollPosition / maxScrollPosition) * 100
         el.current.style.width = `${scrollPercentage}%`
         el.current.style.background = 'linear-gradient(45deg, #e9292c,#047aed,#e9292c)'
       }) 
    },[])





  return (
    <div 
     className='scroll h-2 rounded-lg z-[5000]'
     ref={el}
     ></div>
  )
}

export default PageProgressBar