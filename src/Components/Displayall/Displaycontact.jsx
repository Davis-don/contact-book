import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Displaycontact.css'
import useContactStore from '../../Store/Contactstore';

function Displaycontact({id,fName,lName,contact}) {
  const deleteContact=useContactStore((state)=>state.deleteContact);

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
         <h1 className='text-success display-contact-heading'>{fName + " " + lName}</h1>
         <h3 className='text-light'>Mobile <span className='text-info'>{contact}</span></h3>

         <div className="contact-stuff-btns">
          <button onClick={()=>deleteContact(id)} className='btn btn-danger btn-lg' type='button'>Delete</button>
         </div>
        </div>
        

    </div>
  )
}

export default Displaycontact