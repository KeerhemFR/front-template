import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DiagResult } from './DiagResult';
import { HeaderMenu } from './HeaderMenu';
import { StarterScreen } from './StarterScreen';

/**
 * Main component that display header, footer and differents pages depending the path
 *
 * @returns {React.ReactElement} display headers, footer, and pages components depending the path
 */
export const Main = () => {
  return (
    <React.Fragment>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<StarterScreen />} />
        <Route path="/diagResult" element={<DiagResult />} />
      </Routes>
    </React.Fragment>
  );
};
