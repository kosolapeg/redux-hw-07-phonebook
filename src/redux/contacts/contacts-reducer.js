import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFliter } from './contacts-actions';

const storedContacts = localStorage.getItem('persist:contacts');

const initialContacts = storedContacts
  ? JSON.parse(storedContacts)
  : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

const contactsReducer = createReducer(initialContacts, {
  [addContact]: (items, { payload }) => {
    const { name } = payload;

    const isExistName = items.some(contact => contact.name === name);

    if (isExistName) {
      alert(`${name} is already in contacts`);
      return;
    }

    return [payload, ...items];
  },

  [deleteContact]: (items, { payload }) =>
    items.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [changeFliter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
