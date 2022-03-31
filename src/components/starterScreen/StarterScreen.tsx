import React from 'react';
import { Link } from 'react-router-dom';
import BgPicture from '~assets/images/visuel-hp-soin-desktop.png';
import { SStarterScreen } from '~components/starterScreen/SStarterScreen';

/**
 * Screen displayed at the start of the experience
 * @return {React.ReactElement} Screen with a button to start the experience
 */
export const StarterScreen = React.memo(() => {
  return (
    <SStarterScreen>
      <img src={BgPicture} />
      <div>
        <h1>FIND THE PERFECT SKINCARE RITUAL</h1>
        <Link to="/diagResult">
          <button className=".btn primaryButton">Start</button>
        </Link>
      </div>
    </SStarterScreen>
  );
});
