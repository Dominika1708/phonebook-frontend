import Form from 'react-bootstrap/Form';
import styles from '../../components/app.module.css';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    
    dispatch(login({
      email: form.elements.formBasicEmail.value,
      password: form.elements.formBasicPassword.value,
    }));

    form.reset();
  }  
  
  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.label}>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="username"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.label}>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
        />
      </Form.Group>

      <button className={styles.button} type="submit">
        Login
      </button>
    </Form>
  );};

export default Login;
