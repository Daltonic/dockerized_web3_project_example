import React from 'react'
import chriv from '../assets/images/chriv.jpg'

const About = () => {
  return (
    <div className="mx-auto w-full px-20 mt-8">
      <div className="flex flex-col mx-auto w-full mt-5 md:flex-row ">
        <div className="w-4/5 mx-auto">
          <img
            src={chriv}
            alt=""
            className="lg:w-[300px] lg:h-[300px] w-[100px] h-[100px] object-contain mx-auto rounded-full shadow-[#bb1446] shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center mx-auto mt-10 w-full">
          <h1 className="text-white text-center text-4xl font-bold mb-5">About</h1>
          <h4 className="font-bold text-xl text-[#bb1446]">The Creator</h4>
          <p className="text-white font-light text-sm text-center mt-2 w-full">
            I am a front-end developer with a passion for creating visually
            appealing and user-friendly websites. I have a strong foundation in
            HTML, CSS, and JavaScript, and am skilled in responsive design and
            cross-browser compatibility. I am constantly learning and staying
            up-to-date on the latest technologies and trends in the field. In my
            previous work experience, I have collaborated with designers and
            back-end developers to bring projects from concept to launch. I am
            excited to use my skills and knowledge to create beautiful and
            functional websites for my clients.
          </p>
          <h1 className="font-bold lg:text-xl text-md text-[#bb1446] mt-10">
            Monster-NFT
          </h1>
          <p className="text-white font-light text-sm py-1 text-center mt-2 w-full">
            A monster NFT is a digital asset that represents a unique, digital
            monster. These monsters are often created by artists and can be
            collected and traded like physical collectibles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
