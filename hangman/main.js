let variable = "abcdefghijklmnopqrstuvwxyz";
variable.split("").forEach((letter) => {
    let sp = document.createElement("span");
    sp.className = "fagr";
    let tex = document.createTextNode(letter);
    sp.appendChild(tex);
    document.querySelector(".letters").appendChild(sp);
})
// First Array for The first Category;
let metroidVania = ["Metroid Prime Remastered", "Hollow knight", "Ori and the will of the wisps", "Castle Vania"];
// second Array for The second Category;
let openWorld = ["The Witcher", "Red Dead Redemption", "GTA", "Elden Ring", "Zelda Breath of the wild"];
// third Array for The third Category;
let actionAdventure = ["The Last Of Us", "God Of War", "Metal Gear Solid", "Spider Man"];
// fourth Array for The fourth Category;
let tellTale = ["Detroit Become Human", "The Walking Dead", "The Wolf Amung Us", "L A Noire"];
// start taking a category randomly
let num = Math.floor(Math.random() * 4);
let category = "r";
let master;
if(num === 0) {
    category = "MetroidVAnia";
    master = metroidVania;
}
else if(num === 1) {
    category = "Open World";
    master = openWorld;
}
else if(num === 2) {
    category = "Action Adventure";
    master = actionAdventure;
}
else {
    category = "Tell Tale";
    master = tellTale;
}
document.querySelector(".starting .category span").innerHTML = category;
// End taking a category randomly
// Start Taking a random word from the category 
let rand2 = Math.floor(Math.random() * master.length);
master[rand2].split("").forEach( (letter) => {
    if(letter === " ") {
        let spa = document.createElement("span");
        spa.className = "space";
        document.querySelector(".letters-guess").appendChild(spa);
    }
    else {
        let spa = document.createElement("span");
        spa.className = "letter";
        document.querySelector(".letters-guess").appendChild(spa);
        spa.classList.add(`${letter.toLowerCase()}`);
        spa.classList.add(`a-letter`);

    }
})
// End Taking a random word from the category 
// Start responsing 
let wrongTries = 0;
let trueTries = 0;
document.querySelectorAll(".fagr").forEach((letter) => {
    letter.addEventListener("click", function() {
        if(document.querySelectorAll(`.${letter.innerHTML}`).length === 0)
        {
            wrongTries++;
            if(wrongTries === 1) {
                document.querySelector(".stand").style.display = "block"
            }
            if(wrongTries === 2) {
                document.querySelector(".column").style.display = "block"
            }
            if(wrongTries === 3) {
                document.querySelector(".hang").style.display = "block"
            }
            if(wrongTries === 4) {
                document.querySelector(".rope").style.display = "block"
            }
            if(wrongTries === 5) {
                document.querySelector(".head").style.display = "block"
            }
            if(wrongTries === 6) {
                document.querySelector(".stomach").style.display = "block"
            }
            if(wrongTries === 7) {
                document.querySelector(".arms").style.display = "block"
            }
            if(wrongTries === 8) {
                document.querySelector(".legs").style.display = "block";
                setTimeout(() => {
                    let div = document.createElement("div");
                    div.className = "ending";
                    let endIn = document.createElement("div");
                    endIn.className = "ending-info";
                    let heading = document.createElement("h2");
                    let icon = document.createElement("i");
                    icon.classList.add("icon");
                    let tex = document.createTextNode("You have committed 8 mistakes you lost");
                    heading.appendChild(tex);
                    icon.classList.add("fa");
                    icon.classList.add("fa-refresh");
                    endIn.appendChild(heading);
                    endIn.appendChild(icon);
                    div.appendChild(endIn);
                    document.body.appendChild(div);
                    icon.addEventListener("click", function() {
                        location.reload();
                    })
                }, 500)
            }
            letter.classList.add("clicked");
            document.getElementById("fail").play();
        }
        else {
            letter.classList.add("clicked");
            document.getElementById("success").play();
            for(let i = 0; i < document.querySelectorAll(`.${letter.innerHTML}`).length; i++) {
                trueTries++;
                document.querySelectorAll(`.${letter.innerHTML}`)[i].innerHTML = letter.innerHTML;
            }
            if(document.querySelectorAll("a-letter").length === trueTries) {
                let div = document.createElement("div");
                    div.className = "winning";
                    let endIn = document.createElement("div");
                    endIn.className = "winning-info";
                    let heading = document.createElement("h2");
                    let icon = document.createElement("i");
                    icon.classList.add("icon");
                    let tex = document.createTextNode("Congratulations you won");
                    heading.appendChild(tex);
                    icon.classList.add("fa");
                    icon.classList.add("fa-refresh");
                    endIn.appendChild(heading);
                    endIn.appendChild(icon);
                    div.appendChild(endIn);
                    document.body.appendChild(div);
                    icon.addEventListener("click", function() {
                        location.reload();
                    })
            }
        }
    })
})
// End responsing 