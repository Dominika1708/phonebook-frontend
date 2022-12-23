import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/layout';
import { PrivateRoute } from './Routes/privateRoute';
import { RestrictedRoute } from './Routes/restrictedRoute';

const Phonebook = lazy(() => import('pages/Phonebook/phonebook'));
const Login = lazy(() => import('pages/Login/login'));
const Home = lazy(() => import('pages/Home/home'));
const Register = lazy(() => import('pages/Register/register'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
