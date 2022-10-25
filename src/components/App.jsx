import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './ContactList/contactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { contacts, name, number } = this.state;
  //   contacts.push({ id: nanoid(), name: { name }, number: { number } });
  //   this.setState({ contacts: contacts })
  //   this.props.onSubmit({ ...this.state });

  // };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
