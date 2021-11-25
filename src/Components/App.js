import React from 'react';
import ContactList from './ContactList/ContactList';
import InputForm from './InputForm/InputForm';
import Filter from './Filter/Filter';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <h1>Phonebook</h1>

    <InputForm />
    <Filter />
    <ContactList />
  </div>
);

export default App;
