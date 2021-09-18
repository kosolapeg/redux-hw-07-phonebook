import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { changeFliter } from '../../redux/contacts/contacts-actions';

const useStyles = createUseStyles({
  filter: {
    display: 'flex',
    width: 300,
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 15,
  },
});

const Filter = ({ value, onChangeFilter }) => {
  const classes = useStyles();
  return (
    <>
      <label className={classes.filter}>
        <b>Search by name:</b>
        <input type="text" value={value} onChange={onChangeFilter} />
      </label>
    </>
  );
};

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
