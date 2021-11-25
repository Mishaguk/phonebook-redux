import React from 'react';
import styles from './ContactItem.module.css';

// use React.memo for avoid ContactItem rerender
const ContactItem = React.memo(
  ({ id, name, number, onDelete }) =>
    console.log('render', id) ||
    (name && (
      <li className={styles.contactItem}>
        <span className={styles.text}>
          {name} {number}
        </span>

        <button
          type="button"
          className={styles.button}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    )),
);

export default ContactItem;
