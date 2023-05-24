import './App.css'
import ExpenseItem from './components/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  
  const todaysdate=new Date();
  const expenses=[
    {
    title:'Rentals',
    price:2300,
    date:todaysdate
  },
  {
    title:'recharge',
    price:400,
    date:todaysdate
  },
  {
    title:'Gas',
    price:200,
    date:todaysdate
  },
  ]

  const expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    expenseItems.push(
      <ExpenseItem
        key={i}
        title={expenses[i].title}
        price={expenses[i].price}
        date={expenses[i].date}
      />
    );
  }

  return (
    <>
    <h1 style={{textAlign:'center'}}>Expense Tracker</h1> 
    <NewExpense/>
    {expenseItems}
    </>
  )
}

export default App
