import styled from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.nav`  
  text-align: center;
  padding: 15px 0px ;
`

export const BarTitle = styled.h1`
  font-weight: 700;
  color: #2f2d51;
  font-size: 24px;
`

export const MainNav = styled.ul`
  border-bottom: 1px solid #e5e9f9;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px;
`

export const NavbarItem = styled.li`

`

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #2f2d51;
`