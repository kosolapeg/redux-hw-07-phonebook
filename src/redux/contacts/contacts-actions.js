import { createAction } from '@reduxjs/toolkit';

export const fetchContactStart = createAction('contacts/fetchContactStart');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactStart = createAction('contacts/addContactStart');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactStart = createAction('contacts/deleteContactStart');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFliter = createAction('contacts/changeFliter');
