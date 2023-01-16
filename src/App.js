

import React, {  useState, useEffect } from 'react'
import { ExchangeRate } from './components/ExchangeRate';
import { Expenses } from './components/Expenses';
import { Income } from './components/Income';
import { Navbar } from './components/Navbar';
import { Overview } from './components/Overview';



function App() {
  const [currentTab,setCurrentTab] = useState("overview")
  const [expenses,setExpenses] = useState([])
  const [income,setIncome] = useState([{title:"Salary",amount:2000}])
  const [rates,setRates] = useState([])

 useEffect(() => {
  fetch('https://api.frankfurter.app/latest?from=CAD').then(res => {
    return res.json()
  }).then((data) => {
    const tempArray = [{currency:"USD", exchangeRate: data.rates.USD},{currency:"EUR", exchangeRate: data.rates.EUR},{currency:"JPY", exchangeRate: data.rates.JPY}]
    setRates(tempArray)
  })
 }, [])
  



  return (
    <div className="App">
        <div className='container'>
            <Navbar changeTab={input => setCurrentTab(input)}/>
            {currentTab === 'overview' ? <Overview expenses={expenses} income={income}></Overview> : <></>}
            {currentTab === 'expenses' ? <Expenses expenses={expenses} setExpenses={setExpenses}></Expenses> : <></>}
            {currentTab === 'income' ? <Income income={income} setIncome={setIncome}></Income> : <></>}
            {currentTab === 'overview' ?<ExchangeRate rates={rates}></ExchangeRate> : <></>}
        </div>
    </div>
  );
}

export default App;
