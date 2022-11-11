import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/contactItem';

export const ContactList = ({ contacts, onRemove }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem key={contact.id} contact={contact} onRemove={onRemove} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
