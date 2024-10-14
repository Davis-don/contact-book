import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Addcontact.css';
import useContactStore from '../../Store/Contactstore';
import { useState } from 'react';

function Addcontact() {
  const addContact = useContactStore((state) => state.addContact);
  const [data, setData] = useState({
    fName: '',
    lName: '',
    emailAdress: '',
    phoneNumber: '',
    displayElement: false,
    Disabled:false
  });

  let handleUpdate = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...data,
      id: Math.trunc(Math.random() * 1000000), // Generate new ID on submit
    };
    addContact(newContact); 
    setData({
      fName: '',
      lName: '',
      emailAdress: '',
      phoneNumber: '',
      displayElement: false,
      Disabled:false
    }); 
  };

  return (
    <div className='overall-input-form-container'>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: 'center' }} className='text-light'>
          Save to contact
        </h1>
        <input
          onChange={handleUpdate}
          name='fName'
          value={data.fName} // Bind value to state
          placeholder='First Name'
          type='text'
          className='form-control input-field'
          required
        />
        <input
          onChange={handleUpdate}
          name='lName'
          value={data.lName} // Bind value to state
          placeholder='Last Name'
          type='text'
          className='form-control input-field'
          required
        />
        <input
          onChange={handleUpdate}
          name='emailAdress'
          value={data.emailAdress} 
          placeholder='Email'
          type='email'
          className='form-control input-field'
          required
        />
        <input
          onChange={handleUpdate}
          name='phoneNumber'
          value={data.phoneNumber} 
          placeholder='Phone'
          type='number'
          className='form-control input-field'
          required
        />

        <div className="btn-container">
          <button type='submit' className='btn bg-success'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addcontact;





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Addcontact.css';
// import useContactStore from '../../Store/Contactstore';
// import { useState } from 'react';

// function Addcontact() {
//   const addContact = useContactStore((state) => state.addContact);
//   const [data, setData] = useState({
//     id: Math.trunc(Math.random() * 1000000),
//     fName: '',
//     lName: '',
//     emailAdress: '',
//     phoneNumber: '',
//     displayElement: false,
//   });

//   let handleUpdate = (e) => {

//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     addContact(data);
//   };

//   return (
//     <div className='overall-input-form-container'>
//       <form onSubmit={handleSubmit}>
//         <h1 style={{ textAlign: 'center' }} className='text-light'>
//           Save to contact
//         </h1>
//         <input
//           onChange={handleUpdate}
//           name='fName'
//           placeholder='First Name'
//           type='text'
//           className='form-control input-field'
//           required
//         />
//         <input
//           onChange={handleUpdate}
//           name='lName'
//           placeholder='Last Name'
//           type='text'
//           className='form-control input-field'
//           required
//         />
//         <input
//           onChange={handleUpdate}
//           name='emailAdress'
//           placeholder='Email'
//           type='email'
//           className='form-control input-field'
//           required
//         />
//         <input
//           onChange={handleUpdate}
//           name='phoneNumber'
//           placeholder='Phone'
//           type='number'
//           className='form-control input-field'
//           required
//         />

//         <div className="btn-container">
//           <button type='submit' className='btn bg-success'>
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Addcontact;
