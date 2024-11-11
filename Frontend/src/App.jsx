import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home/Home'
import Food from './components/Food'
import SingleFood from './components/singleFood'
import AddFood from './components/AddFood'
import Edit from './components/Edit'
import Login from './components/Login'

function App() {
  return (
   <>
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path= '/food' element = {<Food/>}/>
    <Route path='/:id' element = {<SingleFood/>}/>
    <Route path = '/addFood' element = {<AddFood/>}/>
    <Route path='/edit/:id' element = {<Edit/>}/>
    <Route path='/login' element = {<Login/>}/>
    
    
  </Routes>
  
  </BrowserRouter>
    
  
   </>
  )
}

export default App
