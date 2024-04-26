// Variables
// create your variables here...
const img = document.querySelector("#menu img");
const h2 = document.querySelector("#menu h2")
const p = document.getElementsByTagName("p")
const body = document.getElementsByTagName("body")

let selector = 0

img.src = "https://raw.githubusercontent.com/LabbyMaple/js_class/main/green-tea-wight-loss-1643990040%20(1).jpg"
h2.textContent = "Tea"
p[0].textContent = "Green, Black, English, Chai"
p[1].textContent = "$5.00"

let stuff = document.getElementsByTagName("li")

const drinkBtn = stuff[0];
const appetizerBtn = stuff[1];
const sideBtn = stuff[2];
const entreeBtn = stuff[3];
const dessertBtn = stuff[4];

class fooditem{
  constructor(img,name,price,desc){
    this.img = img
    this.name = name
    this.price = price
    this.desc = desc
  }
}


// Menu Class
class Menu {
  // add a constructor here...
  constructor(img, name, price, desc){
    this.img = img
    this.name = name
    this.price = price
    this.desc = desc
  }
  display(){
    img.src = this.img
    h2.textContent = this.name
    p[0].textContent = this.desc
    p[1].textContent = this.price
  }
  
}

function clearSections(){
  sections = document.querySelectorAll("section")
  for(let i = 0;i<sections.length;i++){
    sections[i].remove()
  }
}

// Objects
// create 5 Menu objects here...

stuff.item(0).textContent = "Drink"
stuff.item(1).textContent = "Appetizer"
stuff.item(2).textContent = "Side"
stuff.item(3).textContent = "Entree"
stuff.item(4).textContent = "Dessert"

// const drink = new Menu("https://raw.githubusercontent.com/LabbyMaple/js_class/main/green-tea-wight-loss-1643990040%20(1).jpg", "Tea", "$3", "Green, Black, English, Chai");
// const appetizer = new Menu("/edamame.jpg", "Edamame", "$7", "Salted, Unsalted, Spicy");
// const side = new Menu("/sushi.webp", "Sushi/Sashimi", "$3 per piece", "Rolls: California, Spider, Dragon; Sushi: Bluefin, Salmon, Shrimp");
// const entree = new Menu(parameter, parameter, parameter, parameter);
// const dessert = new Menu(parameter, parameter, parameter, parameter);


// Listens for when the webpage loads
window.addEventListener("load", () => {
  createDrinks()
});

// Button Event Listeners
// add code here...
function clearstuff(){
  for(let i = 0;i<stuff.length; i++){
    stuff[i].style.textDecoration = ""
  }
}
function createDrinks(){
  clearstuff()
  drinkBtn.style.textDecoration = "underline"
  selector = 0
  clearSections()

  for(let i = 0; i<drinkItems.length;i++){
    let newsection = document.createElement("section")
    let newImg = document.createElement("img")
    let newName = document.createElement("h2")
    let newDesc = document.createElement("p")
    let newPrice = document.createElement("p")
    let div = document.createElement("div")
    newName.textContent = drinkItems[i].name
    newDesc.textContent = drinkItems[i].desc
    newPrice.textContent = drinkItems[i].price
    newImg.src = drinkItems[i].img
    newsection.appendChild(newImg)  
    newsection.appendChild(div)
    div.appendChild(newName)
    div.appendChild(newDesc)
    div.appendChild(newPrice)
    newsection.id = "menu"
    body[0].appendChild(newsection)
  }
  };

function createItems(list){
  for(let i = 0; i<list.length;i++){
    let newsection = document.createElement("section")
    let newImg = document.createElement("img")
    let newName = document.createElement("h2")
    let newDesc = document.createElement("p")
    let newPrice = document.createElement("p")
    let div = document.createElement("div")
    newName.textContent = list[i].name
    newDesc.textContent = list[i].desc
    newPrice.textContent = list[i].price
    newImg.src = list[i].img
    newsection.appendChild(newImg)  
    newsection.appendChild(div)
    div.appendChild(newName)
    div.appendChild(newDesc)
    div.appendChild(newPrice)
    newsection.id = "menu"
    body[0].appendChild(newsection)
}}
stuff[0].style.textDecoration = "underline"


drinkItems = [
  new fooditem("https://raw.githubusercontent.com/LabbyMaple/js_class/main/green-tea-wight-loss-1643990040%20(1).jpg", "Tea","$3","Green, Black, English, Chai"),
  new fooditem("https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Bubble-Tea-81ba83b.png?quality=90&resize=556,505","Boba","$3", "Strawberry, Matcha, Taro, Jasmine")
]
appetizerItems = [
  new fooditem("https://upload.wikimedia.org/wikipedia/commons/e/e7/Edamame_by_Zesmerelda_in_Chicago.jpg", "Edamame", "$7", "Salted, Unsalted, Spicy"),
  new fooditem("https://www.justonecookbook.com/wp-content/uploads/2020/06/Yakitori-6177-I.jpg", "Yakitori", "$4 3 piece, $6 5 piece")
]
sideItems = [
  new fooditem("https://ik.imagekit.io/awwybhhmo/satellite_images/japanese/beyondmenu/hero/16.jpg?tr=w-3840,q-50", "Sushi", "$3 per piece", "Rolls: California, Spider, Dragon; Sushi: Bluefin, Salmon, Shrimp"),
  new fooditem("https://recipes.net/wp-content/uploads/2020/12/shrimp-tempura-recipe-300x200.jpg", "Tempura", "$5 5 piece, $8 10 piece","Shrimp, Vegetable, Mixed")
]
entreeItems = [
  new fooditem("https://subarashi.nl/wp-content/uploads/2021/06/Z2.jpg", "Bento Box", "$10", "Regular, Beef Tongue, Vegetable, Pork"),
  new fooditem("https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg", "Ramen", "$9", "Beef, Tonkatsu, House, Spicy")
]
dessertItems = [
  new fooditem("https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-07-mochi%2FMochi-Ice-Cream_17700jpg", "Mochi", "$2 per piece", "Strawberry, Matcha, Vanilla, Green Tea")
]
drinkBtn.addEventListener("click", function () {
  createDrinks()
  }
);

appetizerBtn.addEventListener("click", function () {
  clearstuff()
  appetizerBtn.style.textDecoration = "underline"
  selector = 1

  clearSections()

  createItems(appetizerItems)
  }
);

sideBtn.addEventListener("click", function () {
  clearstuff()
  sideBtn.style.textDecoration = "underline"
  selector = 2

  clearSections()

  createItems(sideItems)
});

entreeBtn.addEventListener("click", function () {
  clearstuff()
  entreeBtn.style.textDecoration = "underline"
  selector = 3

  clearSections()

  createItems(entreeItems)
});

dessertBtn.addEventListener("click", function () {
  clearstuff()
  dessertBtn.style.textDecoration = "underline"
  selector = 4

  clearSections()

  createItems(dessertItems)
});
