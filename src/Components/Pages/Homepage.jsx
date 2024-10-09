import React from 'react'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoAdd } from "react-icons/io5";
import Addcontact from '../Addcontact/Addcontact';
import { useState } from 'react';
import Contactname from '../Addcontact/Contact names/Contactname';
import Contactnames from '../Addcontact/Contact names/Contactnames';


function Homepage() {
  const [contact,setContact]=useState('')
  
  return (
    <>
    <div className='overall-homepage-section-big-screen'>
        <div className="homepage-left">
            <h1  style={{textAlign:'center'}} className='text-light contact-heading'>My contacts (0)</h1>
            {/* <Contactname/> */}
            <Contactnames/>
            <div className="add-concern rounded-circle" onClick={()=>setContact(<Addcontact/>)}>
              <IoAdd  style={{fontSize:'4rem'}} className=' text-light'/>
            </div>
          
        </div>
        <div className="homepage-right">
          {contact}
        </div>
        </div>
         
        <div className="overall-homepage-small-screen-section">
        <h1  style={{textAlign:'center'}} className='text-light contact-heading-small'>My contacts (0)</h1>
        <div className="add-concern-small rounded-circle">
              <IoAdd onClick={()=>setContact(<Addcontact/>)}  style={{fontSize:'4rem'}} className=' text-light'/>
            </div>
            {contact && <div className="add-items-form">
              <div className="top-div-now">
             <Addcontact/>
             <div className="cancel-btn">
             <button onClick={()=>setContact(false)} className='btn  text-light'>Cancel</button>
             </div>
            
              </div>
              
            </div>
}
        </div>
        </>
  )
}

export default Homepage