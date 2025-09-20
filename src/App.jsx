import { useState } from 'react'
import './App.css'


import Login from './Components/Login'

import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'


import Features from './Components/Features'


import Condacts from './Components/Condacts'
import Signup from './Components/Signup'
import Welcomepage from './Components/Welcomepage'
function App() {

  return (
    <>
      <div>
       
       <Routes>
        
        
        <Route><Route path='/login' element={<Login/>}/> 
        <Route path='/home' element={<Home/>}/> 
        
        
        <Route path='/features' element={<Features/>}/> 
        
        <Route path='/contact' element={<Condacts/>}/>


        <Route path='/signup' element={<Signup/>}/>

        <Route path='/' element={<Welcomepage/>}/>
        </Route>
       </Routes>
      </div>
      
    </>
  )
}
export default App