import './App.css'
import ExpenseItem from './components/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
function App() {
  
  // const todaysdate=new Date();
  // const expenses=[
  //   {
  //   title:'Rentals',
  //   price:2300,
  //   date:todaysdate
  // },
  // {
  //   title:'recharge',
  //   price:400,
  //   date:todaysdate
  // },
  // {
  //   title:'Gas',
  //   price:200,
  //   date:todaysdate
  // },
  // ]

  // const expenseItems = [];
  // for (let i = 0; i<expenses.length; i++) {
  //   expenseItems.push(
  //     <ExpenseItem
  //       key={i}
  //       title={expenses[i].title}
  //       price={expenses[i].price}
  //       date={expenses[i].date}
  //     />
  //   );
  // }

  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
  setExpenses((prevExpenses) => {
    return [...prevExpenses, expenseData];
  });
  };



  return (
    <>
    <h1 style={{textAlign:'center'}}>Expense Tracker</h1> 
    <NewExpense onAddExpense={addExpenseHandler}/>
    <ExpenseItem expenses={expenses}/>
    </>
  )
}

export default App
