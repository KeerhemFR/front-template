import React from 'react';

import Logo from '~assets/images/Logo.png';
import SearchIcon from '~assets/images/searchIcon.png';
import UserIcon from '~assets/images/userIcon.png';
import CartIcon from '~assets/images/cartIcon.png';

import { SHeaderMenu } from '~components/header/SHeaderMenu';

/**
 * Header & menu component
 * @return {React.ReactElement} display the header and the menu
 */
export const HeaderMenu = React.memo(() => {
  return (
    <SHeaderMenu>
      <div className="headerLogo">
        <img src={Logo} />
      </div>
      <nav role="navigation">
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
          <li className="userIcon">
            <img src={UserIcon} />
          </li>
          <li className="cartIcon">
            <img src={CartIcon} />
          </li>
        </ul>
      </nav>
    </SHeaderMenu>
  );
});
