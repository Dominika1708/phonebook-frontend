import { ContactItem } from 'components/ContactItem/contactItem';

export const ContactList = ({ contacts, onRemove }) => {

    
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
