import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "../Transaction/Transaction";

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  console.log(transactions)
  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction  key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
};
