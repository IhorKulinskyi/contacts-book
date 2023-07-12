import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import Spinner from 'components/Spinner';
import Wrapper from 'components/Wrapper';

const Contacts = lazy(() => import('../pages/Contacts'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <Wrapper>
      <Spinner />
    </Wrapper>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/login"
          element={<RestrictedRoute component={LogIn} redirectTo="/" />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={Register} redirectTo="/" />}
        />
        <Route
          index
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
