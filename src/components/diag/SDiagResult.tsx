import styled from 'styled-components';

export const SDiagResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 2px;
    margin: 26px 0;
  }

  .sidePicture {
    width: 360px;
    height: 480px;
  }

  .sidePicture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  //renderCustomBarLabel style
  .chartTag {
    border-radius: 12px;
    font-size: 11px;
    line-height: 150%;
    width: 101px;
    height: 21px;
    padding: 2px 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  .chartLabelsBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .chartLabelsBoxRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .chartLabelsBoxCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chartLabelsLeft {
    text-align: left;
  }

  .chartLabelsRight {
    text-align: right;
  }

  .chartLabelsCenter {
    text-align: center;
  }

  .chartLabels,
  .chartLabelsLeft,
  .chartLabelsRight,
  .chartLabelsCenter,
  .chartLabelsBox span {
    font-size: 11px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--prim-color);
  }

  .green {
    background: #70dc5b;
  }
  .pink {
    background: #fc85fc;
  }
  .cyan {
    background: #23d9e3;
  }
  .darkGreen {
    background: #8bb810;
  }
  .purple {
    background: #cd86f2;
  }
  .grey {
    background: #aabbcd;
  }

  @media screen and (max-width: 576px) {
    h2 {
      text-align: center;
    }

    .sidePicture {
      width: 300px;
      height: 400px;
    }
  }
`;
