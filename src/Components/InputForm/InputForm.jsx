import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toastr from 'toastr';
import shortid from 'shortid';
import { getIsContactExists } from '../../redux/phoneBook/selectors';
import * as actions from '../../redux/phoneBook/phoneBookActions';
import styles from './InputForm.module.css';

const InputForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isExists = useSelector(getIsContactExists(name));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isExists) {
      toastr.warning(`Contact ${name} is already exists`);
      return;
    }

    dispatch(
      actions.contactAdd({
        id: shortid.generate(),
        name,
        number,
      }),
    );
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.phonebookEditor} onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={styles.phonebookEditorButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default InputForm;
