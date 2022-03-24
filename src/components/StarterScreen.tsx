import React from 'react';
import BgPicture from '/images/visuel-hp-soin-desktop.png';
import SStarterScreen from './SStarterScreen';

interface StarterScreenProps {
  start: (displayStart: boolean) => void;
}

export const StarterScreen = React.memo(({ start }: StarterScreenProps) => {
  return (
    <SStarterScreen>
      <img src={BgPicture} />
      <div>
        <h1>FIND THE PERFECT SKINCARE RITUAL</h1>
        <button className="primaryButton" onClick={() => start(false)}>
          Start
        </button>
      </div>
    </SStarterScreen>
  );
});
