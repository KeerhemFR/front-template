import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { useAuthenticate } from '~components/Main';

/**
 * Function to send back to the login page if not authenticated with a token
 * @returns {React.ReactElement} send back to the login page if not authentixated with a token
 */
export const TokenRoute = React.memo(() => {
  const [authData, setAuthData] = useAuthenticate();

  const [searchParam] = useSearchParams();

  const hasTokenInQuery = searchParam.get('access_token');

  //Send back to the manual login patern if no token
  if (!hasTokenInQuery) {
    return <Outlet />;
  }

  const tokenPayload = hasTokenInQuery.split('.');
  const tokenData = atob(String(tokenPayload[1]));
  const { exp, name } = JSON.parse(tokenData);
  const currentTime = Math.floor(Date.now() / 1000);

  //Check if the token has not expirated
  if (exp > currentTime) {
    setAuthData({ ...authData, isAuthenticated: true, userName: name });
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
});
