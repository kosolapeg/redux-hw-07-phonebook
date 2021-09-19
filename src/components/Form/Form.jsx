import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import css from './Form.module.css';

const Form = ({ onSave, addContact }) => {
  const [state, setState] = useState({ name: '', number: '' });
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave();
    addContact(name, number);
  };

  const { name, number } = state;
  return (
    <form action="" onSubmit={handleSubmit} className={css.form}>
      <h2>Add contact:</h2>
      <label className={css.label}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={css.label}>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { onSave } = ownProps;
  return { onSave };
};

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) => dispatch(addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
