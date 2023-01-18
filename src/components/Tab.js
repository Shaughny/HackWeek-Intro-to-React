import React, { useState } from "react";

export const Tab = ({ values, setValues, type}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    setValues([...values, { title: title, amount: amount }]);
    setTitle("");
    setAmount("");
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleDelete = (key) => {
    setValues(values.filter((value) => value.title !== key));
  };

  return (
    <div>
      <h2 className={`new-${type}`}>New {type}</h2>
      <div className="inputs">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitle}></input>
        <label>Amount</label>
        <input type="text" value={amount} onChange={handleAmount}></input>
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <h2 className="tab-title">{type} List</h2>
      <div className="list">
      {values.length > 0 ? 
        <ul>
          {values.map((value) => (
            <li className="list-item" key={value.title}>
              <span className="list-title">{value.title}</span>{" "}
              <span className="list-amount">${value.amount}</span>
              <span className="delete-button" onClick={() => handleDelete(value.title)}>X</span>
            </li>
          ))}
        </ul>
      :  <div className="empty-list">Empty!</div>} 
      </div>
      
    </div>
  );
};
