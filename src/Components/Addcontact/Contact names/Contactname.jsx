import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './contactname.css'
import useContactStore from '../../../Store/Contactstore';

function Contactname({id,firstName,lastName}) {
  const setDisplayElementTrue=useContactStore((state)=>state.setDisplayElementTrue)
  // const { setDisplayElementTrue } = useContactStore();

  function firstUppercaseLetter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        return str[i];
      }
    }
    return null; 
  }
  
  return(
    <div className='ovaerall-contact-name-container'>
      <div className="content-holder-div">
        <div className="underline-text">
          <ul className='ul-container'>

            {/* Clickable list */}
         <li onClick={()=>setDisplayElementTrue(id)}>

         <div className="img-holder rounded-circle">
      <h1>{firstUppercaseLetter(firstName)}</h1>
</div>
        <h1 className='text-light'>{firstName + " " + lastName}</h1>        
         </li>
          
       

        </ul>
        </div>
      
      </div>
        
        </div>
  )
}

export default Contactname