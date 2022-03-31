import styled from 'styled-components';

export const SLoader = styled.div`
  z-index: 3;
  position: absolute;
  background: #eee;
  width: 360px;
  height: 480px;

  #banner {
    width: 68px;
    height: 325px;
    background: transparent;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0% 0% 10% 10%;
  }
  #banner .fill {
    animation-name: fillAction;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    position: absolute;
    top: 50%;
    left: 3px;
    width: 61px;
    overflow: hidden;
    transform: translate(-50%, -50%);
    border-radius: 0% 0% 10% 10%;
  }
  #banner #waveShape {
    animation-name: waveAction;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 0.6s;
    width: 65px;
    height: 50px;
    fill: black;
  }
  @keyframes fillAction {
    0% {
      transform: translate(0, 135px);
    }
    50% {
      transform: translate(0, 75px);
    }
    100% {
      transform: translate(0, 135px);
    }
  }
  @keyframes waveAction {
    0% {
      transform: translate(-100px, 0);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100px, 0);
    }
  }

  #bottle {
    width: 65px;
    margin: 0 auto;
    top: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  #etiq {
    width: 35px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 117px;
  }

  .st0 {
    fill: transparent;
  }

  .st1 {
    fill: #ffffff;
  }
`;
