/*
  Advices
  - Always Check The Console
  - Take Your Time To Name The Identifiers
  - DRY

  Steps To Create The Project
  [01] Create HTML Markup
  [02] Add Styling And Separate From Logic
  [03] Create The App Logic
  ---- [01] Add Levels
  ---- [02] Show Level And Seconds
  ---- [03] Add Array Of Words
  ---- [04] ِAdd Start Game Button
  ---- [05] Generate Upcoming Words
  ---- [06] Disable Copy Word And Paste Event + Focus On Input
  ---- [07] Start Play Function
  ---- [08] Start The Time And Count Score
  ---- [09] Add The Error And Success Messages
  [04] Your Trainings To Add Features
  ---- [01] Save Score To Local Storage With Date
  ---- [02] Choose Levels From Select Box
  ---- [03] Break The Logic To More Functions
  ---- [04] Choose Array Of Words For Every Level
  ---- [05] Write Game Instruction With Dynamic Values
  ---- [06] Add 3 Seconds For The First Word
*/
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
document.querySelector(".words").innerHTML = "Words Will Show Here";
// Start difficulty 
// const difficulties = ["Easy", "Normal", "Hard"];
// let difficulty = difficulties[rand2];
// document.querySelector(".difficulty").textContent = `[ ${difficulty} ]`;
// End difficulty 
// Start Duration 
let duration = 0;
let difficulty = 0
// if(difficulty === "Easy") {
//     duration = "5";
// }
// else if(difficulty == "Normal") {
//     duration = "3";
// }
// else {
//     duration = "2";
// }
document.querySelector(".duration").textContent = `[ ${duration} ]`;
// End Duration   
// Start Chosen Word




let time = 0;

document.querySelector(".score").innerHTML = 0;

// End Chosen Word
// Start Set Total 
document.querySelector(".total").textContent = words.length;
// End Set Total 
document.querySelector("input[type='text']").onpaste = function() {
    return false;
}
let input = document.querySelector("input[type='text']");
document.querySelector(".start").addEventListener("click",  function() {

    document.querySelector(".start").remove();
    document.querySelector("input[type='text']").focus();
    document.querySelectorAll("input[type='radio']").forEach((elem) => {
        if(elem.checked) {
            difficulty = elem.value;
        }
    })
    if(difficulty === "normal") {
        time = 4;
    }
    else if(difficulty === "hard") {
        time = 3;
    }
    else {
        time = 5;
    }
    document.querySelector(".diffi").remove();
        document.querySelector(".duration").innerHTML = time;
        document.querySelector(".the-second").innerHTML = time;
        document.querySelector(".difficulty").innerHTML = `[${difficulty}]`;
        getWordFunction();
        
})
function getWordFunction() {
    let word = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(word);
    document.querySelector(".word").classList.add("playing");
    document.querySelector(".word").textContent = word;
    words.splice(wordIndex, 1);
    document.querySelector(".words").innerHTML = "";
    words.forEach((word) => {
        let span = document.createElement("span");
        span.className = "span";
        span.innerHTML = word;
        document.querySelector(".words").appendChild(span);
    })  
    startPlaying();
}
function startPlaying() {
    if(difficulty === "normal") {
        time = 4;
    }
    else if(difficulty === "easy") {
        time = 5;
    }
    else {
        time = 3;
    }
    document.querySelector(".duration").innerHTML = time;
    document.querySelector(".the-second").innerHTML = time;
    const timer = setInterval(() => {
        document.querySelector(".the-second").innerHTML--;
        document.querySelector(".duration").innerHTML--;
        if(document.querySelector(".duration").innerHTML === "0"){
            clearInterval(timer);
            if(document.querySelector(".word").innerHTML.toLowerCase() === input.value.toLowerCase()) {
                document.querySelector(".score").innerHTML++;
                input.value = "";
                if(words.length > 0) {
                    getWordFunction();
                }
                else 
                    document.querySelector(".result2").innerHTML = "Congratulations";
            }
            else {
                document.querySelector(".result").innerHTML = "Game Over";
            }
        }
    }, 1000)
}