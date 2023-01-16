import { React, useState } from "react";

export const Income = ({ income, setIncome }) => {
  const [title, setTitle] = useState("");
  const [amount, setamount] = useState("");

  const handleAdd = () => {
    setIncome([...income, { title: title, amount: amount }]);
    setTitle("");
    setamount("");
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAmount = (event) => {
    setamount(event.target.value);
  };
  const handleDelete = (key) => {
    setIncome(income.filter((expense) => expense.title !== key));
  };

  return (
    <div>
      <h2>New Income</h2>
      <div className="inputs">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitle}></input>
        <label>Amount</label>
        <input type="text" value={amount} onChange={handleAmount}></input>
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <h2>My Income</h2>
      <div className="list">
      {income.length > 0 ? 
        <ul>
          {income.map((income) => (
            <li className="list-item" key={income.title}>
              <span className="list-title">{income.title}</span>{" "}
              <span className="list-amount">${income.amount}</span>
              <span className="delete-button" onClick={() => handleDelete(income.title)}>X</span>
            </li>
          ))}
        </ul>
      :  <div className="empty-list">Empty!</div>} 
      </div>
    </div>
  );
};
