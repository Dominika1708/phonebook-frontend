import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import styles from '../app.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      {contact.name}: {contact.phone}
      <button
        className={styles.delete__button}
        type="button"
        onClick={() => dispatch(deleteContact(contact._id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
