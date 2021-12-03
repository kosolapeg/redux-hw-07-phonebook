import Contacts from './Contacts';
import { connect } from 'react-redux';
import { getVisibleContacts, getIsLoading } from '../../redux/contacts/contacts-selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/contacts-operations';

const mapStateToProps = state => ({
  contactsList: getVisibleContacts(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    onDelete: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
