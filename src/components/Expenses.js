import React, { useState } from "react";

export const Expenses = ({ expenses, setExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setamount] = useState("");

  const handleAdd = () => {
    setExpenses([...expenses, { title: title, amount: amount }]);
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
    setExpenses(expenses.filter((expense) => expense.title !== key));
  };

  return (
    <div>
      <h2>New Expense</h2>
      <div className="inputs">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitle}></input>
        <label>Amount</label>
        <input type="text" value={amount} onChange={handleAmount}></input>
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <h2>My Expenses</h2>
      <div className="list">
      {expenses.length > 0 ? 
        <ul>
          {expenses.map((expense) => (
            <li className="list-item" key={expense.title}>
              <span className="list-title">{expense.title}</span>{" "}
              <span className="list-amount">${expense.amount}</span>
              <span className="delete-button" onClick={() => handleDelete(expense.title)}>X</span>
            </li>
          ))}
        </ul>
      :  <div className="empty-list">Empty!</div>} 
      </div>
      
    </div>
  );
};
