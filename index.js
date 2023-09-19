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
jewelry.addEventListener("click", (e) => {
    console.log("click");
    fakeStoreFetch("/category/jewelry");
})

let men = document.getElementById("men");
men.addEventListener("click", (e) => {
    console.log("click");
    fakeStoreFetch("/category/men");
})

let women = document.getElementById("womens");
women.addEventListener("click", (e) => {
    console.log("click");
    fakeStoreFetch("/category/women");
})

