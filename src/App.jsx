import { useState } from 'react'
import './App.css'
import Homepage from './Components/Pages/Homepage'
import Contactnames from './Components/Addcontact/Contact names/Contactnames'
import Addcontact from './Components/Addcontact/Addcontact'

function App() {
  
  return (
    <>
     <div className="app">
     <Homepage/>
     {/* <Contactnames/>
     <Addcontact/> */}
     </div>
    </>
  )
}

export default App
