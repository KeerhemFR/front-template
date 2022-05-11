import React, { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '~components/auth/Login';
import { DiagResult } from '~components/diag/DiagResult';
import { HeaderMenu } from '~components/header/HeaderMenu';
import { StarterScreen } from '~components/starterScreen/StarterScreen';
import { ProtectedRoute } from '~components/auth/ProtectedRoute';

type AuthenticatedContext = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

const AUTHENTICATED_CONTEXT = createContext<AuthenticatedContext>([
  false,
  (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
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
export const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <React.Fragment>
      <AUTHENTICATED_CONTEXT.Provider
        value={[isAuthenticated, setIsAuthenticated]}
      >
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<StarterScreen />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/diagResult" element={<DiagResult />} />
          </Route>
        </Routes>
      </AUTHENTICATED_CONTEXT.Provider>
    </React.Fragment>
  );
};
