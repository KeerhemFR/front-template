import styled from 'styled-components';

export const SInstructions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 580px;
  width: 70%;

  h3 {
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 0.5em 0;
  }

  p {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.5px;
    margin: 0.5em 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 0 1em 0 1em;
  }

  ul li  {
    display: flex;
    align-items: center;
    margin: 0.5em 0;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  ul li img {
    width: 48px;
    height: 48px;
    margin: 0 2em 0 0;
  }

  label {
    color: var(--prim-color);
  }

  .instructions {
    margin: 15px 0;
    width: 50%;
  }

  .writtenInstructions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em 5em 1em 5em;
  }

  .optIn {
    margin-top: 4em;
  }

  .optInLine {
    display: flex;
    margin-top: 1.5em;
    line-height: 1.5em;
    color: var(--prim-color);
  }

  .optInLine input {
    margin-right: 1em;
  }

  .dnone {
    display: none;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    width: 100%;

    .instructions {
      width: 100%;
    }

    .writtenInstructions {
      align-items: center;
    }

    .optIn {
      margin-top: 2em;
    }
  }
`;
