import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import styles from '../app.module.css';

export const Loading = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={styles.loading}>
      {isLoading && !error && <b>Loading...</b>}
      {error && !isLoading && <b>{error}</b>}
    </div>
  );
};
