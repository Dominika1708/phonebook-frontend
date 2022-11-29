import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
      items: itemsReducer,
      filter: filterReducer,
  },
});
