import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

let itemsInitialState = {
  list: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload
    },    
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.list.push(action.payload)
    },    
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.list.findIndex(item => item.id === action.payload);
      state.list.splice(index, 1);
    },

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
}
});

export const itemsReducer = itemsSlice.reducer;
