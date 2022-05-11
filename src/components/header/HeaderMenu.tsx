import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthenticate } from '~components/Main';

import Logo from '~assets/images/Logo.png';
import SearchIcon from '~assets/images/searchIcon.png';
import UserIcon from '~assets/images/userIcon.png';
import CartIcon from '~assets/images/cartIcon.png';
import MenuIcon from '~assets/images/menuIcon.png';
import GeolocIcon from '~assets/images/geolocIcon.png';
import Close from '~assets/images/close.png';

import { SHeaderMenu } from '~components/header/SHeaderMenu';

/**
 * Header & menu component
 * @return {React.ReactElement} display the header and the menu
 */
export const HeaderMenu = React.memo(() => {
  HeaderMenu.displayName = 'HeaderMenu';

  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [isAuthenticated] = useAuthenticate();

  return (
    <SHeaderMenu>
      <button
        className="burgerMenu"
        onClick={() => setDisplayMenu(!displayMenu)}
      >
        <img src={MenuIcon} />
      </button>
      <div className="navIconMobile">
        <img className="searchIconMobile" src={SearchIcon} />
      </div>
      <div className="headerLogo">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <Link to="/login">
        <div className="navIconMobile">
          <img src={UserIcon} />
        </div>
      </Link>

      <div className="navIconMobile">
        <img src={CartIcon} />
      </div>
      {displayMenu && (
        <React.Fragment>
          <div className="mobileMenuContainer">
            <nav className="mobileNav">
              <div className="closeMenu">
                <button className="closeBtn">
                  <img
                    src={Close}
                    onClick={() => setDisplayMenu(!displayMenu)}
                  />
                </button>
              </div>
              <ul>
                <li>FRAGRANCE</li>
                <li>MAKEUP</li>
                <li>SKINCARE</li>
                <li>VALENTINE'S DAY</li>
                <li>PERSONNALISATION</li>
                <li>LA MAISON GUERLAIN</li>
                <li>OUR COMMITMENT</li>
                <li className="subList">
                  <ul>
                    <li>
                      <span>
                        <img
                          src={SearchIcon}
                          className="searchIconMobile"
                          alt=""
                        />
                      </span>
                      Search
                    </li>
                    <Link to="/login">
                      <li>
                        <span>
                          <img src={UserIcon} alt="" />
                        </span>
                        {isAuthenticated ? 'Skindiag Demo' : 'Account'}
                      </li>
                    </Link>
                    <li>
                      <span>
                        <img src={GeolocIcon} alt="" />
                      </span>
                      Store Locator
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </React.Fragment>
      )}
      <nav role="navigation" className="desktopNav">
        <ul>
          <li>FRAGRANCE</li>
          <li>MAKEUP</li>
          <li>SKINCARE</li>
          <li>VALENTINE'S DAY</li>
          <li>PERSONNALISATION</li>
          <li>LA MAISON GUERLAIN</li>
          <li>OUR COMMITMENT</li>
          <li className="searchItem">
            <img src={SearchIcon} />
            SEARCH
          </li>
          {isAuthenticated && <li className="userName">Skindiag Demo</li>}
          <Link to="/login">
            <li className="userIcon">
              <img src={UserIcon} />
            </li>
          </Link>
          <li className="cartIcon">
            <img src={CartIcon} />
          </li>
        </ul>
      </nav>
    </SHeaderMenu>
  );
});
