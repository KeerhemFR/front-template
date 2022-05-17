import React, { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '~components/auth/Login';
import { DiagResult } from '~components/diag/DiagResult';
import { HeaderMenu } from '~components/header/HeaderMenu';
import { StarterScreen } from '~components/starterScreen/StarterScreen';
import { ProtectedRoute } from '~components/auth/ProtectedRoute';
import { TokenRoute } from '~components/auth/TokenRoute';

type AuthenticatedContext = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  string,
  React.Dispatch<React.SetStateAction<string>>
];

const AUTHENTICATED_CONTEXT = createContext<AuthenticatedContext>([
  false,
  (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  '',
  (() => {}) as React.Dispatch<React.SetStateAction<string>>,
]);

/**
 * Fonction to call the useContext easyly
 * @returns {function} function to call useContext(AUTHENTICATED_CONTEXT)
 */
export function useAuthenticate(): AuthenticatedContext {
  const ctx = useContext(AUTHENTICATED_CONTEXT);

  if (!ctx) {
    throw new Error('Context cannot be used outside boundaries');
  }

  return ctx;
}

/**
 * Main component that display header, footer and differents pages depending the path
 * @returns {React.ReactElement} display headers, footer, and pages components depending the path
 */
export const Main: React.FunctionComponent = React.memo(() => {
  Main.displayName = 'Main';

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  return (
    <React.Fragment>
      <AUTHENTICATED_CONTEXT.Provider
        value={[isAuthenticated, setIsAuthenticated, userName, setUserName]}
      >
        <HeaderMenu />
        <Routes>
          <Route element={<TokenRoute />}>
            <Route path="/" element={<StarterScreen />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/diagResult" element={<DiagResult />} />
            </Route>
          </Route>
        </Routes>
      </AUTHENTICATED_CONTEXT.Provider>
    </React.Fragment>
  );
});
