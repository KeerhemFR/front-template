import styled from 'styled-components';

export const SProductSuggestions = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 24px 0;
  }

  .productContainer {
    background-color: var(--sec-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 38px;
    width: 70%;
    height: 686px;
  }

  .productContainer img {
    width: 273px;
    height: 273px;
  }

  .yourNeeds {
    width: 30%;
    height: 45%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }

  .yourEssential {
    width: 30%;
    margin: 0 0 0 2em;
  }

  .yourEssential p {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.5px;
    margin: 14px 0;
  }

  .productRefs {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 8px 0;
  }

  .scoreRecap {
    color: var(--prim-color);
  }

  .line {
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .product {
    font-size: 13px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .price {
    font-size: 12px;
    line-height: 150%;
    color: var(--prim-color);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 1em 0 1em 0;
  }

  .productBtns {
    display: flex;
    flex-direction: column;
  }

  .productBtns button {
    margin-bottom: 1em;
    width: 60%;
  }

  .sliderPanel {
    display: flex;
    justify-content: center;
    margin: 2em 0 2em 0;
  }

  .sliderPanel button {
    margin: 0;
    width: 250px;
  }

  .sliderPanel button:first-child {
    padding-right: 3em;
  }

  .sliderPanel button:nth-child(2) {
    margin-left: -3em;
    padding-left: 3em;
  }

  .sliderPrimary {
    background: #000000;
    color: #ffffff;
    border: 1px solid #000000;
    border-radius: 50px;
    z-index: 2;
  }

  .sliderSecondary {
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 50px;
    z-index: 1;
  }

  .routineContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 60%;
  }
`;
