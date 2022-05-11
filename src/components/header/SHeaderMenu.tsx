import styled from 'styled-components';

export const SHeaderMenu = styled.header`
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

  .userName  {
    position: absolute;
    height: 40px;
    top: 10px;
    right: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    padding: 0.5em 0.25em;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;

    .desktopNav {
      display: none;
    }

    .burgerMenu {
      border: none;
      background-color: #fff;
      align-self: flex-start;
      width: 26px;
      padding: 0;
      margin: 0;
    }

    .burgerMenu img {
      width: 25.6px;
      height: 26px;
    }

    .headerLogo {
      width: 160px;
      height: 22px;
      margin: 0;
    }

    .mobileMenuContainer {
      display: block;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .mobileNav {
      top: 0;
      left: 0;
      bottom: 0;
      width: 320px;
      height: 100%;
      background-color: white;
    }

    .mobileNav > ul {
      height: calc(100% - 60px);
      display: flex;
      flex-flow: column wrap;
      margin: 0;
    }

    .mobileNav > ul li {
      line-height: 3.57;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .subList {
      margin: 30px 0 0 0;
    }

    .subList ul {
      display: flex;
      flex-flow: column wrap;
      margin: 0;
    }

    .subList ul li {
      padding-left: 55px;
      margin: 2px 0;
      padding: 5px 15px;
      font-size: 12px;
      font-weight: 400;
      background-color: var(--sec-color);
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .subList ul li span {
      border: 1px solid var(--prim-color);
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span img {
      width: 20px;
      height: 20px;
    }

    span .searchIconMobile {
      width: 24px;
      height: 24px;
    }

    .mobileNav .closeMenu {
      padding: 9px 15px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 40px;
    }

    .mobileNav .closeBtn {
      margin: 0;
      padding: 0;
      background-color: transparent;
      border: none;
      width: 18px;
      height: 18px;
    }

    .closeMenu .closeBtn img {
      width: 15px;
      height: 15px;
    }

    .navIconMobile {
      border: 1px solid var(--prim-color);
      width: 40px;
      height: 40px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .navIconMobile img {
      width: 20px;
      height: 20px;
    }

    .navIconMobile .searchIconMobile {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 576px) {
    .burgerMenu,
    .mobileNav,
    .navIconMobile {
      display: none;
    }
  } ;
`;
