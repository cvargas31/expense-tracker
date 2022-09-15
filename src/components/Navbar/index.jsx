import React from "react";
import { Bar, BarTitle, FilterTitle, TransactionFiltersContainer, FilterButton } from "./styles";

export const Navbar = () => {
  return (
    <Bar>
      <BarTitle>My Wallet</BarTitle>
      <TransactionFiltersContainer>
        <FilterTitle>
          <FilterButton>Last Month</FilterButton>
          <FilterButton>This Month</FilterButton>
        </FilterTitle>
      </TransactionFiltersContainer>
    </Bar>
  );
};
