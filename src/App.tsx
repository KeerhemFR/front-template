import React from 'react';
import { Main } from './components/Main';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};
