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
}

export const RoutineLine: React.FunctionComponent<RoutineLineProps> =
  React.memo(({ needs }) => {
    RoutineLine.displayName = 'RoutineLine';

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
                  <text x="75" y="30">
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
