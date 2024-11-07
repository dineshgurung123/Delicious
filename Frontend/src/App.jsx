import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home/Home'
import Food from './components/Food'

function App() {
  return (
   <>
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path= '/food' element = {<Food/>}/>
    
  </Routes>
  
  </BrowserRouter>
    
  
   </>
  )
}

export default App
