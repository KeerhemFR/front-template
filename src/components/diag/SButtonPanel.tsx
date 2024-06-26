import styled from 'styled-components';

export const SButtonPanel = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2em 0 2em 0;

  .primaryButton:disabled {
    color: #fff !important;
    background-color: #767676 !important;
    border: 1px solid #000 !important;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin: 2em 1em 2em 1em;

    button {
      margin: 10px 0;
    }
  }
`;
