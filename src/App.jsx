import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Program from './components/Program'
import Trainer from './components/Trainer'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Membership from './components/Membership'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Hero/>
  <AboutUs/>
  <Program/>
  <Trainer/>
  <Membership/>
  <Testimonial/>
  <Footer/>

    </>
  )
}

export default App
