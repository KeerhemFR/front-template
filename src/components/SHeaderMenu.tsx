import styled from 'styled-components';

const SHeaderMenu = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1em 0 2em 0;
  position: relative;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0 1em 0 1em;
    padding: 0;
  }

  li {
    margin: 0 1em 0 1em;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.5px;
    color: var(--prim-color);
  }

  .headerLogo {
    width: 239px;
    height: 33px;
    margin: 1em 0 2em 0;
  }

  .headerLogo img {
    width: 100%;
  }

  .searchItem {
    border-left: 1px solid var(--prim-color);
    padding-left: 20px;
    display: flex;
  }

  .searchItem img {
    width: 20px;
    height: 20px;
    padding-right: 20px;
  }

  .userIcon,
  .cartIcon {
    border: 1px solid var(--prim-color);
    width: 40px;
    height: 40px;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .userIcon {
    right: 170px;
  }

  .cartIcon {
    right: 120px;
  }

  .userIcon img,
  .cartIcon img {
    width: 20px;
    height: 20px;
  }
`;

export default SHeaderMenu;
