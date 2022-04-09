import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Categories from "./components/Categories";
import { GlobalProvider } from "./context/GlobalState";

const App = (props) => {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
        <Categories />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
