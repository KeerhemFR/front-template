import React from 'react';

import { SLoader } from '~components/loader/SLoader';

/**
 * SVG loader while waiting the module results
 *
 * @returns {React.ReactElement} load SVG bottle shaped loader
 */
export const Loader = () => {
  return (
    <SLoader>
      <div id="banner">
        <div className="fill">
          <svg
            version="1.1"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            className="animShape"
          >
            <path
              fill="#04ACFF"
              id="waveShape"
              d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
    c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
    c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
            />
          </svg>
        </div>
        <svg
          version="1.1"
          id="bottle"
          x="0px"
          y="0px"
          viewBox="0 0 140.2 330.8"
        >
          <path
            className="st0"
            d="M140.2,330.8H0V0h140.2V330.8z M75.7,57.9c0-1.7,0-3.2,0-4.7c0-0.3,0.5-0.7,0.9-0.8c2.2-0.8,4.4-1.4,6.5-2.4
      c8-3.8,12.9-9.9,13.3-18.9C97,18.1,89,6.2,76.7,1.9C72.6,0.4,68.2,0.2,64,1.1C50.9,4.2,41.6,15.8,41.5,29.3
      c-0.2,8,3.1,14.2,9.7,18.7c3,1.9,6.4,3.4,9.8,4.3c0.4,0.1,1,0.5,1.1,0.9c0.1,1.5,0,3,0,4.7h-2c-4.6,0-9.3,0-13.9,0
      c-0.5,0-1.4,0.5-1.4,0.7c-0.1,3.5-0.1,7-0.1,10.7h3.9c0.1,0.2,0.1,0.3,0.2,0.5v27.1c-0.1,0.5-0.4,1-0.8,1.2c-1.8,0.7-3.7,1.3-5.5,2
      c-15.7,6.6-26.6,18-33.6,33.4c-3.5,7.7-6,15.7-5.3,24.3c0.1,1,0,2.1,0,3.1c0.1,0.9-0.4,1.7-1.2,2c-1.2,0.6-1.7,2-1.2,3.2
      c0.2,0.4,0.5,0.8,0.9,1.1c1.3,0.7,1.5,1.6,1.5,2.8c0,47.4,0,94.8-0.1,142.2c-0.1,2.7,1.1,5.3,3.4,6.8c1.2,0.9,2.5,1.6,3.9,2.3
      c5.8,2.5,11.9,4.2,18.1,4.9c7.5,1.1,15,1.9,22.5,2.6c6,0.6,12.1,0.9,18.1,0.8c10.5-0.4,20.9-1.2,31.3-2.2c7.1-0.6,14.2-2,21-4.1
      c3.6-1.1,7.1-2.4,10-5c1.6-1.4,2.5-3.4,2.5-5.5c-0.1-47.6-0.1-95.2-0.1-142.8c-0.2-1.2,0.4-2.3,1.5-2.8c1.1-0.6,1.6-2.1,0.9-3.2
      c-0.2-0.4-0.6-0.8-1-1c-1.2-0.6-1.4-1.4-1.4-2.5c0-3.5,0.5-7.1-0.1-10.5c-2.5-14.4-9.5-27.7-20.1-37.8c-6.7-6.4-14.8-11.1-23.7-13.8
      c-1.1-0.3-1.6-0.8-1.4-1.9c0-0.5,0-1,0-1.5c0-8,0-16,0-24c0-1.3,0.4-1.8,1.7-1.6c0.8,0,1.7,0,2.5,0c0-3.5,0-6.7,0-9.9
      c0-1.3-0.5-1.5-1.6-1.5c-4.6,0-9.3,0-13.9,0L75.7,57.9z"
          />
          <path
            d="M75.7,57.9h1.9h13.9c1.2,0,1.7,0.3,1.6,1.5c-0.1,3.2,0,6.4,0,9.9c-0.8,0-1.7,0-2.5,0c-1.3-0.1-1.7,0.3-1.7,1.6
      c0.1,8,0,16,0,24c0,0.5,0,1,0,1.5c-0.2,1.1,0.4,1.6,1.4,1.9c8.8,2.7,16.9,7.4,23.7,13.8c10.6,10.1,17.7,23.4,20.1,37.8
      c0.6,3.4,0.2,7,0.1,10.5c0,1.2,0.1,1.9,1.4,2.5c1.2,0.6,1.6,2,1.1,3.2c-0.2,0.4-0.6,0.8-1,1c-1.1,0.5-1.7,1.7-1.5,2.8
      c0,47.6,0,95.2,0.1,142.8c0,2.1-0.9,4.1-2.5,5.5c-2.9,2.6-6.4,3.9-10,5c-6.8,2.1-13.9,3.5-21,4.1c-10.4,1-20.9,1.8-31.3,2.2
      c-6,0.1-12.1-0.1-18.1-0.8c-7.5-0.7-15-1.5-22.5-2.6c-6.2-0.7-12.4-2.4-18.1-4.9c-1.4-0.6-2.7-1.4-3.9-2.3c-2.3-1.5-3.5-4.1-3.4-6.8
      c0.1-47.4,0.1-94.8,0.1-142.2c0-1.3-0.2-2.1-1.5-2.8c-1.1-0.7-1.5-2.2-0.7-3.3c0.2-0.4,0.6-0.7,1-0.9c0.8-0.3,1.3-1.1,1.2-2
      c-0.1-1,0-2.1,0-3.1c-0.7-8.6,1.8-16.6,5.3-24.3c7-15.3,17.9-26.8,33.6-33.4c1.8-0.8,3.7-1.3,5.5-2c0.5-0.2,0.8-0.7,0.9-1.2
      c0-9,0-18.1,0-27.1c0-0.2-0.1-0.3-0.2-0.5h-3.9c0-3.7,0-7.2,0.1-10.7c0-0.3,0.9-0.7,1.4-0.7c4.6-0.1,9.3,0,13.9,0h2
      c0-1.7,0.1-3.2,0-4.7c0-0.3-0.6-0.8-1.1-0.9c-3.5-0.9-6.8-2.4-9.9-4.4c-6.7-4.5-9.9-10.7-9.7-18.7C41.6,15.8,50.9,4.2,64,1.1
      c4.2-1,8.6-0.7,12.7,0.8C89,6.2,97,18.1,96.4,31.1c-0.4,9-5.3,15.1-13.3,18.9c-2,1-4.3,1.5-6.4,2.3c-0.4,0.1-0.9,0.5-0.9,0.8
      C75.7,54.7,75.7,56.2,75.7,57.9L75.7,57.9z M52,66.1c0,0.6,0.1,0.8,0.1,1.1v31.9c0,1.1-0.6,1.3-1.4,1.5
      c-18.5,5.4-31.3,17.2-39.1,34.5c-2.8,6.1-5.1,12.5-4.9,19.4c0.1,2.4,0,4.8,0,7.2c0,1.4,0.2,2.8-1.8,3.6c1.8,0.7,1.8,1.8,1.8,3
      c0,47.7,0,95.3-0.1,143c-0.2,2.7,1.3,5.3,3.8,6.4c0.9,0.6,2,1,3,1.4c5.3,1.4,10.6,3.1,16,4c7.4,1.2,14.9,2,22.3,2.6
      c6.4,0.5,12.8,0.8,19.1,0.7c7-0.1,14-0.7,21-1.2c8.9-0.6,17.8-2,26.5-4.2c3.7-0.8,7.2-2.2,10.4-4.2c1.6-1,2.5-2.8,2.4-4.6
      c-0.1-47.9-0.1-95.7-0.1-143.5c0-1.4,0-2.6,1.6-3.4c-1.5-0.8-1.6-2-1.6-3.3c0.1-3.4,0-6.7,0-10.1c0-0.5,0-1.1-0.1-1.6
      c-5.5-24.6-19.2-42-43.8-49.5c-0.9-0.1-1.5-0.9-1.4-1.8c0,0,0,0,0-0.1c0-10.3,0-20.7,0-31c0-0.5,0-0.9,0.1-1.6c1,0.1,2,0.1,3,0
      c0.4-0.1,1-0.5,1-0.8c0.1-1.3,0-2.7,0-4.3H88c-4.3,0-8.6,0-12.9,0c-3.1,0-2.6,0.3-2.6-2.7c0-2.8,0-5.6,0-8.1
      c3.1-0.9,6.1-1.9,9.1-3.1c6.2-2.8,10.6-7.4,11.4-14.5C94.6,20.6,87.4,9.1,75.8,5c-3.5-1.4-7.4-1.6-11.1-0.8
      C52.7,7,44.3,17.9,44.6,30.3c-0.1,5.1,2.1,10,6,13.3c3.7,3.2,8.3,5.2,13.1,6c1.1,0.2,1.7,0.5,1.6,1.8c-0.1,2.6-0.1,5.3,0,7.9
      c0,1.3-0.3,1.8-1.7,1.8C59,61,54.4,61,49.7,61c-0.6,0-1.1,0-1.7,0.1v5L52,66.1z"
          />
          <path
            className="st0"
            d="M52,66.1h-4v-5c0.6,0,1.2-0.1,1.7-0.1c4.6,0,9.3-0.1,13.9,0c1.4,0,1.8-0.4,1.7-1.8c-0.1-2.6-0.1-5.3,0-7.9
      c0.1-1.3-0.5-1.6-1.6-1.8c-4.8-0.8-9.4-2.8-13.1-6c-3.9-3.3-6.1-8.2-6-13.3C44.3,17.9,52.7,7,64.8,4.2c3.7-0.8,7.5-0.6,11.1,0.8
      c11.5,4.1,18.7,15.6,17.2,27.7c-0.8,7.1-5.2,11.6-11.4,14.5c-3,1.2-6,2.2-9.1,3.1v8.1c0,3-0.5,2.7,2.6,2.7h12.9h1.9
      c0,1.6,0.1,2.9,0,4.3c0,0.3-0.6,0.8-1,0.8c-1,0.1-2,0.1-3,0c0,0.6-0.1,1.1-0.1,1.6v31.1c-0.1,0.9,0.5,1.7,1.4,1.9c0,0,0,0,0.1,0
      c24.7,7.6,38.3,25,43.8,49.5c0.1,0.5,0.1,1.1,0.1,1.6v10.1c0,1.3,0,2.5,1.6,3.3c-1.5,0.8-1.6,2.1-1.6,3.4c0,47.8,0,95.7,0.1,143.5
      c0.1,1.9-0.8,3.6-2.4,4.6c-3.2,2-6.7,3.4-10.4,4.2c-8.7,2.2-17.6,3.6-26.5,4.2c-7,0.5-14,1.1-21,1.2c-6.4,0.1-12.8-0.2-19.1-0.7
      c-7.5-0.6-14.9-1.4-22.3-2.6c-5.4-0.9-10.7-2.6-16-4c-1-0.4-2.1-0.8-3-1.4c-2.5-1.1-4-3.7-3.8-6.4c0.1-47.6,0.1-95.3,0.1-142.9
      c0-1.2,0-2.4-1.8-3c2-0.8,1.8-2.2,1.8-3.6c0-2.4,0-4.8,0-7.2c-0.2-6.9,2.2-13.2,4.9-19.4c7.7-17.4,20.5-29.2,39-34.5
      c0.8-0.2,1.4-0.4,1.4-1.5c0-10.6,0-21.3,0-31.9C52,66.9,52,66.6,52,66.1L52,66.1z M104.8,252.4c0-10.5,0-21,0-31.5
      c0.1-0.9-0.3-1.8-1-2.4c-2.5-2.1-4.8-4.3-7.4-6.1c-10-7-21.1-10.3-33.3-8.6c-11.6,1.6-21.2,7-29.4,15.3c-0.4,0.6-0.6,1.3-0.5,2
      c0,20.7,0,41.4,0,62.1c0,4.3,2.4,6.7,6.7,6.7H98c4.3,0,6.7-2.4,6.7-6.7C104.7,272.9,104.7,262.6,104.8,252.4L104.8,252.4z"
          />
        </svg>
      </div>

      <svg version="1.1" id="etiq" x="0px" y="0px" viewBox="0 0 81 99">
        <path
          className="st1"
          d="M76.8,54.5c0-10.5,0-21,0-31.5c0.1-0.9-0.3-1.8-1-2.4c-2.5-2.1-4.8-4.3-7.4-6.1c-10-7-21.1-10.3-33.3-8.6
      c-11.6,1.6-21.2,7-29.4,15.3c-0.4,0.6-0.6,1.3-0.5,2c0,20.7,0,41.4,0,62.1c0,4.3,2.4,6.7,6.7,6.7H70c4.3,0,6.7-2.4,6.7-6.7
      C76.7,75,76.7,64.8,76.8,54.5L76.8,54.5z"
        />
        <path
          d="M76.7,54.5c0,10.3,0,20.5,0,30.8c0,4.3-2.4,6.7-6.7,6.7H11.8c-4.3,0-6.7-2.5-6.7-6.7c0-20.7,0-41.4,0-62.1
      c-0.1-0.7,0.1-1.4,0.5-2C13.8,12.8,23.5,7.4,35,5.8c12.2-1.6,23.3,1.6,33.3,8.6c2.6,1.8,5,4.1,7.4,6.1c0.7,0.6,1.1,1.5,1,2.4
      C76.7,33.5,76.7,44,76.7,54.5z M73.6,54.9c0-10.2,0-20.4,0-30.6c0.1-0.9-0.3-1.8-1-2.4c-2.7-2-5.2-4.3-8-6.1
      C55.7,10,45.9,7.5,35.3,9C25.1,10.4,16.4,15.1,9,22.2c-0.5,0.6-0.8,1.4-0.7,2.2c0,20.3,0,40.5,0,60.8c0,2.5,1.1,3.5,3.6,3.5
      c19.4,0,38.8,0,58.2,0c2.5,0,3.6-1.1,3.6-3.6L73.6,54.9z"
        />
        <path
          className="st1"
          d="M73.6,54.9v30.3c0,2.5-1.1,3.6-3.6,3.6c-19.4,0-38.8,0-58.2,0c-2.5,0-3.6-1.1-3.6-3.5c0-20.2,0-40.5,0-60.8
      c0-0.8,0.2-1.6,0.7-2.2C16.4,15.2,25,10.4,35.3,9c10.6-1.5,20.3,1.1,29.2,6.8c2.8,1.8,5.3,4.1,8,6.1c0.7,0.6,1.1,1.5,1,2.4
      C73.6,34.5,73.6,44.7,73.6,54.9z"
        />
      </svg>
    </SLoader>
  );
};
