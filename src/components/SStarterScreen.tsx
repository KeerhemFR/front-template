import styled from 'styled-components';

const SStarterScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 28.8px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 19px 0;
    color: #000000;
  }
`;

export default SStarterScreen;
