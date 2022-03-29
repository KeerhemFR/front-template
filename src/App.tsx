import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from '~components/Main';

/**
 * App components that will be use to load the site
 *
 * @returns {React.ReactElement} Display the Main component
 */
export const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};
