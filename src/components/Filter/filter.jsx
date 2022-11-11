import styles from '../app.module.css';


export const Filter = (props) => {

  const searchItems = e => {
    e.preventDefault();
    props.onChange(e.target.value);
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={searchItems}
      ></input>
    </label>
  );
};
