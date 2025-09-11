import React from 'react'


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:6xl lg:text-7xl text-center tracking-wide">
            Hello, I'm
            <span className='bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text'>
                {" "}Ethan Ngwa.
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            An aspiring developer, passionate about building impactful software solutions and continuously learning new technologies.
            I take pride in my work and am committed to every project I start.
        </p>      
    </div>
  )
}

export default HeroSection
