import React from 'react'
import avatar from "../assets/avatar.jpg";
import SplitText from './SplitText';


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col mt-2 lg:mt-20">
      <SplitText
        text="Hi. I'm,"
        className="text-4xl sm:6xl lg:text-7xl text-left tracking-wide text-semibold"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-200px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <div className="w-full px-4 md:px-8 py-0">
        <div className='float-left animate-background block rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-700 bg-[length:_200%_200%] p-0.5 [animation-duration:_2s] mt-35'>
          <img src={avatar} alt="Ethan Ngwa" className="w-100 h-100 rounded-full" />
        </div>
        <div className='ml-0 md:ml-48 mt-10 md:mt-0'>
          <h1 className="text-4xl sm:6xl lg:text-7xl text-center tracking-wide mt-50">
            <span className='text-right bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text animate-gradient [animation-duration:_2s]'>
              Ethan Ngwa.
            </span>
          </h1>
          <p className='mt-30 text-2xl text-center text-neutral-500 max-w-4xl'>
            An <span className='bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text animate-gradient [animation-duration:_2s]'>aspiring developer</span>, passionate about building <span className='bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text animate-gradient [animation-duration:_2s]'>impactful</span> software solutions and continuously learning new technologies.
            I take pride in my work and am committed to every project I start.
          </p>
        </div>

      </div>


    </div>
  )
}

export default HeroSection
