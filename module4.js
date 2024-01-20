const button = document.getElementById("button");

setTimeout(function(){button.textContent = "hi"},3000)

const interval = setInterval(function(){console.log("CLICK OR ELSE")},2000)
button.addEventListener("click", function (){
    clearInterval(interval)
})