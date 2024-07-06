// // Start Create more Boxes 
// for(let i = 11; i <=20; i++) {
//     let div = document.createElement("div");
//     div.className = "box";
//     let div2 = document.createElement("div");
//     div2.className = "face";
//     div2.classList.add("front");
//     let div3 = document.createElement("div");
//     div3.className = "face";
//     div3.classList.add("back");
//     let image = document.createElement("img");
//     image.src= `../images/${i}.jpg`;
//     div3.appendChild(image);
//     div.appendChild(div2);
//     div.appendChild(div3);
//     div.dataset.natural = `g${i}`;
//     document.querySelector(".container").appendChild(div);
// }
// for(let i = 11; i <=20; i++) {
//     let div = document.createElement("div");
//     div.className = "box";
//     let div2 = document.createElement("div");
//     div2.className = "face";
//     div2.classList.add("front");
//     let div3 = document.createElement("div");
//     div3.className = "face";
//     div3.classList.add("back");
//     let image = document.createElement("img");
//     image.src= `../images/${i}.jpg`;
//     div3.appendChild(image);
//     div.appendChild(div2);
//     div.appendChild(div3);
//     div.dataset.natural = `g${i}`;
//     document.querySelector(".container").appendChild(div);
// }
// End Create more Boxes 
let mohem = document.querySelector(".starting h2");
mohem.addEventListener("click", function() {
    document.querySelector(".starting").style.display = "none";
    let name = prompt("What's Your Name");
    document.querySelector(".the-begining .welcome span").innerHTML = name;

})
let elements = document.querySelectorAll(".box");
elements.forEach((elem) => {
    elem.style.order = Math.floor(Math.random() * elements.length);
})
let wrongTries = 0;
elements.forEach((elem) => {
    elem.addEventListener("click", function () {
        elem.classList.add("show");
        let shows = document.querySelectorAll(".show");
        if(shows.length === 2) {
            if(shows[1].dataset.natural === shows[0].dataset.natural) {
                shows[1].classList.remove("show");
                shows[0].classList.remove("show");
                shows[0].classList.add("has-match");
                shows[1].classList.add("has-match");
                shows[1].style.pointerEvents = "none";
                shows[0].style.pointerEvents = "none";
                document.getElementById("success").play();
                if(document.querySelectorAll(".has-match").length === document.querySelectorAll(".box").length) {
                    let div = document.createElement("div");
                    div.className = "congrat";
                    let heading = document.createElement("h2");
                    let text = document.createTextNode("Congratulations")
                    heading.appendChild(text);
                    let div2 = document.createElement("div");
                    div2.className = "contain";
                    div2.appendChild(heading);
                    let icon = document.createElement("i");
                    div2.appendChild(icon);
                    icon.classList.add("fa");
                    icon.classList.add("fa-refresh");
                    div.appendChild(div2)
                    document.getElementById("finished").play();
                    document.body.appendChild(div);
                    icon.addEventListener("click", function () {
                        div.style.display = "none";
                        document.querySelectorAll(".box").forEach((box) => {
                            box.style.pointerEvents = "auto";
                            box.classList.remove("has-match");
                        })
                        document.querySelector(".starting").style.display = "flex";
                        wrongTries = 0;
                        document.querySelector(".the-begining .score span").innerHTML = 0;
                        
                    })
                }
            }
            else {
                document.getElementById("fail").play();
                wrongTries++;
                document.querySelector(".the-begining .score span").innerHTML = wrongTries;
                document.querySelector(".container").style.pointerEvents = "none";
                setTimeout(function () {
                    document.querySelector(".container").style.pointerEvents = "auto";
                }, 800);
                setTimeout(function() {
                    shows[1].classList.remove("show");
                    shows[0].classList.remove("show");
                } 
                , 1000);
            }
            
        }
    })
})