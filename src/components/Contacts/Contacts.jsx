import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';

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

const Contacts = ({ contactsList, onDelete }) => {
  const classes = useStyles();

  return (
    <ul className={classes.contactsList}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className={classes.contactItem}>
          {name}: {number}
          <button
            type="button"
            className={classes.button}
            onClick={() => onDelete(id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contactsList: getVisibleContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
