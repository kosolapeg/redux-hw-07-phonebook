import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.loading;

// export const getVisibleContacts = state => {
//   const filter = getFilter(state);
//   const allContacts = getAllContacts(state);
//   const normalizedFilter = filter.toLocaleLowerCase();
//   return allContacts.filter(({ name }) => name.toLocaleLowerCase().includes(normalizedFilter));
// };

export const getVisibleContacts = createSelector([getFilter, getAllContacts], (filter, allContacts) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter(({ name }) => name.toLocaleLowerCase().includes(normalizedFilter));
});
