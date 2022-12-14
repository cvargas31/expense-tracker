import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { BalanceContainer, RedDot } from "./styles";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
  .map((transaction) => transaction.amount)
  .reduce((prevValue, currentValue) => (prevValue += currentValue), 0).toFixed(2);
  return (
    <BalanceContainer>
      <h4>Total balance</h4>
      <h1>${balance}</h1>
      <RedDot/>
    </BalanceContainer>
  );
};
