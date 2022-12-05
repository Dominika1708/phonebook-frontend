import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';
import { filterReducer } from './filterSlice';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
