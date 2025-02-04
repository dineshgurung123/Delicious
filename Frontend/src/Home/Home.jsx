import React from "react"
import Navbar from "../componentss/Navbar"
import Find from "../componentss/Find"
import About from "../componentss/About"
import Offer from  "../componentss/Offers"
import Footer from "../componentss/Footer"
import Welcome from "../componentss/Welcome"
import FeaturedFood from "../componentss/FeaturedFood"
import Feedback from "../componentss/Feedback"
import FeedbackForm from "../componentss/FeedBackForm"

function Home() {
  return (
    <div>
    
    
     
  <Navbar/>

  <Welcome/>

  <FeaturedFood/>
  <Find/>
  <About/>
 <Feedback/>
 <FeedbackForm/>
 
  
  {/* <Offer/> */}
 


  
  <Footer/>
 
  

    </div>
  )
}

export default Home
