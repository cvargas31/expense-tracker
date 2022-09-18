import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { TransactionAmount, TransactionDeleteButton, TransactionItem, TransactionName, TransactionNameContainer } from "./styles";

export const Transaction = ({ text, id, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <TransactionItem>
      <TransactionNameContainer>
        <TransactionDeleteButton onClick={() => deleteTransaction(id)} style={{ cursor: "pointer" }}>
          x
        </TransactionDeleteButton>
        <TransactionName>{text}</TransactionName>
      </TransactionNameContainer>
      <TransactionAmount color={ sign == "+" ? 'green' : 'red'}>
        {sign} {Math.abs(amount).toFixed(2)}
      </TransactionAmount>
    </TransactionItem>
  );
};
