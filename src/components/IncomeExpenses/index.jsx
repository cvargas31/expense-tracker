import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IncomeExpense, IncomeExpenseAmount, IncomeExpenseContainer, IncomeExpenseTitle } from "./styles";
import {BiDownArrowCircle,BiUpArrowCircle} from 'react-icons/bi'
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
      <IncomeExpense>
        <BiDownArrowCircle size={"1.5rem"} color={"green"}/>
        <IncomeExpenseTitle>Income</IncomeExpenseTitle>
        <IncomeExpenseAmount>+${income}</IncomeExpenseAmount>
      </IncomeExpense>
      <IncomeExpense>
        <BiUpArrowCircle size={"1.5rem"} color={"red"}/>
        <IncomeExpenseTitle>Expense</IncomeExpenseTitle>
        <IncomeExpenseAmount>-${expense}</IncomeExpenseAmount>
      </IncomeExpense>
    </IncomeExpenseContainer>
  );
};
