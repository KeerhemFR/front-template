import styled from 'styled-components';

export const SLogin = styled.div`
  width: 100%;
  background-color: var(--sec-color);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 42px 0;
    font-size: 30px;
    text-transform: uppercase;
  }

  .formsContainer {
    width: 70%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .formsContainer section  {
    width: 32%;
    padding-bottom: 107px;
  }

  .formsContainer section h3 {
    text-align: center;
    padding: 12px 0;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .formCard {
    background-color: white;
    height: 450px;
    margin-top: 13px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .formCard form {
    width: 100%;
  }

  .formBody {
    height: 75%;
    width: 100%;
  }

  .formBtn {
    height: 25%;
    width: 100%;
  }

  .formBtn button {
    width: 60%;
  }

  .formBody,
  .formBtn {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  .formInput {
    width: 70%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: flex-start;
    height: 40px;
    margin: 10px 0;
  }

  .formInput input {
    border: none;
    border-bottom: 1px black solid;
    width: 100%;
  }

  .formInput label  {
    font-size: 13px;
  }

  .pswrdReset {
    font-size: 16px;
    text-decoration: underline;
    font-weight: 400;
    width: 70%;
    text-align: left;
    margin: 20px 0 50px;
  }

  .formCheckbox  {
    width: 70%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .formCheckbox button {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 1px black solid;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    padding: 0;
    margin: 0;
  }

  .formCheckbox button div {
    border-bottom: 5px solid black;
    border-left: 5px solid black;
    width: 16px;
    height: 8px;
    transform: rotate(-45deg);
    margin-bottom: 5px;
  }

  .formCheckbox p {
    letter-spacing: 1px;
    padding-left: 10px;
    font-size: 13px;
    margin-top: 8px;
  }

  .formText {
    line-height: 1.5;
    padding: 2.5rem;
    text-align: center;
  }

  @media screen and (max-width: 576px) {
    .formsContainer {
      flex-flow: column wrap;
      width: 100%;
    }

    .formsContainer section {
      width: 100%;
      padding-bottom: 20px;
    }

    .formsContainer section h3 {
      width: 100%;
      background-color: white;
      padding: 24px 0px 24px 20px;
      text-align: left;
      box-sizing: border-box;
    }

    .formCard {
      margin-top: 0;
      height: auto;
    }

    .formBody,
    .formBtn {
      height: auto;
    }

    .formBtn {
      padding: 30px 0;
    }

    .formText  {
      padding: 20px;
      text-align: left;
    }

    .formInput {
      width: 90%;
    }
  } ;
`;
