import { createSlice, nanoid } from '@reduxjs/toolkit';

let itemsInitialState = [];

const savedContacts = JSON.parse(localStorage.getItem('contacts'));
if (savedContacts) {
  itemsInitialState = savedContacts;
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
