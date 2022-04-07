import styled from 'styled-components';

export const SRoutineLine = styled.div`
  display: flex;
  height: 350px;
  justify-content: center;
  margin: 3em 0 3em 0;

  .lineProduct {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 160px;
    height: 100%;
  }

  .essentialDisplay {
    height: 16px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    align-items: flex-end;
    margin: 0 20% 1em 0;
  }

  .productContent span {
    text-align: center;
    height: 35px;
    display: block;
    line-height: 150%;
  }

  .productContent img {
    width: 150px;
    height: 150px;
  }
`;
