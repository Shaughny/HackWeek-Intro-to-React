import React, { useState, useEffect } from "react";
import { ExchangeRate } from "./components/ExchangeRate";
import { Tab } from "./components/Tab";
import { Navbar } from "./components/Navbar";
import { Overview } from "./components/Overview";

function App() {
  const [currentTab, setCurrentTab] = useState("overview");
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([{ title: "Salary", amount: 2000 }]);
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest?from=CAD")
      .then((res) => {
        if (!res.ok) {
          throw Error("Error fetching API data");
        }
        return res.json();
      })
      .then((data) => {
        const tempArray = [
          { currency: "USD", exchangeRate: data.rates.USD },
          { currency: "EUR", exchangeRate: data.rates.EUR },
          { currency: "JPY", exchangeRate: data.rates.JPY },
        ];
        setRates(tempArray);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Navbar changeTab={(input) => setCurrentTab(input)} />
        {currentTab === "overview" ? (
          <Overview expenses={expenses} income={income}></Overview>
        ) : (
          <></>
        )}
        {currentTab === "expenses" ? (
          <Tab values={expenses} setValues={setExpenses} type={"Expense"}></Tab>
        ) : (
          <></>
        )}
        {currentTab === "income" ? (
          <Tab values={income} setValues={setIncome} type={"Income"}></Tab>
        ) : (
          <></>
        )}
        {currentTab === "overview" ? (
          <ExchangeRate rates={rates}></ExchangeRate>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
