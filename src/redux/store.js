import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './contacts/itemsSlice';
import { filterReducer } from './contacts/filterSlice';
import {authReducer} from './auth/slice'

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
