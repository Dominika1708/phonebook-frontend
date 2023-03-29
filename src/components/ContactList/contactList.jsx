import { ContactItem } from 'components/ContactItem/contactItem';
import { useSelector } from 'react-redux';
import { selectVisibleItems } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleItems)

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </ul>
  );
};
