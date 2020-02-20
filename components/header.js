import React from 'react';
import Link from 'next/link';

import {
  Wrapper,
  HeaderDesktop,
  HeaderMobile,
} from '../styles/header';

const Header = () => {
  return (
    <Wrapper>
      <HeaderMobile>
        <h1>Saymon Souza</h1>
        <img src="sand.png" />
      </HeaderMobile>
      <HeaderDesktop>
        <ul>
          <li>
            <Link href="/">
              <a>WORK</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
      </HeaderDesktop>
    </Wrapper>
  );
}

export default Header;
