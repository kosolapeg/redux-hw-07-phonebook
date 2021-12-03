import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactStart,
  fetchContactSuccess,
  fetchContactError,
  addContactStart,
  addContactSuccess,
  addContactError,
  deleteContactStart,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

import filter from './slice-filter';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (items, { payload }) => {
    const { name } = payload;
    const isExistName = items.some(contact => contact.name === name);

    if (isExistName) {
      alert(`${name} is already in contacts`);
      return;
    }
    return [...items, payload];
  },

  [deleteContactSuccess]: (items, { payload }) => items.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContactStart]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactStart]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactStart]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});

// const filter = createReducer('', {
//   [changeFliter]: (_, { payload }) => payload,
// });
