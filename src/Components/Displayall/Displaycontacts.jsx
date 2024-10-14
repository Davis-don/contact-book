
import React from 'react';
import Displaycontact from './Displaycontact';
import useContactStore from '../../Store/Contactstore';

function Displaycontacts() {
  
  const contacts = useContactStore((state) => state.contacts);


  const contactToDisplay = contacts.find(contact => contact.displayElement === true);
   console.log(contactToDisplay);

  return (
    <div>
      {contactToDisplay ? (
        <Displaycontact fName={contactToDisplay.fName} />
      ) : (
        <p>No contact selected for display</p>
      )}
    </div>
  );
}

export default Displaycontacts;

