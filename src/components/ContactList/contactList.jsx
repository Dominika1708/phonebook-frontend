import { ContactItem } from 'components/ContactItem/contactItem';
import { useSelector } from 'react-redux';
import { selectVisibleItems } from 'redux/contacts/selectors';
import styles from '../app.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleItems)

  return (
    <ul className={styles.contacts}>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </ul>
  );
};
