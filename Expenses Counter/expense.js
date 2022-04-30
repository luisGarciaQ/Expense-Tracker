const nameInput = document.getElementById("name-el")
const dateInput = document.getElementById("date-el")
const amountInput = document.getElementById('amount-el')
const addBtn = document.getElementById("add-btn")
const clearBtn = document.getElementById("clear-btn")
const tableEl = document.getElementById("table-el")
const nameSavedExpenses = JSON.parse(localStorage.getItem("name"))
const dateSavedExpenses = JSON.parse(localStorage.getItem("date"))
const amountSavedExpenses = JSON.parse(localStorage.getItem("amount"))
let nameValue = ''
let dateValue = ''
let amountValue = ''
const nameSavedToStorage = []
const dateSavedToStorafe = []
const amountSavedToStorage = []


if (nameSavedExpenses){
    for(i=0 ; i< nameSavedExpenses.length ; i++){
        
        addText(nameSavedExpenses[i] , dateSavedExpenses[i], amountSavedExpenses[i] )
    }
}
else{
    console.log("storage empty")
}


function addText(name, date, amount){

    let nameValue = name
    let dateValue = date
    let amountValue = amount

    const newRow = document.createElement("tr")
    const deleteBtn = document.createElement("button")

    const nameTd = document.createElement('td')
    nameTd.innerText = nameValue
    nameSavedToStorage.push(nameValue)
    localStorage.setItem("name" , JSON.stringify(nameSavedToStorage))
    newRow.appendChild(nameTd)
    

    const dateTd = document.createElement('td')
    dateTd.innerText = dateValue
    dateSavedToStorafe.push(dateValue)
    localStorage.setItem("date" , JSON.stringify(dateSavedToStorafe)) 
    newRow.appendChild(dateTd)
    

    const amountTd = document.createElement('td')
    amountTd.innerText = amountValue
    amountSavedToStorage.push(amountValue)
    localStorage.setItem("amount" , JSON.stringify(amountSavedToStorage))

    newRow.appendChild(amountTd)

    deleteBtn.addEventListener("click" , function(e){
        const lineDelete = e.target
        lineParent = lineDelete.parentElement
        nameSavedToStorage.splice(nameSavedToStorage.indexOf(name), 1)
        localStorage.setItem("name" , JSON.stringify(nameSavedToStorage))
        lineParent.remove()
    })
    deleteBtn.innerText = "Delete"
    newRow.appendChild(deleteBtn)

    tableEl.appendChild(newRow)


     nameInput.value = ''
     dateInput.value = ''
     amountInput.value = ''


     clearBtn.addEventListener('click' , function(){
        localStorage.clear()
        newRow.remove()
    
    })
}

addBtn.addEventListener("click" , function(){
    addText(nameInput.value, dateInput.value, amountInput.value)   
    
})






