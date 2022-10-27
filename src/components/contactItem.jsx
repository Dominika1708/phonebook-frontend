import PropTypes from "prop-types";
import styles from './app.module.css';

export const ContactItem = ({ contact, onRemove }) => (
  <li>
        {contact.name}: {contact.number}
        <button className={styles.delete__button} type="button" onClick={() => onRemove(contact.id)}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
};