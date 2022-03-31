import React, { useState } from 'react';

import { SInstructions } from '~components/diag/instructions/SInstructions';

import instructionsContent from '~content/instructions.json';

interface InstructionsProps {
  currentStep: number;
  setEnableStart: (arg0: boolean) => void;
  resultsOk: boolean;
  children: React.ReactNode;
}

/**
 * Components that display the instruction to take the selfie
 *
 * @prop {number} currentStep actuel step of the experience
 * @prop {function} setEnableStart change the value of enableStart to true or false
 * @prop {boolean} resultsOk check if we have the results from the selfie module
 * @prop {React.ReactNode} children elements called between Instructions brackets
 * @returns {React.ReactElement} display instructions, and an picture or the module as a children
 */
export const Instructions = ({
  currentStep,
  setEnableStart,
  resultsOk,
  children,
}: InstructionsProps) => {
  const [optInData, setOptInData] = useState<boolean>(false);

  /**
   * Change the value of optInData and enableStart depending if the box is checked or not
   *
   * @param e targetted event on click of the box
   */
  const toggleCheckbox = (e: any) => {
    setOptInData(e.target.checked);
    setEnableStart(e.target.checked);
  };

  return (
    <SInstructions>
      <div className={resultsOk ? 'dnone' : 'instructions'}>
        <div className="writtenInstructions">
          <h3>{instructionsContent.title}</h3>
          <p>{instructionsContent.text}</p>
          <ul>
            {instructionsContent.rules.map(
              (rule: { icon: string; text: string }, index: number) => {
                return (
                  <li key={`icon${index}`}>
                    <img src={`src/assets/images/${rule.icon}`} />
                    {rule.text}
                  </li>
                );
              }
            )}
          </ul>
          <section className="optIn">
            <div className="optInLine">
              <div>
                <input
                  type="checkbox"
                  id="optInData"
                  name="optInData"
                  value={optInData.toString()}
                  onClick={toggleCheckbox}
                  disabled={currentStep === 1}
                />
              </div>
              <div>
                <label htmlFor="optInData">
                  {' '}
                  J’autorise Guerlain à collecter et stocker mes données
                  personnelles et mes données personnelles sensibles (par
                  exemple, des photos de ma peau) afin de mener à bien la
                  consultation beauté
                </label>
              </div>
            </div>
            <div className="optInLine">
              <div>
                <input
                  type="checkbox"
                  id="optInAccount"
                  name="optInAccount"
                  disabled={currentStep === 1}
                />
              </div>
              <div>
                <label htmlFor="optInAccount">
                  {' '}
                  Je souhaite que le résultat de la consultation beauté soit
                  rattaché à mon compte client.
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
      {children}
    </SInstructions>
  );
};
