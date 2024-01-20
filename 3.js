let progress = 0

let hover = document.getElementById("hover");
if (progress == 0){
    hover.addEventListener("mouseover", function (){
    
    progress = 1
})
}
console.log(progress)

let click = document.getElementById("click");

    click.addEventListener("click", function (){
        if (progress == 1){
            window.alert("You better know multiplication")
            let answer = window.prompt("What's 15x30?")
            if (answer == 450){
                click.style.backgroundColor = "lightgray"
                progress = 2
            }
}
})


let key = document.getElementById("key");

window.addEventListener("keydown", function (event){
    if(progress == 2){
        console.log(event.key)
        if (event.key == " "){
            key.style.backgroundColor = "lightgray"
            progress = 3
}
    }

})

let mcl = document.getElementById("mcl");
window.addEventListener("keydown", function (event){
    if(progress == 3){
        if (event.key == "e"){
        mcl.style.backgroundColor = "lightgray"
        progress = 4
}
    }

    
})

let lastnumber = document.getElementById("lastnumber");
window.addEventListener("keydown", function (event){
    if(progress == 4){
        if (event.key == "5"){
        lastnumber.style.backgroundColor = "lightgray"
        progress = 5
}
    }

    
})


let stuff = document.getElementById("stuff");
window.addEventListener("keydown", function (event){
    if(progress == 5){
        if (event.key == "d"){
        stuff.style.backgroundColor = "lightgray"
        progress = 6
}
    }

    
})

setTimeout(function(){hover.style.backgroundColor = "pink"},3000)
setInterval(function(){click.textcontent+="hi"},1000)