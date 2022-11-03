import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './contactForm';
import { ContactList } from './contactList';
import { Filter } from './filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(prevStats) {
    if (this.state.contacts !== prevStats.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = values => {
    const { name, number } = values;
    if (this.state.contacts.every(contact => contact.name !== name)) {
      const newContact = { id: nanoid(), name, number };
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleRemove = id => {
    const newList = this.state.contacts.filter(item => item.id !== id);
    this.setState({ contacts: newList });
  };

  searchItems = value => {
    this.setState({ filter: value });
  };

  renderItems = () => {
    const filteredData = [];
    this.state.contacts.forEach(item => {
      if (
        item.name
          .toLocaleLowerCase()
          .includes(this.state.filter.toLocaleLowerCase())
      ) {
        filteredData.push(item);
      }
    });
    if (filteredData.length > 0) {
      return filteredData;
    } else {
      return this.state.contacts;
    }
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.searchItems} />
        <ContactList
          contacts={this.renderItems()}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}
