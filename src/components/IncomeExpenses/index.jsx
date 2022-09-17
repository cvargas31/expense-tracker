import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IncomeExpenseContainer } from "./styles";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1;
  return (
    <IncomeExpenseContainer>
      <div>
        <h4>Income</h4>
        <p>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>-${expense}</p>
      </div>
    </IncomeExpenseContainer>
  );
};
