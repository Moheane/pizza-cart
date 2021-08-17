let currentStringSetMedium = document.querySelector(".mediumCurrent")
let medium_plus = document.querySelector(".medium_plus")
let medium_minus = document.querySelector(".medium_minus")
let refresh_medium = document.querySelector(".refresh_medium")

medium_plus.addEventListener("click", function () {
    let curr = currentStringSetMedium.value
    currentTotal+=medium
    currentStringSetMedium.innerHTML = currentTotal
    console.log(currentTotal)
    
})

medium_minus.addEventListener("click", function () {
    let curr = currentStringSetMedium.value
    currentTotal-=15
    currentStringSetMedium.innerHTML = currentTotal
    console.log(currentTotal)
    
})

refresh_medium.addEventListener("click", function () {
    let curr = currentStringSetMedium.value
    currentStringSetMedium.innerHTML = 0
    
})

let checkout = document.querySelector(".smallCurrent")
let check_small = document.querySelector(".mediumCurrent")
let check_medium = document.querySelector(".largeCurrent")
let check_large = document.querySelector(".refresh_medium")

checkout.addEventListener("click", function () {
    var totalCheck = check_small.value + check_medium.value + check_large.value
    
})


let buyBtnLarge = document.querySelector(".buyBtnLarge")
let buyBtnMedium = document.querySelector(".buyBtnMedium")
let buyBtnSmall = document.querySelector(".buyBtnSmall")

let cart_small = document.querySelector(".cart-small")
let cart_medium = document.querySelector(".cart-medium")
let cart_large = document.querySelector(".cart-large")

buyBtnSmall.addEventListener("click", function () {
    cart_small.classList.remove("hidden")
    
})
buyBtnMedium.addEventListener("click", function () {
    cart_medium.classList.remove("hidden")
    
})
buyBtnLarge.addEventListener("click", function () {
    cart_large.classList.remove("hidden")
    
})

let totalBtn = document.querySelector(".totalBtn")

totalBtn.addEventListener("click", function () {
    cart_small.classList.remove("hidden")
    cart_wrap.classList.add("hidden")
    
})