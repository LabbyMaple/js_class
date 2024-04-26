let input = document.getElementById("addForm")
let list = document.getElementById("items")
let text = document.getElementById("item")
let filter = document.getElementById("filter")

function addItem(event){
    event.preventDefault()
    let newitem = document.createElement("li")
    newitem.className = "list-group-item"

    newitem.textContent = text.value

    let button = document.createElement("button")
    button.className = "btn btn-danger btn-sm float-right delete"
    newitem.appendChild(button)
    list.appendChild(newitem)
    button.textContent = "X"
    
    text.value = " "
}

function removeItem(event){
    let clicked = event.target.parentElement
    list.removeChild(clicked)
}

function filterItems(event){
    let search = event.target.value
    let allListItems = document.getElementsByTagName("li")

    Array.from(allListItems).forEach(function(element){
        let elementName = element.firstChild.textContent.toLowerCase()
        if (elementName.indexOf(search.toLowerCase()) != -1){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
    })
}

filter.addEventListener("keyup", filterItems)
list.addEventListener("click", removeItem)

input.addEventListener("submit", addItem)