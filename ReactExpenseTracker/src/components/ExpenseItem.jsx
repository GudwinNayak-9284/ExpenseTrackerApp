import './ExpenseItem.css'
import { useState } from 'react'


const ExpenseItem = (props) => {
/* 
  const [price,changePrice]=useState(props.price)
  const month=props.date.toLocaleString('en-US',{month:'long'})
  const day=props.date.toLocaleString('en-US',{day:'2-digit'})
  const year=props.date.toLocaleString('en-US',{year:'numeric'}) */

  //  const onPriceChange=()=>{
  //   changePrice('100$')
  //  }
  return (
    <div className='expenseDetails'>
    <div className='expenseList'>
     {props.expenses.map((expense)=>(
        <div className='itemList'>
          <h2>{expense.category}</h2>
          <p>Amount: ${expense.price}</p>
          <p>Date:{expense.date.toLocaleString()}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ExpenseItem