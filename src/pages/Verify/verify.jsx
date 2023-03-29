import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../../components/app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { verify } from 'redux/auth/operations';

const Verify = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const verificationCode = form.elements.formBasicName.value;

    dispatch(verify(verificationCode));
    form.reset();
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Verify email</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter code"
          autoComplete="0000000"
          required
        />
        <Form.Text className="text-muted">
          We sent a 7 digit verification code to {user.email}
        </Form.Text>
      </Form.Group>

      <Button variant="outline-success" type="submit">
        Verify
      </Button>
    </Form>
  );
};

export default Verify;
