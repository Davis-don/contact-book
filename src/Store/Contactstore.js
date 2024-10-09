
import { create } from "zustand";

const contactStore = (set) => ({
    contacts: [],

    addContact: (data) => {
        set((state) => ({
            contacts: [data, ...state.contacts], // Corrected from 'contact' to 'contacts'
        }));
    },
});

const useContactStore = create(contactStore);

export default useContactStore;
