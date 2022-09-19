import React from "react";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionFilters } from "../components/TransactionFilters";
import { TransactionList } from "../components/TransactionList";
import { AddTransaction } from "../components/AddTransaction";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../styles/GlobalStyles";
import { GlobalProvider } from "../context/GlobalState";
export const Home = () => {
  return (
    <>
      <Navbar />
      <GlobalProvider>
        <Wrapper>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Wrapper>
      </GlobalProvider>
    </>
  );
};
