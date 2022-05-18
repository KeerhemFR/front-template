import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthenticate } from '~components/Main';

/**
 * Function to send back to the login page if not authenticated
 * @returns {React.ReactElement} send back to the login page if not authenticated
 */
export const ProtectedRoute: React.FunctionComponent = React.memo(() => {
  const [authData] = useAuthenticate();

  if (!authData.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
});
