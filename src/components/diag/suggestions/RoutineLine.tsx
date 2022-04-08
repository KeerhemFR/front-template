import React from 'react';

import { SRoutineLine } from '~components/diag/suggestions/SRoutineLine';

interface RoutineLineProps {
  needs: {
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
  };
  displayEssential: boolean;
}

/**
 * Display the routine line to know the order the products need to be use in the routine
 * @prop {object} needs suggestion of product depending the results of the experience
 * @prop {boolean} displayEssential check if the essential routine or the complete routine should be displayed
 * @return {React.ReactElement} display the routine linked to the recommanded product
 */
export const RoutineLine: React.FunctionComponent<RoutineLineProps> =
  React.memo(({ needs, displayEssential }) => {
    RoutineLine.displayName = 'RoutineLine';

    //filter only the products in the essential routine
    if (displayEssential) {
      return (
        <SRoutineLine>
          {needs.routineProducts
            .filter((product) => product.essentialRoutine)
            .map((product, index) => {
              return (
                <div className="lineProduct">
                  <div className="essentialDisplay">
                    {product.essential ? `YOUR ESSENTIAL` : `   `}
                  </div>
                  <div className="productContent">
                    <img src={`src/assets/images/${product.picture}`} />
                    <svg width="160px" height="70px">
                      <line
                        x1="0"
                        y1="25"
                        x2="160"
                        y2="25"
                        stroke="#E9E7D2"
                        stroke-width="2"
                      />
                      <circle
                        cx="80"
                        cy="25"
                        r="15"
                        fill="#fff"
                        stroke="#E9E7D2"
                        stroke-width="2"
                      />
                      <text x={index === 0 ? '77.5' : '75.5'} y="30">
                        {index + 1}
                      </text>
                    </svg>
                    <span>{product.name}</span>
                  </div>
                </div>
              );
            })}
        </SRoutineLine>
      );
    }

    //display the complete routine
    return (
      <SRoutineLine>
        {needs.routineProducts.map((product, index) => {
          return (
            <div className="lineProduct">
              <div className="essentialDisplay">
                {product.essential ? `YOUR ESSENTIAL` : `   `}
              </div>
              <div className="productContent">
                <img src={`src/assets/images/${product.picture}`} />
                <svg width="160px" height="70px">
                  <line
                    x1="0"
                    y1="25"
                    x2="160"
                    y2="25"
                    stroke="#E9E7D2"
                    stroke-width="2"
                  />
                  <circle
                    cx="80"
                    cy="25"
                    r="15"
                    fill="#fff"
                    stroke="#E9E7D2"
                    stroke-width="2"
                  />
                  <text x={index === 0 ? '77.5' : '75.5'} y="30">
                    {index + 1}
                  </text>
                </svg>
                <span>{product.name}</span>
              </div>
            </div>
          );
        })}
      </SRoutineLine>
    );
  });
