//Select DOM
const expenseInput = document.querySelector('#expenses')
const descriptionInput = document.querySelector('#description')
const expenseTypeInput = document.querySelector('#expense-type')
const addBtn = document.querySelector('#add-btn')
const expenseList = document.querySelector('.expense-list')



//Add event listeners
document.addEventListener('DOMContentLoaded', getExpenses)
addBtn.addEventListener('click', addExpense)



//Fuctions
function addExpense(event) {
    //Prevent default behaviour
    event.preventDefault()

    //Create dynamic id from date
    const id = new Date().getTime().toString()

    //Extract values from input fields
    const expense =  expenseInput.value
    const description = descriptionInput.value
    const expenseType = expenseTypeInput.value

    //Create object of data to be stored in local storage
    const expenseObj = {
        id,
        expense,
        description,
        expenseType
    }

    //Create expense div
    const expenseDiv = document.createElement('div')
    expenseDiv.classList.add('expense-div')
    expenseDiv.setAttribute("id", id)
    
    //Create list
    const newExpense = document.createElement("li");
    newExpense.innerText = expense

    const newDescription = document.createElement("li")
    newDescription.innerText = description

    const newExpenseTypeInput = document.createElement("li")
    newExpenseTypeInput.innerText = expenseType

    expenseDiv.appendChild(newExpense)
    expenseDiv.appendChild(newDescription)
    expenseDiv.appendChild(newExpenseTypeInput)

    //Create delete Button
    const deleteButton = document.createElement("button")
    deleteButton.innerText = 'Delete'
    deleteButton.classList.add("delete-btn")
    expenseDiv.appendChild(deleteButton)

    //Add event listener to delete button
    deleteButton.addEventListener('click', deleteExpense)

    //Create edit button
    const editButton = document.createElement("button")
    editButton.innerText = 'Edit'
    editButton.classList.add('edit-btn')
    expenseDiv.appendChild(editButton)

    //Add event listener to edit button
    editButton.addEventListener('click', editExpense)
    
    //Attach final expense, description and expenseType
    expenseList.appendChild(expenseDiv)

    saveToLocalStorage(expenseObj)

    expenseInput.value = ''
    descriptionInput.value = ''
    expenseTypeInput.value = ''
}

function saveToLocalStorage(expenseObj) {
    let expenseData = JSON.parse(localStorage.getItem('expenseData')) || []
    expenseData.push(expenseObj)
    localStorage.setItem('expenseData', JSON.stringify(expenseData))

}



function deleteExpense(event) {
    
    //Get index of object with required id from local storage
    const requiredId = event.target.parentElement.id
    const arrayOfExpenseObjects = JSON.parse(localStorage.getItem('expenseData'))
    const requiredIndex = arrayOfExpenseObjects.findIndex(function(obj) {
        return obj.id == requiredId
    })
    
    arrayOfExpenseObjects.splice(requiredIndex, 1)
    localStorage.setItem('expenseData', JSON.stringify(arrayOfExpenseObjects))

    const toRemove = event.target.parentElement
    toRemove.remove()
}

function editExpense(event) {
    //Get index of object with required id from local storage
    const requiredId = event.target.parentElement.id
    const arrayOfExpenseObjects = JSON.parse(localStorage.getItem('expenseData'))
    const requiredIndex = arrayOfExpenseObjects.findIndex(function(obj) {
        return obj.id == requiredId
    })
    const requiredObj = arrayOfExpenseObjects[requiredIndex]
    
    //Populate input fields with corresponding values from required object
    expenseInput.value = requiredObj.expense
    descriptionInput.value = requiredObj.description
    expenseTypeInput.value = requiredObj.expenseTypeInput

    //Delete required object from local storage
    arrayOfExpenseObjects.splice(requiredIndex, 1)
    localStorage.setItem('expenseData', JSON.stringify(arrayOfExpenseObjects))

    //Remove required object's data from screen
    const toRemove = event.target.parentElement
    toRemove.remove()
}

function getExpenses(event) {
    //Read data from local storage
    const arrayOfExpenseObjects = JSON.parse(localStorage.getItem('expenseData'))
    
    //Put data of each object on screen
    arrayOfExpenseObjects.forEach(element => {
    
    //Create expense div
    const expenseDiv = document.createElement('div')
    expenseDiv.classList.add('expense-div')
    expenseDiv.setAttribute("id", element.id)
    
    //Create list
    const newExpense = document.createElement("li");
    newExpense.innerText = element.expense

    const newDescription = document.createElement("li")
    newDescription.innerText = element.description

    const newExpenseTypeInput = document.createElement("li")
    newExpenseTypeInput.innerText = element.expenseType

    expenseDiv.appendChild(newExpense)
    expenseDiv.appendChild(newDescription)
    expenseDiv.appendChild(newExpenseTypeInput)

    //Create delete Button
    const deleteButton = document.createElement("button")
    deleteButton.innerText = 'Delete'
    deleteButton.classList.add("delete-btn")
    expenseDiv.appendChild(deleteButton)

    //Add event listener to delete button
    deleteButton.addEventListener('click', deleteExpense)

    //Create edit button
    const editButton = document.createElement("button")
    editButton.innerText = 'Edit'
    editButton.classList.add('edit-btn')
    expenseDiv.appendChild(editButton)

    //Add event listener to edit button
    editButton.addEventListener('click', editExpense)
    
    //Attach final expense, description and expenseType
    expenseList.appendChild(expenseDiv)

    expenseInput.value = ''
    descriptionInput.value = ''
    expenseTypeInput.value = ''
    });

}