import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home/Home'
import Food from './components/Food'
import SingleFood from './components/singleFood'
import AddFood from './components/AddFood'

function App() {
  return (
   <>
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path= '/food' element = {<Food/>}/>
    <Route path='/:id' element = {<SingleFood/>}/>
    <Route path = '/addFood' element = {<AddFood/>}/>
    
  </Routes>
  
  </BrowserRouter>
    
  
   </>
  )
}

export default App
