import React from "react"
import Navbar from "../componentss/Navbar"
import Find from "../componentss/Find"
import About from "../componentss/About"
import Offer from  "../componentss/Offers"
import Footer from "../componentss/Footer"
import Welcome from "../componentss/Welcome"

function Home() {
  return (
    <div>
    
    
     
  <Navbar/>

  <Welcome/>
  <Offer/>
  <Find/>
  <About/>
  <Footer/>
  

    </div>
  )
}

export default Home
