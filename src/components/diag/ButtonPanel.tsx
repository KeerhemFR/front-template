import React from 'react';

import { SButtonPanel } from '~components/diag/SButtonPanel';

interface ButtonPanelProps {
  currentStep: number;
  enableStart: boolean;
  resultsOk: boolean;
  updateStep: (step: number, previousStep: number) => void;
}

/**
 * Handle the buttons to proceed through the different steps
 *
 * @prop {number} currentStep actual step of the experience
 * @prop {boolean} enableStart settle if yes or no the start button is clickable
 * @prop {boolean} resultsOk check if we have results from the selfie module
 * @prop {function} updateStep handle the change of step when button are clicked
 * @returns {React.ReactElement} One or two buttons, depending the steps, to proceed through the experience
 */
export const ButtonPanel = ({
  currentStep,
  enableStart,
  resultsOk,
  updateStep,
}: ButtonPanelProps) => {
  return (
    <SButtonPanel>
      {currentStep === 0 ? (
        <button
          className="primaryButton"
          disabled={currentStep === 0 && !enableStart}
          onClick={() => updateStep(currentStep + 1, currentStep)}
        >
          Start
        </button>
      ) : (
        <React.Fragment>
          <button
            className="secondaryButton"
            onClick={() => updateStep(currentStep - 1, currentStep)}
          >
            Previous
          </button>
          {currentStep === 1 ? (
            <a href="#productFocus">
              <button
                className="primaryButton"
                disabled={(currentStep === 1 && !resultsOk) || currentStep > 1}
                onClick={() => updateStep(currentStep + 1, currentStep)}
              >
                Next
              </button>
            </a>
          ) : (
            <button
              className="primaryButton"
              disabled={
                currentStep === 2 ||
                (currentStep === 1 && !resultsOk) ||
                (currentStep === 0 && !enableStart)
              }
              onClick={() => updateStep(currentStep + 1, currentStep)}
            >
              {currentStep === 2 ? 'Start again' : 'Next'}
            </button>
          )}
        </React.Fragment>
      )}
    </SButtonPanel>
  );
};
