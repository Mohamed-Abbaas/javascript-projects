// for (let i = 0; i < 9; i++) {
//     let div = document.createElement("div");
//     div.className = "box";
//     div.classList.add(`box${i+1}`);
//     document.querySelector(".game-content").appendChild(div);
// }
let binar = 0;
let res = Math.floor( Math.random() * 2);
let rab = res;
let elements = document.querySelectorAll(".box") 
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");
elements.forEach((element) => {
        element.onclick = function () {
            binar = 1;
        if(res % 2 === 0) {
            res++;
            console.log(res);
            let move = document.createTextNode("X");
            this.appendChild(move);
            this.style.pointerEvents = "none";
            let text = document.createTextNode("O Turn");
            document.querySelector("header").textContent = "O Turn";
            if(                      
                (box1.innerHTML === box2.innerHTML &&  box1.innerHTML !== "" &&
                box1.innerHTML === box3.innerHTML)||
                (box1.innerHTML === box5.innerHTML && box1.innerHTML !== "" &&
                box1.innerHTML === box9.innerHTML) ||
                (box1.innerHTML === box4.innerHTML && box1.innerHTML !== "" &&
                box1.innerHTML === box7.innerHTML) ||
                (box2.innerHTML === box5.innerHTML && box2.innerHTML !== "" &&
                   box2.innerHTML === box8.innerHTML)||
                  (box3.innerHTML === box6.innerHTML && box3.innerHTML !== "" &&
                   box3.innerHTML === box9.innerHTML) ||
                  (box3.innerHTML === box5.innerHTML && box3.innerHTML !== "" &&
                  box3.innerHTML === box7.innerHTML) ||
                  (box4.innerHTML === box5.innerHTML && box4.innerHTML !== "" &&
                  box4.innerHTML === box6.innerHTML)||
                  (box7.innerHTML === box8.innerHTML && box7.innerHTML !== "" &&
                  box7.innerHTML === box9.innerHTML)
                  
                  )
                  {
                      document.querySelector("header").textContent = "X Is The Winner";
                    setTimeout(function() {
                        let span = document.createElement("span");
                        span.className = "big";
                        let rais = document.createTextNode(".");
                        span.appendChild(rais);
                        document.querySelector("header").appendChild(span);
                    }, 800);
                    setTimeout(function() {
                        let span = document.createElement("span");
                        span.className = "big";
                        let rais = document.createTextNode(".");
                        span.appendChild(rais);
                        document.querySelector("header").appendChild(span);
                    }, 1600);
                    setTimeout(function() {
                        let span = document.createElement("span");
                        span.className = "big";
                        let rais = document.createTextNode(".");
                        span.appendChild(rais);
                        document.querySelector("header").appendChild(span);
                    }, 2400);
                    setTimeout(function() {
                        location.reload();
                    }, 3200);
                }
                    if(res - rab === 9) {
                        document.querySelector("header").textContent= "Game Over none won";
                        setTimeout(function() {
                            let span = document.createElement("span");
                            span.className = "big";
                            let rais = document.createTextNode(".");
                            span.appendChild(rais);
                            document.querySelector("header").appendChild(span);
                        }, 800);
                        setTimeout(function() {
                            let span = document.createElement("span");
                            span.className = "big";
                            let rais = document.createTextNode(".");
                            span.appendChild(rais);
                            document.querySelector("header").appendChild(span);
                        }, 1600);
                        setTimeout(function() {
                            let span = document.createElement("span");
                            span.className = "big";
                            let rais = document.createTextNode(".");
                            span.appendChild(rais);
                            document.querySelector("header").appendChild(span);
                        }, 2400);
                        setTimeout(function() {
                            location.reload();
                        }, 3200);
                    }
            }
            else {
                    res++;
                    console.log(res);
                    let move = document.createTextNode("O");
                    this.appendChild(move);
                    this.style.pointerEvents = "none";
                    let text = document.createTextNode("X Turn");
                    document.querySelector("header").textContent = "X Turn";
                    if(                      
                        (box1.innerHTML === box2.innerHTML &&  box1.innerHTML !== "" &&
                        box1.innerHTML === box3.innerHTML)||
                        (box1.innerHTML === box5.innerHTML && box1.innerHTML !== "" &&
                        box1.innerHTML === box9.innerHTML) ||
                        (box1.innerHTML === box4.innerHTML && box1.innerHTML !== "" &&
                        box1.innerHTML === box7.innerHTML) ||
                        (box2.innerHTML === box5.innerHTML && box2.innerHTML !== "" &&
                        box2.innerHTML === box8.innerHTML)||
                        (box3.innerHTML === box6.innerHTML && box3.innerHTML !== "" &&
                        box3.innerHTML === box9.innerHTML) ||
                        (box3.innerHTML === box5.innerHTML && box3.innerHTML !== "" &&
                        box3.innerHTML === box7.innerHTML) ||
                        (box4.innerHTML === box5.innerHTML && box4.innerHTML !== "" &&
                        box4.innerHTML === box6.innerHTML)||
                        (box7.innerHTML === box8.innerHTML && box7.innerHTML !== "" &&
                        box7.innerHTML === box9.innerHTML)
                        
                        )
                        {
                            document.querySelector("header").textContent = "O is the Winner";
                            setTimeout(function() {
                                let span = document.createElement("span");
                                span.className = "big";
                                let rais = document.createTextNode(".");
                                span.appendChild(rais);
                                document.querySelector("header").appendChild(span);
                            }, 800);
                            setTimeout(function() {
                                let span = document.createElement("span");
                                span.className = "big";
                                let rais = document.createTextNode(".");
                                span.appendChild(rais);
                                document.querySelector("header").appendChild(span);
                            }, 1600);
                            setTimeout(function() {
                                let span = document.createElement("span");
                                span.className = "big";
                                let rais = document.createTextNode(".");
                                span.appendChild(rais);
                                document.querySelector("header").appendChild(span);
                            }, 2400);
                            setTimeout(function() {
                                location.reload();
                            }, 3200);
                        }
                        if(res - rab === 9) {
                            document.querySelector("header").textContent = "Game Over none won";
                            setTimeout(function() {
                                let span = document.createElement("span");
                                span.className = "big";
                                let rais = document.createTextNode(".");
                                span.appendChild(rais);
                                document.querySelector("header").appendChild(span);
                            }, 800);
                            setTimeout(function() {
                                let span = document.createElement("span");
                                span.className = "big";
                                let rais = document.createTextNode(".");
                                span.appendChild(rais);
                                document.querySelector("header").appendChild(span);
                            }, 1600);
                            setTimeout(function() {
                                let span = document.createElement("span");
                                span.className = "big";
                                let rais = document.createTextNode(".");
                                span.appendChild(rais);
                                document.querySelector("header").appendChild(span);
                            }, 2400);
                            setTimeout(function() {
                                location.reload();
                            }, 3200);
                        }                    
                    }
            }
        })

if(binar === 0) {
    let text = document.createTextNode("Start Game");
    document.querySelector("header").appendChild(text);
}
else {
    if (res === 2 % 0) {
        document.querySelector("header").appendChild(text);
    }
}






