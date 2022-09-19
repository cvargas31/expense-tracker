import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Title } from "../../styles/GlobalStyles";
import { Transaction } from "../Transaction/Transaction";
import { TransactionsContainer } from "./styles";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [ transaction, setTransaction ] = useLocalStorage("transactions", transactions);
  console.log(transaction);
  return (
    <TransactionsContainer>
      <Title>Transactions</Title>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </TransactionsContainer>
  );
};
