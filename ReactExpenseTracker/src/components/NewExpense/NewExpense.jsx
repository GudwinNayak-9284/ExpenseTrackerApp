import React from 'react'
import './NewExpense.css'
const NewExpense = () => {

  const handleSubmit=(event)=>{
    event.preventDefault()
    let name=document.getElementById('name').value
    let amount=document.getElementById('amount').value
    let date=document.getElementById('date').value
    let category=document.getElementById('category').value

    let expense={
      name:name,
      amount:amount,
      date:date,
      category:category
    }
    console.log(expense)
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" id='name'/>
        <input type="number" name="amount" placeholder="Amount" id='amount' />
        <input type="date" name="date" placeholder="Date" id='date'/>
        <input type="text" name="category" placeholder="Category" id='category'/>
        <input type="submit" value="Add Expense" />
    </form>
    </div>
  )
}

export default NewExpense