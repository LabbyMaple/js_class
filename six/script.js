let input = document.querySelector("input")
let button = document.querySelector("button")
let ol = document.querySelector("ol")
let form = document.querySelector("form")

let editing = false;
let editingItem;

let list = [];

input.focus()

if (localStorage.getItem("list") != null){
    list = JSON.parse(localStorage.getItem("list"))
    for (let i = 0; i < list.length; i++){
        ol.innerHTML +=`
        <li>
            <p>${list[i]}</p>
            <div>
                <i class = "fa-solid fa-pen-to-square" onClick = "editItem(this)"></i>
                <i class = "fa-solid fa-trash" onClick = "deleteItem(this)"></i>
            </div>
        </li>`;
    }
}

let newitem = document.createElement("li")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!editing){
        let ol = document.querySelector("ol")
        ol.innerHTML +=`
        <li>
            <p>${input.value}</p>
            <div>
                <i class = "fa-solid fa-pen-to-square" onClick = "editItem(this)"></i>
                <i class = "fa-solid fa-trash" onClick = "deleteItem(this)"></i>
            </div>
        </li>`;

        list.push(input.value)
        localStorage.setItem("list", JSON.stringify(list))
        input.value = "";

    } else {
        editingItem.textContent = input.value;
        list = Array.from(document.getElementsByTagName("p")).map((item) => item.textContent)
        localStorage.setItem("list", JSON.stringify(list))
        input.value = "";
        editing = false
    }
    input.focus()
})

form.addEventListener("reset", (event) => {
    event.preventDefault()
    clear()
    localStorage.clear()
    list = []
    input.focus()
})
function clear (list){
    let pElements = document.getElementsByTagName("p")
    for (let i = 0; i < pElements.length; i++){
        pElements[i].parentElement.parentElement.remove();
    }
    let newOl = document.createElement("ol")
    form.appendChild(newOl)
}
const editItem = (item) => {
    editing = true
    editingItem = item.parentElement.previousElementSibling;
    input.value = editingItem.textContent
}

const deleteItem = (item) => {
    item.parentElement.parentElement.remove()
    list = Array.from(document.querySelectorAll("li p")).map(
        (p)=>p.textContent
    )
    localStorage.setItem("list", JSON.stringify(list))
}

const fruits = ["apple", "banana", "cranberry", "dragonfruit", "grape", "honeymelon", "jackfruit"]
fruits.forEach((item) => console.log(item));

function add(num){
    return num+5
}
const numbers = [1,2,3,4]
const new_array = numbers.map(add)
console.log(new_array)

const numbers2 = [4,12,1,3,9]
const filtered_array = numbers2.filter((num) => num<5)
console.log(filtered_array)

const array = Array.from(document.getElementsByTagName("p"))
array.forEach((item) => console.log(item.textContent))

localStorage.setItem("test","this is the value");

console.log(localStorage.getItem("test"))