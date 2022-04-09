import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    axios
      .delete(`/api/v1/transactions/${id}`)
      .then((res) => {
        dispatch({
          type: "DELETE_TRANSACTION",
          payload: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function addTransaction(transaction) {
    axios
      .post(`/api/v1/transactions`, transaction)
      .then((res) => {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getTransactions() {
    axios
      .get("/api/v1/transactions")
      .then((res) => {
        dispatch({
          type: "GET_TRANSACTIONS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
