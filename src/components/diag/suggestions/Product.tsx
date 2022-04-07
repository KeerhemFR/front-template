import React from 'react';

import { SProduct } from '~components/diag/suggestions/SProduct';

interface ProductProps {
  product: {
    name: string;
    price: string;
    type: string;
    line: string;
    essential: boolean;
    miniIcon: string;
    picture: string;
    essentialRoutine: boolean;
  };
}

/**
 * Display the descriptive card of the routine's product
 * @prop {object} product the product's information to display into the card
 * @return {React.ReactElement} card of the routine's product
 */
export const Product: React.FunctionComponent<ProductProps> = React.memo(
  ({ product }) => {
    Product.displayName = 'Product';

    return (
      <SProduct>
        {product.essential && (
          <div className="yourEssentialTag">Your essential</div>
        )}
        <div className="productInfo">
          <strong>{product.type}</strong>
          <span>{product.line}</span>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>
        <img
          className="productPic"
          src={`src/assets/images/${product.picture} `}
          alt={`${product.name}'s picture`}
        />
        <img
          className="miniIcon"
          src={`src/assets/images/${product.miniIcon} `}
          alt={`Moment of use icon`}
        />
        <div className="productLinks">
          <button className="primaryButton">Discover</button>
          <a>Why is this product an essential?</a>
        </div>
      </SProduct>
    );
  }
);
