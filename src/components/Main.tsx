import React, { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DiagResult } from '~components/diag/DiagResult';
import { HeaderMenu } from '~components/header/HeaderMenu';
import { StarterScreen } from '~components/starterScreen/StarterScreen';

type AuthenticatedContext = [
  { isAuthenticated: boolean; userName: string },
  React.Dispatch<
    React.SetStateAction<{ isAuthenticated: boolean; userName: string }>
  >
];

const AUTHENTICATED_CONTEXT = createContext<AuthenticatedContext>([
  { isAuthenticated: false, userName: '' },
  (() => {}) as React.Dispatch<
    React.SetStateAction<{ isAuthenticated: boolean; userName: string }>
  >,
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

  return (
    <React.Fragment>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<StarterScreen />} />
        <Route path="/diagResult" element={<DiagResult />} />
      </Routes>
    </React.Fragment>
  );
});
