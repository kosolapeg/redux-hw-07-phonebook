import Filter from './Filter';
import { connect } from 'react-redux';
import { changeFliter } from '../../redux/contacts/slice-filter';

const mapStateToProps = state => {
  return {
    value: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: e => dispatch(changeFliter(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
