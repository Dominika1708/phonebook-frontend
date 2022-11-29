import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';

import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';

export const App = () => {
  const contacts = useSelector(getItems);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
