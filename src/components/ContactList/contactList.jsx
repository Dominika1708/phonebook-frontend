import { ContactItem } from 'components/ContactItem/contactItem';
import { useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);

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

  return (
  <ul>
    {renderItems().map(contact => (
      <ContactItem key={contact.id} contact={contact}/>
    ))}
  </ul>
);}


