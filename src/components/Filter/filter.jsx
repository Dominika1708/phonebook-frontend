import { debounce } from 'debounce';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import styles from '../app.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const searchItems = e => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={debounce(searchItems, 500)}
      ></input>
    </label>
  );
};
