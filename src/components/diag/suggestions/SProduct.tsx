import styled from 'styled-components';

export const SProduct = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--sec-color);
  width: 30%;
  height: 523px;
  margin-top: 30px;

  .yourEssentialTag {
    position: absolute;
    left: 20px;
    background: #000000;
    margin: -1em 10% 0 0;
    font-size: 11px;
    line-height: 150%;
    text-transform: uppercase;
    color: #ffffff;
    padding: 0.5em;
  }

  .productInfo {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    width: 90%;
    height: 30%;
    justify-content: space-around;
    margin: 1em;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .productPic {
    width: 176px;
    height: 176px;
  }

  .miniIcon {
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }

  .productLinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    height: 20%;
    justify-content: space-around;
  }

  .productLinks a {
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #000000;
  }

  @media screen and (max-width: 576px) {
    width: 320px;
  }
`;
