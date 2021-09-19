import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/contacts-operations';

const useStyles = createUseStyles({
  contactsList: { width: 500 },

  contactItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 240,
    marginBottom: 8,
  },

  button: {
    marginLeft: 20,
    border: '1px solid black',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
});

const Contacts = ({ contactsList, onDelete, fetchContacts }) => {
  const classes = useStyles();
  useEffect(() => fetchContacts(), []);

  return (
    <ul className={classes.contactsList}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className={classes.contactItem}>
          {name}: {number}
          <button type="button" className={classes.button} onClick={() => onDelete(id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter(({ name }) => name.toLocaleLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contactsList: getVisibleContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    onDelete: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
