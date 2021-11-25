import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContact } from '../../redux/phoneBook/phoneBookActions';
import { getContacts, getFilter } from '../../redux/phoneBook/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts(filter));

  // use useCallback for avoid ContactItem rerender
  const handleDelete = useCallback(
    (id) => dispatch(deleteContact(id)),
    [dispatch],
  );

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
