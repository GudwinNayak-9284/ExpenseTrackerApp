import './ExpenseItem.css'
import { useState } from 'react'


const ExpenseItem = (props) => {

  const [price,changePrice]=useState(props.price)
  const month=props.date.toLocaleString('en-US',{month:'long'})
  const day=props.date.toLocaleString('en-US',{day:'2-digit'})
  const year=props.date.toLocaleString('en-US',{year:'numeric'})

   const onPriceChange=()=>{
    changePrice('100$')
   }
  return (
    <div className='expenseDetails'>
    <div className='expenseList'>
    <h3>{month}/<span>{day}</span>/<span>{year}</span></h3>
    <h3>{props.title}</h3>
    <h3>{price}</h3>
    <button onClick={onPriceChange}>change price</button>
    </div>
    </div>
  )
}

export default ExpenseItem