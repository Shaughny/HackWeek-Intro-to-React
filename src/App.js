

import React, {  useState, useEffect } from 'react'
import { Expenses } from './components/Expenses';
import { Income } from './components/Income';
import { Navbar } from './components/Navbar';
import { Overview } from './components/Overview';



function App() {
  const [currentTab,setCurrentTab] = useState("overview")
  const [expenses,setExpenses] = useState([])
  const [income,setIncome] = useState([{title:"Salary",amount:2000}])


 
  



  return (
    <div className="App">
        <div className='container'>
            <Navbar changeTab={input => setCurrentTab(input)}/>
            {currentTab === 'overview' ? <Overview expenses={expenses} income={income}></Overview> : <></>}
            {currentTab === 'expenses' ? <Expenses expenses={expenses} setExpenses={setExpenses}></Expenses> : <></>}
            {currentTab === 'income' ? <Income income={income} setIncome={setIncome}></Income> : <></>}
        </div>
    </div>
  );
}

export default App;
