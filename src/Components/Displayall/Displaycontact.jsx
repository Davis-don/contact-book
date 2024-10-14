import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Displaycontact.css'
import useContactStore from '../../Store/Contactstore';
import { useState } from 'react';
function Displaycontact({id,fName,lName,contact,isDisabled}) {
  const deleteContact=useContactStore((state)=>state.deleteContact);
  const disableContact=useContactStore((state)=>state.setDisable);
  const enableContact = useContactStore((state)=>state.setEnable)

  function firstUppercaseLetter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        return str[i];
      }
    }
    return null; 
  }




  return (
    <div className='overall-display-contact-container'>

        <div className="top-initial-holder">
         <div className="circular-icon-container rounded-circle">
         {firstUppercaseLetter(fName)}
         </div>
         <h1 className={isDisabled ? 'text-secondary' :'text-success display-contact-heading'}>{fName + " " + lName}</h1>
         <h3 className={isDisabled ? 'text-secondary':'text-light'}>Mobile <span className={isDisabled ? 'text-secondary' : 'text-info'}>{contact}</span></h3>

         <div className="contact-stuff-btns">
          <button disabled={isDisabled} onClick={()=>deleteContact(id)} className='btn btn-danger btn-lg' type='button'>Delete</button>
          <button onClick={()=>isDisabled ? enableContact(id) : disableContact(id) } className='btn btn-secondary btn-lg' type='button'>{isDisabled ? "Enable" : "Disable"}</button>
         </div>
        </div>
        

    </div>
  )
}

export default Displaycontact