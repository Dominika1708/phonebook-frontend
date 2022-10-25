import { ContactItem } from 'components/ContactItem/contactItem';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
      />
    ))}
  </ul>
);
