import React from "react";

export const ExchangeRate = ({ rates }) => {
  return (
    <div className="currencies">
      <h2>Current Canadian Dollar Exchange Rates</h2>
      <ul>
        {rates.map((rate) => (
          <li key={rate.currency}>
            <div className="overview">
              <p className="currency column">Currency: {rate.currency}</p>
              <p className="exchange column">
                Exchange Rate: {rate.exchangeRate}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
