import React, {Fragment, useContext} from "react";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { ReactComponent as SearchSvg } from "../../assets/svg/search.svg";
import { ReactComponent as LikedSvg } from "../../assets/svg/liked.svg";
import { ReactComponent as CartSvg } from "../../assets/svg/cart.svg";
import { CartContext } from "../../contexts/cart.context";


import {
  HeaderWrapper,
  Logo,
  NavBar,
  NavIcons,
  CartQuantity,
  NavLinks,
  SvgLinkWrapper
} from "./header.styles.jsx";

import { Outlet } from "react-router-dom";

const Header = () => {
  const {cart} = useContext(CartContext)
  
  return (
    <Fragment>
      <HeaderWrapper>
        <Logo to='/'>
          <LogoSvg />
        </Logo>

        <NavBar>
          <NavLinks to="/">home</NavLinks>
          <NavLinks to="/women">women</NavLinks>
          <NavLinks to="/men">men</NavLinks>
          <NavLinks to="/children">children</NavLinks>
        </NavBar>

        <NavIcons>
          
          <SvgLinkWrapper to="/search">
            <SearchSvg  />
          </SvgLinkWrapper>
          <SvgLinkWrapper to="/liked">
            <LikedSvg  />
          </SvgLinkWrapper>
          <SvgLinkWrapper to="/cart">
            <CartSvg  />
          </SvgLinkWrapper>

          <CartQuantity>{cart.length}</CartQuantity>
        </NavIcons>
      </HeaderWrapper>
      <Outlet />
    </Fragment>
  );
};

export default Header;
