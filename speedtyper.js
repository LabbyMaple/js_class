// For each variable, select the HTML element needed
// add code here...
const settingsForm = document.getElementById('settings-form');;
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score-container');
const timeEl = document.getElementById('time-container');
const endgameEl = document.getElementById('end-game-container');
const finalScore = document.getElementById('finalscore');
const scorenum = document.getElementById('score')
const timenum = document.getElementById('time')


// Create a variable with an array of words for the game
// add code here ...
let hwords = ["felis catus", "canis lupus", "hydrochoerus hydrochaeris", "equus caballus", "ambystoma mexicanum", "panthera leo", "bos taurus", "equus asinus", "panthera tigris", "psychrolutes marcidus", "canis lupus", "phascolarctos cinereus", "rangifer tarandus", "selachimorpha", "mustela putorius furo", "cavia porcellus", "", "procyon lotor", "orcinus orca", "", "ovis aries"]
let mwords = ["serpentes", "cricetine", "serpentes", "ursidae", "cricetinae", "aranea", "testudines", "cervidae", "anura", "hippopotomus amphibius", "canis lupus", "araneae", "rangifer tarandus", "selachimorpha", "testudines", "cavia porcellus", "cervidae", "procyon lotor", "orcinus orca", "anura", "ovis aries"]
let ewords = ["capybara", "hamster", "axolotl", "blobfish", "guinea pig", "raccoon", "komodo dragon", "coyote", "leopard", "giraffe", "chinchilla", "platypus", "scorpion", "squirrel", "cat", "dog", "wolf", "goat", "cattle", "otter", "hyena"]

// Initialize a score and time variable
// add code here...
let score = 0;
let time = 10;

// *************** GIVEN CODE: NO NEED TO CHANGE ***************
// Initialized randomWord variable
let randomWord;

// Focuses on the input box
text.focus();

// getRandomWord() Function: returns random word from array when called
function getRandomWord() {
  
  if (difficulty == "hard"){
    return hwords[Math.floor(Math.random() * hwords.length)];
  }
  if (difficulty == "medium"){
    return mwords[Math.floor(Math.random() * mwords.length)];
  }
  if (difficulty == "easy"){
    return ewords[Math.floor(Math.random() * ewords.length)];
  }
}


// Settings select
let difficulty = "easy";

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
});

// *********************************************************
let pause = document.getElementById("pause");
    pause.addEventListener("click", function (){
        time = 10
})


// FUNCTIONS

// Create a function that displays a random word to the webpage. Use the 'randomWord' variable to store to word.
function addWordToDOM() {
  // add code here...
  randomWord = getRandomWord()
  word.textContent = randomWord
  console.log(randomWord)
}

// Create a function that increments the score and displays it to the webpage.
function updateScore() {
  // add code here...
  score += 1
  scorenum.textContent = score
}

// Create a function to display the score and game over screen.
function gameOver() {
  // add code here...
  finalScore.textContent = "Final Score: " + score
  endgameEl.style.display = "block"
}

// Create a function that decrements the time and displays it to the webpage.
function updateTime() {
  // add code here...
  time -= 1
  timenum.textContent = time


  // After you have created the `timeInterval` variable below, add code to check if time is up, then clear the time interval and display the game over screen.
  // add code here...
  if (time <= 0){
    clearInterval(timeInterval)
    gameOver()
  }
}

// Create a 'timeInterval' variable that updates the time every 1 second.
// add code here...
let timeInterval = setInterval(function(){updateTime()},1000)


// Call a function to display the first word to the webpage.
// add code here...

addWordToDOM()
updateScore()
updateTime()

// EVENT LISTENERS

// This event listener listens for an input in the text box and when triggered, passes in the event as a variable 'e' and stores the user's inputed text in a variable 'insertedText'.
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  // Check if the user's input matches the word displayed on the webpage, then:
  // 1. display a new word
  // 2. update the score
  // 3. clear the input box by setting e.target.value = ""
  // 4. if the difficulty is hard, add 2 more seconds to the time, if the difficulty is medium, add 3 more seconds, else add 5 more seconds
  // 5. lastly, update the time

  // add code here...
  if (insertedText == randomWord){
    addWordToDOM()
    updateScore()
    e.target.value = ""
    if (difficulty == "hard"){
      time+=2
    }
    if (difficulty == "medium"){
      time += 3
    }
    if (difficulty == "easy"){
      time += 5
    }

  }

});