import React, { useState, useEffect } from 'react';

import { RoutineLine } from '~components/diag/suggestions/RoutineLine';
import { Product } from '~components/diag/suggestions/Product';

import { SProductSuggestions } from '~components/diag/suggestions/SProductSuggestions';

import productSuggestions from '~content/skincareRecommendedProducts.json';

const defaultSuggestion: {
  priority: string;
  essential: string;
  productPic: string;
  productLine: string;
  product: string;
  price: string;
  routineProducts: {
    name: string;
    price: string;
    type: string;
    line: string;
    essential: boolean;
    miniIcon: string;
    picture: string;
    essentialRoutine: boolean;
  }[];
} = {
  priority:
    'Please take a selfie on the previous page to know your skin care priority.',
  essential:
    'Please take a selfie on the previous page to know what product you will need.',
  productPic: '',
  productLine: '',
  product: '',
  price: '',
  routineProducts: [],
};

interface ProductSuggestionsProps {
  highestScore: { subject: string; A: number };
  lowestScore: { subject: string; A: number };
}

/**
 * Components display the suggestions depending the results of the experience
 * @prop {object} highestScore highest score on the skin diagnostic
 * @prop {object} lowestScore lowest score on the skin diagnostic
 * @return {React.ReactElement} display the suggestions based on the score
 */
export const ProductSuggestions: React.FunctionComponent<ProductSuggestionsProps> =
  React.memo(({ highestScore, lowestScore }) => {
    ProductSuggestions.displayName = 'ProductSuggestions';

    const [needs, setNeeds] =
      useState<typeof defaultSuggestion>(defaultSuggestion);
    const [displayEssential, setDisplayEssential] = useState<boolean>(true);

    //Stock the suggestions for the lowest score
    useEffect(() => {
      const prodSuggestion = productSuggestions.find(
        (prod) => prod.name === lowestScore.subject
      );
      const suggestions = prodSuggestion
        ? prodSuggestion.data
        : defaultSuggestion;
      setNeeds((needs) => ({
        ...needs,
        ...suggestions,
      }));
    }, [lowestScore.A]);

    return (
      <SProductSuggestions>
        <section className="productContainer">
          <div className="yourNeeds">
            <h4>Your Essential</h4>
            <div className="recapContainer">
              <div className="chartTag darkTag">Your Strength</div>
              <p className="productRefs scoreRecap">{highestScore.subject}</p>
              <p className="productRefs scoreRecap">{highestScore.A} / 100</p>
            </div>
            <div className="recapContainer">
              <div className="chartTag lightTag">Your Priority</div>
              <p className="productRefs scoreRecap">{lowestScore.subject}</p>
              <p className="productRefs scoreRecap">{lowestScore.A} / 100</p>
            </div>
          </div>
          <img src={`src/assets/images/${needs.productPic}`} />
          <div className="yourEssential">
            <h4>Your need</h4>
            <p>{needs.priority}</p>
            <h4>Your essential</h4>
            <p>{needs.essential}</p>
            <div className="productRefs">
              <span className="line">{needs.productLine}</span>
              <span className="product">
                <strong>{needs.product}</strong>
              </span>
              <span className="price">{needs.price}</span>
            </div>
            <div className="productBtns">
              <button className="primaryButton">Discover</button>
            </div>
          </div>
        </section>

        <section className="crossSaleContainer">
          <div className="sliderPanel">
            <button
              className={displayEssential ? 'sliderPrimary' : 'sliderSecondary'}
              onClick={() => setDisplayEssential(true)}
            >
              The essentials
            </button>
            <button
              className={displayEssential ? 'sliderSecondary' : 'sliderPrimary'}
              onClick={() => setDisplayEssential(false)}
            >
              The complete ritual
            </button>
          </div>
        </section>

        <RoutineLine needs={needs} displayEssential={displayEssential} />

        <div className="routineContainer">
          {displayEssential
            ? needs.routineProducts
                .filter((essential) => essential.essentialRoutine)
                .map((essential) => {
                  return <Product product={essential} />;
                })
            : needs.routineProducts.map((complete) => {
                return <Product product={complete} />;
              })}
        </div>
      </SProductSuggestions>
    );
  });
