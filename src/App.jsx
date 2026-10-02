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
import Team from './components/Team'
import StudentReview from './components/StudentReview'
import Journey from './components/Journey'
import Certification from './components/Certification'

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
  <Team/>
  <StudentReview/>
  <Certification/>
  <Journey/>
  <Footer/>

    </>
  )
}

export default App
