import styles from '../app.module.css';

export const ContactItem = ({ contact, onRemove }) => (
  <li>
        {contact.name}: {contact.number}
        <button className={styles.delete__button} type="button" onClick={() => onRemove(contact.id)}>Delete</button>
  </li>
);
