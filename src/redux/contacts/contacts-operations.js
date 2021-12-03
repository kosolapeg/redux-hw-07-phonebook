import axios from 'axios';
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

axios.defaults.baseURL = 'https://619bd9d168ebaa001753c644.mockapi.io/';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactStart());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    dispatch(addContactStart());

    axios
      .post('/contacts', { name, number })
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

export const deleteContact = id => dispatch => {
  dispatch(deleteContactStart());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
