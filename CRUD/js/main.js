let createButton = document.querySelector(".create");
let title = document.querySelector(".title");
let totalValue = document.querySelector(".total-value");
let category = document.querySelector(".category");
let count = document.querySelector(".count");
let price = document.querySelector(".price");
let taxes = document.querySelector(".taxes");
let ads = document.querySelector(".ads");
let discount = document.querySelector(".discount");
let deleteAll = document.querySelector(".delete-all");
let deleted = document.querySelector(".deleted");
let search = document.querySelector(".search");
let search1 = document.querySelector(".search1");
let search2 = document.querySelector(".search2");
search1.onclick = function() {
    search1.classList.toggle("clicked");
    search2.classList.toggle("clicked");
    if(search1.classList.contains("clicked")) {
        search.placeholder = "Search By The Title";
    }
    else {
        search.placeholder = "Search By The Category";
    }
}
search2.onclick = function() {
    search1.classList.toggle("clicked");
    search2.classList.toggle("clicked");
    if(search1.classList.contains("clicked")) {
        search.placeholder = "Search By The Title";
    }
    else {
        search.placeholder = "Search By The Category";
    }
}
let id = 1;
let productsArray = [];
let table = document.querySelector("table");
table.addEventListener("click", function(e) {
    if(e.target.classList.contains("update")) {
        console.log("Hamo Abbas");
        let id = e.target.getAttribute("data-id");
        console.log(id);
        createButton.innerHTML = "Update";
        count.style.pointerEvents = "none";
        productsArray.forEach((product) => {
            if(product.id == id) {
                console.log("احا بقا");
                title.value = product.title;
                totalValue.innerHTML = product.total;
                price.value = product.price;
                taxes.value = product.taxes;
                ads.value = product.ads;
                category.value = product.category;
                discount.value = product.discount;
                createButton.onclick = function() {
                    product.title = title.value;
                    product.total = totalValue.innerHTML;
                    product.price = price.value;
                    product.taxes = taxes.value;
                    product.ads = ads.value;
                    product.category = category.value;
                    product.discount = discount.value;
                    addElementsToPage(productsArray);
                    setArrayInLocalStorage();
                    count.style.pointerEvents = "auto";
                    createButton.innerHTML = "Create";
                    title.value = "";
                    totalValue.innerHTML = "";
                    price.value = "";
                    taxes.value = "";
                    ads.value = "";
                    category.value = "";
                    discount.value = "";
            }
            }
        })
    }
    if(e.target.classList.contains("delete")) {
        let id = e.target.getAttribute("data-id");
        productsArray.forEach((product) => {
            if(product.id == id) {
                let index = productsArray.indexOf(product);
                productsArray.splice(index, 1);
                console.log(productsArray);
                if(productsArray.length === 0) {
                    deleteAll.style.display = "block";
                }
                addElementsToPage(productsArray);
                setArrayInLocalStorage();
            }
        })
        
    }
})
if(window.localStorage.getItem("products")) {
    productsArray = JSON.parse(window.localStorage.getItem("products"));
    id = productsArray[productsArray.length-1].id + 1;
    deleted.innerHTML = productsArray.length;
    addElementsToPage(productsArray);
    deleteAll.style.display = "block";
}
createButton.onclick = function() {
    if(title.value !== "" && totalValue.innerHTML !== "" && category.value !== "") {     
        addProductsToArray();   
        title.value = "";
        category.value = "";
        price.value = "";
        count.value = "";
        taxes.value = "";
        ads.value = "";
        discount.value = "";
        totalValue.innerHTML = "";
    }
}

function addProductsToArray() {
    if(count.value === "") 
            count.value = 1;
    for(let i = 0; i < parseInt(count.value); i++) {
        const obj = {
            id: id,
            title: title.value,
            price: price.value,
            taxes: taxes.value,
            ads: ads.value,
            discount: discount.value,
            total: totalValue.innerHTML,
            category: category.value
        }
        id++;
        productsArray.push(obj);
    }
    deleted.innerHTML = productsArray.length;
    setArrayInLocalStorage();
    addElementsToPage(productsArray);
}
function setArrayInLocalStorage() {
    window.localStorage.setItem("products", JSON.stringify(productsArray))
}
function addElementsToPage(array) {
    deleteAll.style.display = "block";
    let elements = document.querySelectorAll("tr");
    for(let i = 1; i < elements.length; i++)
        elements[i].remove();
    array.forEach((product) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");          
        let td10 = document.createElement("td");     
        td1.textContent = product.id;        
        td2.textContent = product.title;
        td3.textContent = product.price;
        td4.textContent = product.taxes;
        td5.textContent = product.ads;
        td6.textContent = product.discount;
        td7.textContent = product.total;
        td8.textContent = product.category;
        let updateSpan = document.createElement("span");
        updateSpan.className = "edit" ;
        updateSpan.classList.add("update");
        updateSpan.setAttribute("data-id", product.id);
        let deleteSpan = document.createElement("span");
        deleteSpan.className = "edit";
        deleteSpan.classList.add("delete");
        deleteSpan.setAttribute("data-id", product.id);
        updateSpan.textContent = "Update";
        deleteSpan.textContent = "Delete";  
        td9.appendChild(updateSpan);
        td10.appendChild(deleteSpan);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);
        document.querySelector("table").appendChild(tr);
    })
}
deleteAll.onclick = function () {
    id = 1;
    window.localStorage.clear();
    productsArray = [];
    let elements = document.querySelectorAll("tr");
    for(let i = 1; i < elements.length; i++)
        elements[i].remove();
    deleteAll.style.display = "none";
}
// Start Calculating Total Cost 
taxes.oninput = function() {
    if(taxes.value !== "" && price.value !== "" && ads.value !== "") {
        if(discount.value === "") {
            discount.value = 0;
        }
        let sum = parseInt(taxes.value) + parseInt(price.value) + parseInt(ads.value) - parseInt(discount.value);
        totalValue.innerHTML = sum;
    }
}
ads.oninput = function() {
    if(taxes.value !== "" && price.value !== "" && ads.value !== "") {
        if(discount.value === "") {
            discount.value = 0;
        }
        let sum = parseInt(taxes.value) + parseInt(price.value) + parseInt(ads.value) - parseInt(discount.value);
        totalValue.innerHTML = sum;
    }
}
price.oninput = function() {
    if(taxes.value !== "" && price.value !== "" && ads.value !== "") {
        if(discount.value === "") {
            discount.value = 0;
        }
        let sum = parseInt(taxes.value) + parseInt(price.value) + parseInt(ads.value) - parseInt(discount.value);
        totalValue.innerHTML = sum;
    }
}
discount.oninput = function() {
    if(taxes.value !== "" && price.value !== "" && ads.value !== "") {
        if(discount.value === "") {
            discount.value = 0;
        }
        let sum = parseInt(taxes.value) + parseInt(price.value) + parseInt(ads.value) - parseInt(discount.value);
        totalValue.innerHTML = sum;
    }
}
search.oninput = function() {
    console.log("مالك");
    let str = 0;
    if(search1.classList.contains("clicked")) {
        str = "title";
    }
    else str = "category";
    // let elements = document.querySelectorAll("tr");
    // for(let i = 1; i < elements.length; i++)
    //     elements[i].remove();
    let anotherArray = productsArray.filter(function(product) {
        if(product[str].toLowerCase().includes(search.value.toLowerCase())) {
            return product;
        }
    })
    addElementsToPage(anotherArray);
}
// End Calculating Total Cost 