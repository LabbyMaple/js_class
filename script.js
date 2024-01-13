// let x = 1;
// console.log(x);
// x = 2;
// console.log(x);

// const y = "lol";
// console.log(y);

// let numbers = [1,2,3,4,5,6];
// console.log(numbers);

// console.log(numbers[0])

// numbers.push(10)
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers[2] = "lol";
// console.log(numbers);

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// };

// let k = 0;
// while(k < numbers.length){
//     console.log(numbers[k]);
//     k++;
// }

// let num1 = 1;
// if (num1 != 1 || num1 == 2){
//     console.error("num1 lol 1")
// }
// else{
//     console.warn("num1 lolol 1"
//     )
// }

// let day = "Ice cream day"

// switch(day){
//     case "Sunday":
//         console.log("today is sunday")
//         break;
//     case "Monday":
//         console.log("monday")
//         break;
//     case "Tuesday":
//         console.log("today is tuesday")
//         break;
//     case "Wednesday":
//         console.log("today is wednesday")
//         break;
//     case "Thursday":
//         console.log("today is thursday")
//         break;
//     case "Friday":
//         console.log("today is Friday")
//         break;
//     case "Saturday":
//         console.log("today is saturday")
//         break;
//     default:
//         console.warn("President Lol of Loltown says " + day + " is lol")
// }

// function addition(g,b){
//     console.log(parseInt(g)+b)
// }

// addition("1" , 20);
// console.log("DOWN")


// let stuff = [1,2,3,4,5,6]
// function lol(stuff){
//     if (stuff.length <= 5){
//         for (let n = 0; n < stuff.length; n++){
//             console.log(stuff[n])
//         };
//     }
//     else{
//         console.error("sorry the array is too long")
//     }
// }
// lol(stuff)







let item1 = document.getElementById("item1");
console.log(item1);
item1.textContent = "hello";

item1.addEventListener("mouseover", function (){
    item1.style.fontSize = "60px"
})
item1.addEventListener("mouseleave", function (){
    item1.style.fontSize = "50px"
})

let counter = 0 

let button  = document.getElementById("button");
button.textContent = "lol here";

button.addEventListener("click", function (){
    counter++;
    if (counter == 1){
        button.style.backgroundColor = "green"
    }
    if (counter == 2){
        button.style.backgroundColor = "red"
    }
    if (counter == 3){
        button.style.backgroundColor = "blue"
    }
    if (counter == 4){
        button.style.backgroundColor = "yellow"
        counter = 0
    }

});


button.addEventListener("mouseleave", function (){
    button.style.backgroundColor = "black"
})

window.addEventListener("load", function (){
    this.alert("page has loled")
})


let h2 = document.getElementsByClassName("title");
h2[0].style.fontSize = "50px";

let items = document.getElementsByTagName("li");

for (let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = "yellow"
    items[i].addEventListener("mouseover", function (){
        items[i].style.fontSize = "70px"
    })
    items[i].addEventListener("mouseleave", function (){
        items[i].style.fontSize = "50px"
    })
};  

let title = document.getElementsByClassName("title");
title[0].style.fontSize = "30px";

window.addEventListener("keydown", function (event){
    console.log(event.key);
    if(event.key == "q" || event.key == "u" || event.key == "s" || event.key == "k" || event.key == "b"){
        title[0].style.color = "red";
    }
    if(event.key == "w" || event.key == "i" || event.key == "f" || event.key == "l" || event.key == "n"){
        title[0].style.color = "orange";
    }
    if(event.key == "e" || event.key == "o" || event.key == "g" || event.key == "z" || event.key == "m"){
        title[0].style.color = "yellow";
    }
    if(event.key == "r" || event.key == "p" || event.key == "h" || event.key == "x" || event.key == "["){
        title[0].style.color = "green";
    }
    if(event.key == "t" || event.key == "a" || event.key == "j" || event.key == "c" || event.key == ";"){
        title[0].style.color = "blue";
    }
    if(event.key == "y" || event.key == "s" || event.key == "k" || event.key == "v" || event.key == ","){
        title[0].style.color = "purple";
    }
    if(event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8" || event.key == "9" || event.key == "0"){
        title[0].style.color = "pink";
    }
});




class Student{
    constructor(name, grade, gpa){
        this.name = name
        this.grade = grade
        this.gpa = gpa
    }
}

let ethan = new Student("Ethan", 1, 0.1)
console.log("Oh no, Ethan the Failure's GPA is " + ethan.gpa)