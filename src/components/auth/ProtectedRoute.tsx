import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthenticate } from '~components/Main';

export const ProtectedRoute: React.FunctionComponent = React.memo(() => {
  const [isAuthenticated] = useAuthenticate();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
});
