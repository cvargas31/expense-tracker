import React from "react";
import { IncomeExpenseContainer } from "./styles";

export const IncomeExpenses = () => {
  return (
    <IncomeExpenseContainer>
      <div>
        <h4>Income</h4>
        <p>
          +$0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p >
          -$0.00
        </p>
      </div>
    </IncomeExpenseContainer>
  );
};
