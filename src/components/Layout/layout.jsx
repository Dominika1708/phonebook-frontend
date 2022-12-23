import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import styled from 'styled-components';
import styles from './layout.module.css';

const Link = styled(NavLink)`
  background-color: rgb(122, 192, 48);

  &.active {
    background-color: rgb(1, 137, 8);
  }
`;

export const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <>
      <header className={styles.container}>
        <NavLink to="login" className={styles.phonebook}>
          Phonebook {isLoggedin && `of ${user.name}`}
        </NavLink>
        <nav className={styles.navigation}>
          {isLoggedin ? (
            <Link
              to="login"
              className={styles.link}
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link to="register" className={styles.link}>
                Register
              </Link>
              <Link to="login" className={styles.link}>
                Login
              </Link>
            </>
          )}
        </nav>
      </header>
      <main className={styles.content}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
