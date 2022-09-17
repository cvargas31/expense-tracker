import React from "react";
import { Bar, BarTitle, NavbarItem, MainNav, NavbarLink } from "./styles";

export const Navbar = () => {
  return (
    <Bar>
      <BarTitle>My Wallet</BarTitle>
      <MainNav>
        <NavbarItem>
          <NavbarLink to={"/this-month"}>This Month</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={"/last-month"}>Last Month</NavbarLink>
        </NavbarItem>
      </MainNav>
    </Bar>
  );
};
