import React, { useContext, useState, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const Categories = () => {
  const { filteredTransactions, getFilteredTransactions } =
    useContext(GlobalContext);
  const [category, setCategory] = useState("def");

  useEffect(() => {
    getFilteredTransactions(category);
  }, [category]);

  return (
    <>
      <h3>Categories</h3>

      <label htmlFor="categoryDisp">
        Category <br />
        <select
          name="categoryDisp"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option disabled value="def">
            --Select Category--
          </option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="transportation">Transportation</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="medical">Medical</option>
          <option value="entertainment">Entertainment</option>
          <option value="personal">Personal</option>
        </select>
      </label>
      <ul className="list">
        {filteredTransactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
export default Categories;
