import React from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const isTablet = useMediaQuery({ query: QUERIES.tabletAndDown });
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      {isTablet ? <GreyLine /> : <SuperHeader />}
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          {isTablet ? (
            <>
              <Icon id="shopping-bag" />
              <Icon id="search" />
              <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
            </>
          ) : (
            <>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </>
          )}
        </Nav>
        {/* <Side /> */}
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);

  @media ${QUERIES.tabletAndDown} {
    align-items: center;
  }

  @media ${QUERIES.mobileAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  gap: clamp(1rem, -0.9587628865979383rem + 3.2989690721649487vw, 3rem);
  margin: 0px 48px;
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    margin: 0px;
    gap: 40px;
    margin-left: auto;
  }

  @media ${QUERIES.mobileAndDown} {
    gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const GreyLine = styled.div`
  height: 8px;
  background-color: var(--gray-900);
`;

export default Header;
