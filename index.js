let electronics = document.getElementById("electronics");
let jewelry = document.getElementById("jewelry");
let men = document.getElementById("men");
let women = document.getElementById("women");
let display = document.getElementById("display");
let title = document.getElementById("title");
let url = "https://fakestoreapi.com/products";
let cart = [];
let data = [];

const fakeStore = async (endpoint) => {
  let res = await fetch(url + endpoint);
  let results = await res.json();
  displayCards(results);
  console.log(results);
};

function displayCards(data) {
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }

  data.forEach((product) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let body = document.createElement("div");
    let title = document.createElement("span");
    let desc = document.createElement("button");
    let price = document.createElement("div");
    let add = document.createElement("button");
    image.src = product.image;
    title.innerText = product.title;
    desc.innerHTML = `<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${product.description}
      </div>
    </div>
  </div>`;
    price.innerHTML = `<div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        Price
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        $${product.price}
      </div>
    </div>
  </div>`;
    add.innerHTML =
      '<button type="button" class="btn btn-info">Add to Cart</button>';
    display.appendChild(card);
    card.appendChild(image);
    card.appendChild(body);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(price);
    body.appendChild(add);
    display.style.display = "flex";
    display.style.flexDirection = "row";
    display.style.flexWrap = "wrap";
    display.style.justifyContent = "space-evenly";
    display.style.alignItems = "center";
    display.style.marginTop = "60px";
    display.style.marginLeft = "30px";
    display.style.marginRight = "30px";
    card.style.border = "2px solid black";
    card.style.width = "20%";
    card.style.height = "30rem";
    card.style.marginTop = "20px";
    card.style.marginBottom = "20px";
    card.style.marginLeft = "2.5px";
    card.style.marginRight = "2.5px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "center";
    image.style.maxHeight = "40%";
    image.style.maxWidth = "40%";
    image.style.marginTop = "0%";
    image.style.marginBottom = "10%";
    image.style.marginLeft = "30%";
    image.style.marginRight = "20%";
    title.style.fontSize = "20px";
    title.style.fontWeight = "bold";
    title.style.textAlign = "center";
    desc.style.fontSize = "15px";
    desc.style.overflow = "hidden";
    add.style.columnWidth = "12";
  });
  // add.addEventListener("click", (e) => {
  //   submitToCart(item);
  // });
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
});
jewelry.addEventListener("click", (e) => {
  fakeStore("/category/jewelery");
  console.log("click2");
});
men.addEventListener("click", (e) => {
  fakeStore("/category/men's clothing");
  console.log("click3");
});
women.addEventListener("click", (e) => {
  fakeStore("/category/women's clothing");
  console.log("click4");
});

window.onload = (e) => {
  fakeStore("/");
};
