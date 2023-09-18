let electronic = document.getElementById("electronics");
let url = 'https://fakestoreapi.com/products';
const fakeStoreFetch = async (endpoint) => {
    let res = await fetch(url + endpoint)
    let results = await res.json()
    console.log(results)
}

window.onload = (e) => {
    fakeStoreFetch("/");
  };

electronic.addEventListener("click", (e) => {
    console.log("click");
    fakeStoreFetch("/category/electronics");
})

let jewelry = document.getElementById("jewelry");
//console.log(electronic);
jewelry.addEventListener("click", (e) => {
    console.log("click");
})

let men = document.getElementById("men");
//console.log(electronic);
men.addEventListener("click", (e) => {
    console.log("click");
})

let women = document.getElementById("womens");
//console.log(women);
women.addEventListener("click", (e) => {
    console.log("click");
})

