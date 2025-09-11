import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="max-w-7x1 mx-auto pt-20 px-6">
        <HeroSection />
        <About />
      </div>
    </>
  )
}

export default App
