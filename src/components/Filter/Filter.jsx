import { createUseStyles } from 'react-jss';

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

export default Filter;
