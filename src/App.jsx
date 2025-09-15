import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import LiquidEther from './components/LiquidAether'
import GradualBlur from './components/GradualBlur'
import DotGrid from './components/DotGrid';
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <div className="absolute inset-0 -z-10">
        <div className='relative w-full h-screen'>
          <LiquidEther
            colors={['#5024FF', '#3AE1E4', '#44F3BF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>

      <div className="relative max-w-7x1 mx-auto pt-0 px-6">
        <HeroSection />
        <About />
        <Projects />
        
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={9}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </>
  )
}

export default App
