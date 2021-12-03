import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

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

const Contacts = ({ contactsList, isLoading, onDelete, fetchContacts }) => {
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchContacts(), []);

  return (
    console.log('Di nuovo!') || (
      <>
        {isLoading && <h3>loading...</h3>}

        <ul className={classes.contactsList}>
          {contactsList
            .slice(0)
            .reverse()
            .map(({ id, name, number }) => (
              <li key={id} className={classes.contactItem}>
                {name}: <br /> {number}
                <button type="button" className={classes.button} onClick={() => onDelete(id)}>
                  x
                </button>
              </li>
            ))}
        </ul>
      </>
    )
  );
};

export default Contacts;
