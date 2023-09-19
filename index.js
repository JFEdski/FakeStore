let electronics = document.getElementById("electronics");
let jewelry = document.getElementById("jewelry");
let men = document.getElementById("men");
let women = document.getElementById("women");
let display = document.getElementById("display");
let url = 'https://fakestoreapi.com/products';

const fakeStore = async (endpoint) => {
    let res = await fetch(url + endpoint)
    let results = await res.json()
    console.log(results)
}

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