import { Link } from "react-router-dom";
import styled from "styled-components";


export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 50px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Logo = styled(Link)`
  display: flex;
  width: 187px;
  height: 23px;
  margin-right: 90px;
  cursor: pointer;
`;

export const NavBar = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-around;
`;

export const NavLinks = styled(Link)`
  text-transform: uppercase;
  cursor: pointer;
  color: #000;
  margin-right: 50px;
`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const SvgLinkWrapper = styled(Link)`
  margin-left: 35px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CartQuantity = styled.span`
  margin-left: 10px;
`;
