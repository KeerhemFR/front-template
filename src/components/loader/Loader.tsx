import React from 'react';

import { SLoader } from '~components/loader/SLoader';

/**
 * SVG loader while waiting the module results
 *
 * @returns {React.ReactElement} load SVG bottle shaped loader
 */
export const Loader = React.memo(() => {
  Loader.displayName = 'Loader';

  return <SLoader>Here come a SVG</SLoader>;
});
