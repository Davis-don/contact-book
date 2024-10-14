import { create } from "zustand";
import {devtools,persist} from 'zustand/middleware'
const contactStore = (set) => ({
  contacts: [],

  // Function to add a new contact to the list
  addContact: (data) => {
    set((state) => ({
      contacts: [...state.contacts, data],
    }));
  },

  // Function to set all displayElement to false
  setAllFalse: () => {
    set((state) => ({
      contacts: state.contacts.map((contact) => ({
        ...contact,
        displayElement: false,
      })),
    }));
  },

  // Function to set one contact's displayElement to true
  setDisplayElementTrue: (id) => {
    // Call setAllFalse from within the set function
    set((state) => {
      // First, reset all displayElement properties to false
      state.contacts = state.contacts.map((contact) => ({
        ...contact,
        displayElement: false,
      }));

      // Then set the specific contact's displayElement to true
      return {
        contacts: state.contacts.map((contact) => ({
          ...contact,
          displayElement: contact.id === id,
        })),
      };
    });
  },

  deleteContact:function(taskId){
    set((state)=>{
        const upDatedTask=state.contacts.filter((contact)=>{
            return contact.id !==taskId;
        })
        return {contacts:upDatedTask};
    })
  }
});

//const useContactStore = create(contactStore);
const useContactStore = create(devtools(persist(contactStore,{name:'contacts' })));

export default useContactStore;








// import { create } from "zustand";

// const contactStore = (set) => ({
//     contacts: [],

//     // Function to add a new contact to the list
//     addContact: (data) => {
//         set((state) => ({
//             contacts: [...state.contacts, data],
//         }));
//     },
//     //function to set all to false

//     setAllFalse:()=>{
//      set((state)=>({
//         contacts:state.contacts.map(contact=>({
//             ...contact,
//             displayElement:false
//         }))
//      }))
//     },

// //set one to true
// setDisplayElementTrue: (id) => {
//     // First call setAllFalse to reset all displayElement properties
//     setAllFalse(); 

//     // Then set the specific contact's displayElement to true
//     set((state) => ({
//         contacts: state.contacts.map(contact => ({
//             ...contact,
//             displayElement: contact.id === id 
//         }))
    
//     }));
    
// },

    
    
// });

// const useContactStore = create(contactStore);

// export default useContactStore;







// import { create } from "zustand";

// const contactStore = (set) => ({
//     contacts: [],

//     addContact: (data) => {
//         set((state) => ({
//             contacts: [ ...state.contacts, data ],
//         }));

        
//     setDisplayElementTrue:()=>{
//         // code to make all the others to be false
//         set((state)=>({
        
//         }))
//     }
//         // code to make the specific contact to be true
//     },

// });

// const useContactStore = create(contactStore);

// export default useContactStore;
