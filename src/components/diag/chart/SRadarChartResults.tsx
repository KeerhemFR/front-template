import styled from 'styled-components';

export const SRadarChartResults = styled.div`
  position: relative;
  margin: 0 0 0 5em;

  .chartBg {
    position: absolute;
    top: 20%;
    left: 21.7%;
  }

  @media screen and (max-width: 576px) {
    width: 100vw;
    overflow-x: scroll;
    margin: 0;

    .chartBg {
      left: 33.5%;
    }
  }
`;
