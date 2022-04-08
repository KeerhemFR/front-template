import styled from 'styled-components';

export const SFooter = styled.footer`
  width: 100%;

  .footerTopBanner {
    width: 100%;
    margin: 0 auto;
    background-color: var(--prim-color);
  }

  .footerTopBanner h2 {
    text-align: center;
    font-size: 18px;
    letter-spacing: 0.02em;
    line-height: 150%;
    color: white;
    padding: 29px 0 0;
    text-transform: uppercase;
  }

  .rowContainer {
    display: flex;
    flex-flow: row wrap;
  }

  .bannerItem {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: calc(100% / 3);
    padding: 0 88px;
    margin: 33px 0;
    box-sizing: border-box;
  }

  .bannerItem p {
    font-family: Guerlain Sans;
    color: white;
    font-size: 13px;
    letter-spacing: 1px;
    text-align: center;
    margin: 0;
    line-height: 150%;
  }

  .bannerPicto {
    width: 60px;
    margin-bottom: 23px;
  }

  .bannerPicto img {
    width: 100%;
  }

  .footerContent {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }

  .footerInfos {
    display: flex;
    flex-flow: row wrap;
    width: calc((100% / 3) * 2);
    padding: 84px 153px;
    background-color: var(--sec-color);
    box-sizing: border-box;
  }

  .infosCol {
    display: flex;
    flex-flow: column wrap;
    width: 50%;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .infosBloc {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 39px;
  }

  .infosBloc p {
    font-size: 13px;
    text-transform: uppercase;
    line-height: 120%;
    margin-bottom: 15px;
  }

  .infosBloc hr {
    width: 15%;
    margin: 0;
  }

  .infosList {
    display: flex;
    flex-flow: column wrap;
    margin: 15px -15px 0;
  }

  .infosList li {
    font-size: 13px;
    margin: 0.3em 1em;
    color: var(--prim-color);
  }

  .socialIcons {
    display: flex;
    flex-flow: row wrap;
    margin: 15px -10px 0;
  }

  .socialIcons li {
    margin: 0 8px;
  }

  .socialIcons li a {
    width: 32px;
    display: block;
  }

  .socialIcons li a img {
    width: 100%;
  }

  .footerForm {
    display: flex;
    flex-flow: column wrap;
    width: calc(100% / 3);
    padding: 84px 32px;
    background-color: #e8e8e8;
    box-sizing: border-box;
  }

  .footerForm > p {
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    margin: 0 0 22px;
  }

  .footerForm span {
    font-size: 13px;
    border-bottom: 1px solid black;
    padding-bottom: 3px;
    width: fit-content;
  }

  .footerForm form {
    margin-top: 44px;
    display: flex;
    flex-flow: column wrap;
  }

  .footerForm form p {
    line-height: 150%;
  }

  .footerForm form > label {
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .textInput {
    padding: 6px 12px;
    font-size: 16px;
    line-height: 150%;
    border: 1px solid #ced4da;
    border-radius: 2px;
  }

  .checkboxContainer {
    font-size: 14px;
    color: var(--prim-color);
  }

  .checkboxContainer label {
    line-height: 150%;
  }

  .checkboxContainer label:before {
    border: 1px solid black;
    border-radius: 0;
  }

  .submitForm {
    font-size: 14px;
    color: white;
    background-color: #767676;
    border: 1px solid black;
    border-radius: 50px;
    padding: 10.5px 20px;
    text-transform: uppercase;
    width: 200px;
    opacity: 0.6;
    align-self: flex-end;
  }

  .footerForm form p {
    font-size: 14px;
    color: var(--prim-color);
    margin: 30px 0 26px;
  }
`;
