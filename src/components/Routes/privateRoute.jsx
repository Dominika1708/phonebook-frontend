import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return isLoggedin ? Component : <Navigate to={redirectTo} />;
};
