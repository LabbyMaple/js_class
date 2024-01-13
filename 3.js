let progress = 0

let hover = document.getElementById("hover");
if (progress == 0){
    hover.addEventListener("mouseover", function (){
    hover.style.backgroundColor = "lightgray"
    progress = 1
})
}
console.log(progress)

let click = document.getElementById("click");

    click.addEventListener("click", function (){
        if (progress == 1){
    window.alert("You better know multiplication...")
    let answer = window.prompt("What's 15x30?")
    if (answer == "lol"){
        click.style.backgroundColor = "lightgray"
    }
}
})


let key = document.getElementById("key");
window.addEventListener("keydown", function (){
    key.style.backgroundColor = "lightgray"
    
})

let mcl = document.getElementById("mcl");
window.addEventListener("keydown", function (event){
if (event.key == "e"){
    mcl.style.backgroundColor = "lightgray"
}
    
})