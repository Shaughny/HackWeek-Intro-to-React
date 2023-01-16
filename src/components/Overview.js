import React from "react";

export const Overview = ({ expenses, income }) => {
  let totalIncome = 0;
  let totalExpenses = 0;
  if (income.length > 0) {
    income.forEach((element) => {
      totalIncome += +element.amount;
    });
  }
  if (expenses.length > 0) {
    expenses.forEach((element) => {
      totalExpenses += +element.amount;
    });
  }

  return (
    <div>
      <h2>Total Overview</h2>
      <div className="overview">
        <div className="column expense-col">
          <h3 id="total-expense">Total Expenses: ${totalExpenses}</h3>
          <div className="list">
        <ul>
          {expenses.map((expense) => (
            <li className="list-item" key={expense.title}>
              <span className="list-title">{expense.title}</span>{" "}
              <span className="list-amount">${expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </div>
        <div className="column income-col">
          <h3 id="total-income">Total Income: ${totalIncome}</h3>
          <div className="list">
        <ul>
          {income.map((income) => (
            <li className="list-item" key={income.title}>
              <span className="list-title">{income.title}</span>{" "}
              <span className="list-amount">${income.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </div>
      </div>
      <div>
        <h2 id="remainder">
          Leftover: <span id="remainder-amount">$
          {totalIncome - totalExpenses < 0 ? 0 : totalIncome - totalExpenses}</span>
        </h2>
      </div>
      
    </div>
  );
};
