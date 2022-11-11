import { useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  const addContact = values => {
    const { name, number } = values;
    if (contacts.every(contact => contact.name !== name)) {
      const newContact = { id: nanoid(), name, number };
      setContacts([newContact, ...contacts]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const handleRemove = id => {
    const newList = contacts.filter(item => item.id !== id);
    setContacts(newList);
  };

  const searchItems = value => {
    setFilter(value);
  };

  const renderItems = () => {
    const filteredData = [];
    contacts.forEach(item => {
      if (item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
        filteredData.push(item);
      }
    });
    if (filteredData.length > 0) {
      return filteredData;
    } else {
      return contacts;
    }
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter onChange={searchItems} />
      <ContactList contacts={renderItems()} onRemove={handleRemove} />
    </div>
  );
};
