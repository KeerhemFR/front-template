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
`;
