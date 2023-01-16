import React from "react";

export const Navbar = ({ changeTab }) => {
  return (
    <nav className="nav">
      <ul className="links">
        <li>
          <button onClick={() => changeTab("overview")} id="overview">
            Overview
          </button>
        </li>

        <li>
          <button onClick={() => changeTab("expenses")} id="expense">
            Expenses
          </button>
        </li>
        <li>
          <button onClick={() => changeTab("income")} id="income">
            Income
          </button>
        </li>
      </ul>
    </nav>
  );
};
