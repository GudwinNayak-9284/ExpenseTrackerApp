import React, { useState } from 'react'
import './NewExpense.css'







const NewExpense = (props) => {
  const [date,setDate]=useState('')
  const [price,setPrice]=useState('')
  const [category,setCategory]=useState('')

  const submitHandler=(e) => {
    e.preventDefault()
    const expenseData={
      date,
      price,
      category
    }
    // console.log(expenseData)
    setDate('')
    setPrice('')
    setCategory('')
    props.onAddExpense(expenseData)
  }

//  const[userInput,setUserInput]=useState({
//     date:'',
//     price:'',
//     category:''
//   })

  const priceChangeHandler=(event)=>{
    setPrice(event.target.value)
    // setUserInput((prevState)=>{
    //   return{
    //   ...prevState,
    //     price:event.target.value
    //   }
    // })
  }
  const categoryChangeHandler=(event)=>{
    setCategory(event.target.value)
    // setUserInput((prevState)=>{
    //   return{
    //  ...prevState,
    //     category:event.target.value
    //   }
    // })
  }
  const dateChangeHandler=(event)=>{
    setDate(event.target.value)
    // setUserInput((prevState)=>{
    //       return{
    //       ...prevState,
    //         date:event.target.value
    //       }
    //     })
  } 

/*   const handleSubmit=(event)=>{
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
    } */
  return (
    <div className='expenseData'>
    {/* used onSubmit to get the form the data using vanilla js previously */}
    <form onSubmit={submitHandler}>
        {/* <input type="text" name="name" placeholder="Name" id='name'/> */}
        <input type="number" name="amount" placeholder="Amount" value={price} id='amount' onChange={priceChangeHandler}/>
        <input type="date" name="date" placeholder="Date" id='date' value={date} onChange={dateChangeHandler}/>
        <input type="text" name="category" placeholder="Category" value={category} id='category' onChange={categoryChangeHandler}/>
        <button type="submit">add expense</button>
    </form>
    </div>
  )
}

export default NewExpense