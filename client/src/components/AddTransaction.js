import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("def");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      category,
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            name="amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">
            Category <br />
            <select
              name="category"
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
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
