let electronics = document.getElementById("electronics");
let jewelry = document.getElementById("jewelry");
let men = document.getElementById("men");
let women = document.getElementById("women");
let display = document.getElementById("display");
let title = document.getElementById("title");
let url = 'https://fakestoreapi.com/products';



const fakeStore = async (endpoint) => {
    let res = await fetch(url + endpoint)
    let results = await res.json();
    displayCards(results);
    console.log(results);
}

// function displayCards(data) {
//     data.forEach((product) => {
//         let card = document.createElement('div');
//         let prodImg = document.createElement('img');
//         let prodBody = document.createElement('div');
//         let prodTitle = document.createElement('div');
//         let prodDesc = document.createElement('desc');
//         let prodCart = document.createElement('cart');
//         prodImg.src = fakeStore.image;
//         prodTitle.innerText = fakeStore.data.title;
//         prodDesc.innerText = fakeStore.data.description;
//         prodCart.innerHTML = '<button type="button" class="btn btn-info">Add to Cart</button>'
//         display.appendChild(card);
//         card.appendChild(prodImg);
//         card.appendChild(prodBody);
//         prodBody.appendChild(prodTitle);
//         prodBody.appendChild(prodDesc);
//         prodBody.appendChild(prodCart);
//     })
// }

function displayCards(data) {
        data.forEach((product) => {
            let card = document.createElement('div');
            let image = document.createElement('img');
            let body = document.createElement('div');
            let title = document.createElement('div');
            let desc = document.createElement('div')
            let add = document.createElement('button');
            image.src = product.image;
            title.innerText = product.title;
            desc.innerText = product.description;
            display.appendChild(card);
            card.appendChild(image);
            card.appendChild(body);
            body.appendChild(title);
            body.appendChild(desc);
            body.appendChild(add);
            card.className = "card";
            card.style.width = "18rem";
            display.style.display = "flex";
            display.style.flexDirection = "row";
            display.style.flexWrap = "wrap";
            display.style.justifyContent = "space-evenly";
            display.style.alignItems = "center";
            image.className = "card-img-top"
            body.className = "card-body";
            title.className = "card-title";
            desc.className = "card-text";
            add.className = "btn";
        })
}

// Create new element(s)
/*
1. Create the new empty element
2. Edit that new element
    - adding text
    - changing styling
3. Add the element to the webpage
*/

electronics.addEventListener("click", (e) => {
    fakeStore("/category/electronics");
    console.log("click");
})

jewelry.addEventListener("click", (e) => {
    fakeStore("/category/jewelery");
    console.log("click2");
})

men.addEventListener("click", (e) => {
    fakeStore("/category/men's clothing");
    console.log("click3");
})

women.addEventListener("click", (e) => {
    fakeStore("/category/women's clothing");
    console.log("click4");
})

window.onload = (e) => {
    fakeStore("/");
    };