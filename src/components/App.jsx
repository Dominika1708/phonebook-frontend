import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { logout } from 'redux/auth/operations';
import { clearContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';
import { Layout } from './Layout/layout';
import { PrivateRoute } from './Routes/privateRoute';
import { RestrictedRoute } from './Routes/restrictedRoute';
import { VerifiedRoute, VerifyRoute } from './Routes/verifyRoute';

const Phonebook = lazy(() => import('pages/Phonebook/phonebook'));
const Login = lazy(() => import('pages/Login/login'));
const Home = lazy(() => import('pages/Home/home'));
const Register = lazy(() => import('pages/Register/register'));
const Verify = lazy(() => import('pages/Verify/verify'));
const NotFound = lazy(() => import('pages/NotFound/notFound'));

export const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error === 401) {
      dispatch(clearContacts());
      dispatch(logout());
      alert("Login timeout")
    }
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <VerifyRoute redirectTo="/verify" component={<Register />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
            }
          />
          <Route
            path="verify"
            element={
              <VerifiedRoute redirectTo="/login" component={<Verify />} />
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
