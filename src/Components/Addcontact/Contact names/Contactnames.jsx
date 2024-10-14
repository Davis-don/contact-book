import React from 'react'
import useContactStore from '../../../Store/Contactstore'
import Contactname from './Contactname';

function Contactnames() {

    const contacts=useContactStore((state)=>state.contacts);
    
  return (
    <div className='overall-contact-names-container'>
    { contacts.map((contact)=><Contactname key={contact.id} id={contact.id} firstName={contact.fName} lastName={contact.lName}/>)}
        </div>
  )
}

export default Contactnames