import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar'
import { HeroSection } from './HeroSection'
import { ServiceSection } from './ServiceSection'
import { WorkSection } from './WorkSection'
import { ReviewSection } from './ReviewSection'
import { ProsSection } from './ProsSection'
import { HireSection } from './HireSection'
import { FooterSection } from './FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <ServiceSection/>
     <WorkSection/>
     <ReviewSection/>
     <ProsSection/>
     <HireSection/>
     <FooterSection/>
    </>
  )
}

export default App
