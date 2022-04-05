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
export const ButtonPanel: React.FunctionComponent<ButtonPanelProps> =
  React.memo(({ currentStep, enableStart, resultsOk, updateStep }) => {
    ButtonPanel.displayName = 'ButtonPanel';

    if (currentStep === 0) {
      return (
        <SButtonPanel>
          <button
            className="primaryButton"
            disabled={currentStep === 0 && !enableStart}
            onClick={() => updateStep(currentStep + 1, currentStep)}
          >
            Start
          </button>
        </SButtonPanel>
      );
    }

    if (currentStep === 1) {
      return (
        <SButtonPanel>
          <React.Fragment>
            <button
              className="secondaryButton"
              onClick={() => updateStep(currentStep - 1, currentStep)}
            >
              Previous
            </button>
            <a href="#productFocus">
              <button
                className="primaryButton"
                disabled={(currentStep === 1 && !resultsOk) || currentStep > 1}
                onClick={() => updateStep(currentStep + 1, currentStep)}
              >
                Next
              </button>
            </a>
          </React.Fragment>
        </SButtonPanel>
      );
    }

    return (
      <SButtonPanel>
        <React.Fragment>
          <button
            className="secondaryButton"
            onClick={() => updateStep(currentStep - 1, currentStep)}
          >
            Previous
          </button>
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
        </React.Fragment>
      </SButtonPanel>
    );
  });
