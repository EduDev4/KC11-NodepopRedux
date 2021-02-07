import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css';
import { LogoutButton } from '../auth';

import { Button, SearchBox } from '../shared';

import { ReactComponent as Icon } from '../../assets/npop.svg';

const Header = () => (
  <>
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          <Icon width="48" height="48" />
        </div>
      </Link>
      <SearchBox width="100%" />
      <nav className="header-nav">
        <Button
          as={Link}
          to="/adverts"
          variant="primary"
          className="header-button"
        >
          See all adverts
        </Button>

        <Button
          as={Link}
          to="/advert/new"
          variant="primary"
          className="header-button"
        >
          Sell something
        </Button>
        <LogoutButton className="header-button">Logout</LogoutButton>
      </nav>
    </header>
  </>
);

export default Header;
