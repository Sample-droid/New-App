import './App.css'


import Login from './Components/Login/Login'

import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'


import Features from './Components/Features/Features'; import EventJoin from './Components/Forms/Events/EventJoin/EventJoin'


import Condacts from './Components/Condact/Condacts';import Signup from './Components/Signup/Signup'
import Welcomepage from './Components/Welcomepage/Welcomepage';import EventCreate from './Components/Forms/Events/EventCreate/EventCreate'


import EventJoinForm from './Components/Forms/Events/EventJoin/EventJoinForm/EventJoinForm'; import Green from './Components/Forms/OEvents/Green';

import Foo from './Components/Forms/OEvents/Foo'; import Feedback from './Components/Feedback/Feedback';
function App() {




        return (
   <>
      
      <div>
       <Routes>
        
        <Route><Route path='/login' element={<Login/>}/> <Route path='/eventcreate' element={<EventCreate/>}/>
       
       
        <Route path='/home' element={<Home/>}/> <Route path='/green' element={<Green/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        
        <Route path='/features' element={<Features/>}/> <Route path='/eventjoin' element={<EventJoin/>}/>
        
        
<Route path='/contact' element={<Condacts/>}/> <Route path='/f' element={<Foo/>}/>
 <Route path='/signup' element={<Signup/>}/>




<Route path='/' element={<Welcomepage/>}/> <Route path='/join/:id' element={<EventJoinForm/>}/>
               </Route>
       
       </Routes></div>
</>

)}


export default App