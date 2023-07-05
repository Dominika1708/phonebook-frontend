import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import { Loading } from 'components/Loading/loading';
import { selectIsPending } from 'redux/auth/selectors';
import styles from '../../components/app.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(selectIsPending);

  useEffect(() => {
    if (!isPending) dispatch(fetchContacts());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <div className={styles.phonebook__container}>
        <ContactForm />

        <div className={styles.contacts__container}>
          <Filter />
          <Loading />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
