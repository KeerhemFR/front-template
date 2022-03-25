import React from 'react';
import BgPicture from '/images/visuel-hp-soin-desktop.png';
import SStarterScreen from './SStarterScreen';

/**
 * Screen displayed at the start of the experience
 * @prop {func} start set if the start screen is displayed or not
 * @return {JSX} Screen with a button to start the experience
 */
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
