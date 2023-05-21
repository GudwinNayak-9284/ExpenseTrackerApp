
const ExpenseItem = () => {

  
    let date=new Date()
    // let currDate=date.getDate();
    // let currMonth=date.getMonth()+1
    // let currYear=date.getFullYear()
    // let obj={
    //   currDate,
    //   currMonth,
    //   currYear

    const month=date.toLocaleString('en-Us',{month:"long"})
    const day=date.toLocaleString('en-us',{day:'2-digit'})
    const year=date.toLocaleString('en-us',{year:'numeric'})

    function deleteItem(item){
      console.log(`delete Item ${item}`)
    }
  return (
    <div>
     <h1>Expense Item</h1>
     <div>
     <div className="expense-item">
            <div className="expense-item__date">{day}/{month}/{year}</div>
            <div><h3>smart watch</h3></div>
            <div className="expense-item__amount">$100</div>
            <button onClick={deleteItem}>Delete item</button>
        </div>
      </div>
  
    </div>
  )
}

export default ExpenseItem