import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import { Loading } from 'components/Loading/loading';
import { selectIsPending } from 'redux/auth/selectors';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(selectIsPending)

  useEffect(() => {
    if (!isPending) dispatch(fetchContacts());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <Loading />
      <ContactList />
    </>
  );
};

export default Phonebook;
