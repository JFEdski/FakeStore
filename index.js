let electronic = document.getElementById("electronics");
let jewelry = document.getElementById("jewelry");
let men = document.getElementById("men");
let women = document.getElementById("womens");
let display = document.getElementById("display");
let url = 'https://fakestoreapi.com/products';

const fakeStore = async (endpoint) => {
    let res = await fetch(url + endpoint)
    let results = await res.json()
    console.log(results)
}

electronic.addEventListener("click", (e) => {
    fakeStore("/category/electronics");
    console.log("click");
})

jewelry.addEventListener("click", (e) => {
    fakeStore("/category/jewelry");
    console.log("click");
})

men.addEventListener("click", (e) => {
    fakeStore("/category/men");
    console.log("click");
})

women.addEventListener("click", (e) => {
    fakeStore("/category/women");
    console.log("click");
})

window.onload = (e) => {
    fakeStore("/");
    };