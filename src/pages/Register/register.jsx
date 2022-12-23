import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../../components/app.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.formBasicName.value,
        email: form.elements.formBasicEmail.value,
        password: form.elements.formBasicPassword.value,
      })
    );
    form.reset();
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          autoComplete="new-name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="new-username"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          required
        />
      </Form.Group>

      <Button variant="outline-success" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
