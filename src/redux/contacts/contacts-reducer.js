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
  changeFliter,
} from './contacts-actions';

const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (items, { payload }) => {
    const { name } = payload;
    console.log('Payload:', payload);
    const isExistName = items.some(contact => contact.name === name);

    if (isExistName) {
      alert(`${name} is already in contacts`);
      return;
    }

    return [payload, ...items];
  },

  [deleteContactSuccess]: (items, { payload }) => items.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [changeFliter]: (_, { payload }) => payload,
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
  items: contactsReducer,
  filter: filterReducer,
  loading,
});
