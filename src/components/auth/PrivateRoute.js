import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLogged } from '../../store/selectors';

const PrivateRoute = props => {
  const location = useLocation();
  const isLogged = useSelector(getIsLogged);
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};
export default PrivateRoute;
