import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items.list;
export const selectIsLoading = state => state.contacts.items.isLoading;
export const selectError = state => state.contacts.items.error;
export const selectFilter = state => state.contacts.filter;

export const selectVisibleItems = createSelector(
  [selectItems, selectFilter],
  (contacts, filter) => {
    if (filter !== '') {
      return contacts.filter(item =>
        item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    } else {
      return contacts;
    }
  }
);
