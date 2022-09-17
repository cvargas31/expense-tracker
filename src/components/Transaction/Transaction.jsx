import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { TransactionItem } from "./styles";

export const Transaction = ({ text, id, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <TransactionItem>
      {text}{" "}
      <span>
        {sign} ${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} style={{ cursor: "pointer" }}>x</button>
    </TransactionItem>
  );
};
