import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './contactname.css'



function Contactname({firstName,lastName}) {




  function firstUppercaseLetter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        return str[i];
      }
    }
    return null; // return null if no uppercase letter is found
  }
  
  return (
    <div className='ovaerall-contact-name-container'>
      <div className="content-holder-div">
        <div className="underline-text">
        <div className="img-holder rounded-circle">
      <h1>{firstUppercaseLetter(firstName)}</h1>
</div>
        <h1 className='text-light'>{firstName + " " + lastName}</h1>
        </div>
      
      </div>
        
        </div>
  )
}

export default Contactname