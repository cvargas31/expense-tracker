import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Estado inicial
const initialState = {
  transactions: [

  ],
};

// Creando el contexto global
export const GlobalContext = createContext(initialState);

// Creando el provider para que nuestra app tenga acceso al state
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions al reducer
  
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }
  
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
