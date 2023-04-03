// import { createSlice} from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  clearContacts,
} from './operations';

let itemsInitialState = {
  list: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const itemsReducer = createReducer(itemsInitialState, builder => {
  builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload.contacts.sort((first, second) =>
        first.name.localeCompare(second.name)
      );
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.list.push(action.payload.contact);
      state.list.sort((first, second) =>
        first.name.localeCompare(second.name)
      );
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.list.findIndex(item => item._id === action.meta.arg);
      state.list.splice(index, 1);
    })
    .addCase(clearContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.list = [];
    })

    .addCase(fetchContacts.pending, handlePending)
    .addCase(addContact.pending, handlePending)
    .addCase(deleteContact.pending, handlePending)

    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.rejected, handleRejected);
});

// export const itemsSlice = createSlice({
//   name: 'items',
//   initialState: itemsInitialState,
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [addContact.pending]: handlePending,
//     [deleteContact.pending]: handlePending,

//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.list = action.payload
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.list.push(action.payload)
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.list.findIndex(item => item.id === action.payload.id);
//       state.list.splice(index, 1);
//     },

//     [fetchContacts.rejected]: handleRejected,
//     [addContact.rejected]: handleRejected,
//     [deleteContact.rejected]: handleRejected,
// }
// });

// export const itemsReducer = itemsSlice.reducer;
