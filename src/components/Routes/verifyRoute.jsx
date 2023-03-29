import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsVerified } from 'redux/auth/selectors';

export const VerifiedRoute = ({ component: Component, redirectTo }) => {
  const isVerified = useSelector(selectIsVerified);
  return isVerified ? <Navigate to={redirectTo} /> : Component;
};

export const VerifyRoute = ({ component: Component, redirectTo }) => {
  const isVerified = useSelector(selectIsVerified);
  return isVerified ? Component : <Navigate to={redirectTo} />;
};