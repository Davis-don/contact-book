import React from 'react'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoAdd } from "react-icons/io5";
import Addcontact from '../Addcontact/Addcontact';
import { useState } from 'react';
import Contactnames from '../Addcontact/Contact names/Contactnames';
import Displaycontacts from '../Displayall/Displaycontacts';
import useContactStore from '../../Store/Contactstore';

function Homepage() {

  const [contact,setContact]=useState(<Addcontact/>);
  const allContacts=useContactStore((state)=>state.contacts)
  // const getDisplayValueSetToTrue=useContactStore((state)=>state.contacts);
  // console.log(`here friend ${getDisplayValue.displayElement}`)

  const getDisplayValueSetToTrue = useContactStore((state) => {
    // Check if any contact has displayElement set to true
    return state.contacts.some(contact => contact.displayElement === true);
  });
    
 



  const setAllToFalseThenRunGetDisplaySetTrueFunction = () => {
    // // First call the setAllFalse action from the store
     useContactStore.getState().setAllFalse();
  
    // // Then re-run getDisplayValueSetToTrue to check if any contact's displayElement is true
     const isAnyContactDisplayed = getDisplayValueSetToTrue;

     const getDisplayValueSetToTrue=isAnyContactDisplayed
    
     //console.log('Is any contact displayed?', isAnyContactDisplayed);
  
     // If needed, you can perform further actions based on the result
  };
  




  
  return (
    <>
    <div className='overall-homepage-section-big-screen'>
        <div className="homepage-left">
            <h1  style={{textAlign:'center'}} className='text-light contact-heading'>My contacts ({allContacts.length})</h1>
            {/* <Contactname/> */}
            <Contactnames  className='bg-info'/>
            <div className="add-concern rounded-circle" onClick={setAllToFalseThenRunGetDisplaySetTrueFunction}>
              <IoAdd  style={{fontSize:'4rem'}} className=' text-light'/>
            </div>
          
        </div>
        <div className="homepage-right">
          {getDisplayValueSetToTrue ? <Displaycontacts/> : contact}
          {/* <Displaycontacts/> */}
        </div>
        </div>
         
        <div className="overall-homepage-small-screen-section">
          <div className="contact-items-small-screen">
          {getDisplayValueSetToTrue ? <Displaycontacts/> : contact}
          </div>

          <div className="add-contact-small-screen rounded-circle bg-success">
          <IoAdd  onClick={setAllToFalseThenRunGetDisplaySetTrueFunction} style={{fontSize:'4rem'}} className=' text-light'/>
          </div>

        {/* {getDisplayValueSetToTrue ? <Displaycontacts/> : contact}
        <h1  style={{textAlign:'center'}} className='text-light contact-heading-small'>My contacts ({allContacts.length})</h1>
        <div className="add-concern-small rounded-circle">
              <IoAdd onClick={setAllToFalseThenRunGetDisplaySetTrueFunction}  style={{fontSize:'4rem'}} className=' text-light'/>
            </div>
            {contact && <div className="add-items-form">
              <div className="top-div-now">
             <Addcontact/>
             <div className="cancel-btn">
             <button onClick={()=>setContact(true)} className='btn  text-light'>Cancel</button>
             </div>
            
              </div>
              
            </div>
} */}
        </div>
        </>
  )
}

export default Homepage