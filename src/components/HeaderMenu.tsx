import React from 'react';

import Logo from '/images/Logo.png';
import SearchIcon from '/images/searchIcon.png';
import UserIcon from '/images/userIcon.png';
import CartIcon from '/images/cartIcon.png';

import SHeaderMenu from './SHeaderMenu';

/**
 * Header & menu component
 * @return {JSX} display the header and the menu
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
