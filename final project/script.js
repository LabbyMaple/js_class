// Variables
const forms = document.querySelectorAll("form");
const inputs = document.querySelectorAll("input") // Add code here...
const imageDisplays = document.querySelectorAll(".imageDisplay"); // Add code here...
const clear_btn = document.querySelector("#clear-btn"); // Add code here...
let img_link;
const section = document.querySelectorAll("section")

// Checks and displays the locally stored image if it exists for each form
for (let i = 0; i < forms.length; i++) {
  img_link = localStorage.getItem(i.toString())
  // Assign value to `img_link` variable
  // Add code here...
  if (img_link != null) {
    let new_img = document.createElement("img")
    new_img.src = img_link
    imageDisplays[i].appendChild(new_img)
    forms[i].innerHTML = "";
    // Hide the form and display the stored image
    // Add code here...
  }
}

// "submit" event listeners for each form
for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", (event) => {
    event.preventDefault();
    let img_link = inputs[i].value
    let new_img = document.createElement("img")
    new_img.src = img_link
    imageDisplays[i].appendChild(new_img)
    forms[i].innerHTML = "";
    localStorage.setItem(i.toString(), img_link)
  });
}

// deleteItem(i) Function: displays the form, empties the imageDisplay, and removes the image from local storage
const deleteItem = (i) => {
  // Add code here...
  
  i.parentNode.children[1].innerHTML = "";
  i.innerHTML = "";
  
  //let form = document.createElement("form")
  let new_p = document.createElement("p")
  let new_input = document.createElement("input")
  let new_btn = document.createElement("button")
  new_btn.setAttribute("type","submit")
  new_input.setAttribute("placeholder","e.g. https://image.png")
  new_p.textContent = "Add an image link"
  new_btn.textContent = "submit"
  //section[i].appendChild(form)
  i.appendChild(new_p)
  i.appendChild(new_input)
  i.appendChild(new_btn)
};

// Event listener for the clear button that clears the local storage and reloads the page when clicked. To reload the page, simple write location.reload();
// Add code here...
for (let i = 0; i < forms.length; i++) {
    clear_btn.addEventListener("click", function () {
        deleteItem(forms[i])
        localStorage.removeItem(i.toString())
    })}