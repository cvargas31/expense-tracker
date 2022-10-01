import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Title } from "../../styles/GlobalStyles";
import { Transaction } from "../Transaction/Transaction";
import { TransactionsContainer } from "./styles";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [transaction, setTransaction] = useLocalStorage("transactions", transactions);
  console.log(transactions.length > 0);
  return (
    <TransactionsContainer>
      <Title>Transactions</Title>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
        </ul>
      ) : (
        <p> Add a transaction </p>
      )}
    </TransactionsContainer>
  );
};
