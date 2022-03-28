import React, { useEffect, useState, useCallback } from 'react';

const data: {
  subject: string;
  A: number;
}[] = [
  {
    subject: 'Skin imperfections',
    A: 0,
  },
  {
    subject: `Wrinkles & fine lines`,
    A: 0,
  },
  {
    subject: 'Lack of firmness',
    A: 0,
  },
  {
    subject: 'Pores',
    A: 0,
  },
  {
    subject: 'Dehydrated skin',
    A: 0,
  },
  {
    subject: 'Radiance',
    A: 0,
  },
];

const defaultSuggestions: {
  priority: string;
  essential: string;
  productPic: string;
  productLine: string;
  product: string;
  price: string;
  essentialRoutine: string;
  completeRoutine: string;
} = {
  priority:
    'Please take a selfie on the previous page to know your skin care priority.',
  essential:
    'Please take a selfie on the previous page to know what product you will need.',
  productPic: '',
  productLine: '',
  product: '',
  price: '',
  essentialRoutine: '',
  completeRoutine: '',
};

/**
 * Pass the necessary data to all the components and display the necessary components depending the steps
 *
 * @prop {func} start set if the start screen is displayed or not
 * @return {JSX} display different components depending the step we're on
 */
export const DiagResult = React.memo(() => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [resultsOk, setResultsOk] = useState<boolean>(false);
  const [skinDiagResults, setSkinDiagResults] = useState<object>(data);
  const [moduleLoading, setModuleLoading] = useState<boolean>(false);
  const [listeners, setListeners] = useState<any>([]);

  /**
   * Update the step we're on when setCurrentStep is used
   * @param {number} step value of currentStep with +1 or -1
   * @param {number} prevStep value of currentStep
   * @function setCurrentStep update the value of currentStep
   */
  const updateStep = useCallback(
    (step, prevStep) => {
      if (prevStep > step) {
        setResultsOk(false);
        step === 1 ? setCurrentStep(0) : setCurrentStep(step);
        setCurrentStep(step);
      }
    },
    [setCurrentStep]
  );

  //Basic setup of YMK module
  const initYMK = (d: any, k: any) => {
    const s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://plugins-media.makeupar.com/c1021286/sdk.js?apiKey=' + k;
    const x = d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  };

  /**
   * Register the needed elements into an array
   *
   * @const l event fired when a given photo loaded
   * @const l1 event fired when skin analysis is processing
   * @const l2 event fired when the YMK module is hided
   * @const l3 event fired when skin-analysis report updated
   * @function setModuleLoading change the value of moduleLoading to true or false
   * @function closeYMKModule remove an event when module is closing
   * @function setResultsOk change the value of resultsOk to true or false
   * @function updateSkinDiagResults update the value of skinDiagResults when the selfie send the score report
   */
  const registerEvents = () => {
    const l = window.YMK.addEventListener('loaded', function () {
      setModuleLoading(false);
    });
    const l1 = window.YMK.addEventListener(
      'skinAnalysisProgressUpdated',
      function () {
        setModuleLoading(true);
      }
    );
    const l2 = window.YMK.addEventListener('closed', function () {
      closeYMKModule();
    });
    const l3 = window.YMK.addEventListener(
      'skinAnalysisUpdated',
      function (report: any) {
        setModuleLoading(false);
        setResultsOk(true);
        updateSkinDiagResults(report);
      }
    );
    setListeners([l, l1, l2, l3]);
  };

  /**
   * Remove an event from the event list
   */
  const closeYMKModule = () => {
    window.YMK.close();
    for (const l in listeners) {
      window.YMK.removeEventListener(l);
    }
  };

  /**
   * Update the value of skinDiagResult with the YMK module results
   *
   * @param {object} r results of the YMK module
   * @const {object} newResults store subjects and its score to be load as skinDiagResult value
   * @function setSkinDiagResults updated the value of skinDiagResults with the YMK module scores
   */
  const updateSkinDiagResults = (r: any) => {
    const newResults: {
      subject: string;
      A: number;
    }[] = [];
    newResults.push({
      subject: 'Skin imperfections',
      A: r.texture,
    });
    newResults.push({
      subject: `Wrinkles & fine lines`,
      A: r.wrinkles,
    });
    newResults.push({
      subject: 'Lack of Firmness',
      A: r.firmness,
    });
    newResults.push({
      subject: 'Pores',
      A: r.pore,
    });
    newResults.push({
      subject: 'Dehydrated skin',
      A: r.moisture,
    });
    newResults.push({
      subject: 'Radiance',
      A: r.radiance,
    });
    setSkinDiagResults(newResults);
  };

  //YMK module initialization key
  useEffect(() => {
    initYMK(document, 'XXVC04vbl8fbfJXObuXm6w');
  }, []);

  //Open skin analyzis module at step 1
  useEffect(() => {
    if (window.YMK && currentStep === 1) {
      registerEvents();
      window.YMK.init();
      window.YMK.openSkincare();
    }
  }, [window.YMK, currentStep]);

  return (
    <div>
      <div id="YMK-module"></div>;
    </div>
  );
});
