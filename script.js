let form=document.getElementById('getData')


form.addEventListener('submit',getExpense)



function getExpense(e){
    e.preventDefault()
    let id=new Date().getTime()
    let amount=document.getElementById('expenseAmount').value
    let description=document.getElementById('expenseDesc').value
    let categoryOfItem=document.getElementById('category').value

    let expenseData={
        id,
        amount,
        description,
        categoryOfItem
    }

    localStorage.setItem(expenseData.id,JSON.stringify(expenseData))
    showData(expenseData)
}

function showData(expenseData){
    let parentListElem=document.getElementById('listOfExpense')
    let childListEle=document.createElement('li')

    childListEle.textContent=`${'₹'+expenseData.amount} amount has been charged for the ${expenseData.description} from the ${expenseData.categoryOfItem} category`
    parentListElem.appendChild(childListEle)



    let deleteBtn=document.createElement('button')
    deleteBtn.textContent='delete'
    childListEle.appendChild(deleteBtn)


    deleteBtn.onclick=()=>{
        localStorage.removeItem(expenseData.id,expenseData)
        parentListElem.removeChild(childListEle)
    }


    let editBtn=document.createElement('button')
    editBtn.textContent='edit expense'
    editBtn.onclick=()=>{
        localStorage.removeItem(expenseData.id,expenseData)
        parentListElem.removeChild(childListEle)
        document.getElementById('expenseAmount').value=expenseData.amount
        document.getElementById('expenseDesc').value=expenseData.description
        document.getElementById('category').value=expenseData.categoryOfItem

    }
    childListEle.appendChild(deleteBtn)
    childListEle.appendChild(editBtn)
    parentListElem.appendChild(childListEle)
}