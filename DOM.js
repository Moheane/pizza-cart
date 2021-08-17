let small = 15
let medium = 60
let large = 99

let currentTotal = 0
let currentTotal1 = 0
let currentTotal2 = 0

let currentStringSet = document.querySelector(".smallCurrent")
let small_plus = document.querySelector(".small_plus")
let small_minus = document.querySelector(".small_minus")
let refresh_small = document.querySelector(".refresh_small")

small_plus.addEventListener("click", function () {
    let curr = currentStringSet.value
    currentTotal+=small
    currentStringSet.innerHTML = currentTotal
    
    
})

small_minus.addEventListener("click", function () {
    let curr = currentStringSet.value
    currentTotal-=15
    currentStringSet.innerHTML = currentTotal
    
    
})

refresh_small.addEventListener("click", function () {
    let curr = currentStringSet.value
    currentStringSet.innerHTML = 0
    
})


let currentStringSetMedium = document.querySelector(".mediumCurrent")
let medium_plus = document.querySelector(".medium_plus")
let medium_minus = document.querySelector(".medium_minus")
let refresh_medium = document.querySelector(".refresh_medium")

medium_plus.addEventListener("click", function () {
    let curr = currentStringSetMedium.value
    currentTotal1+=medium
    currentStringSetMedium.innerHTML = currentTotal1

    
})

medium_minus.addEventListener("click", function () {
    let curr = currentStringSetMedium.value
    currentTotal1-=medium
    currentStringSetMedium.innerHTML = currentTotal1
 
    
})

refresh_medium.addEventListener("click", function () {
    currentStringSetMedium.innerHTML = 0
    
})



let currentStringSetlarge = document.querySelector(".largeCurrent")
let large_plus = document.querySelector(".large_plus")
let large_minus = document.querySelector(".large_minus")
let refresh_large = document.querySelector(".refresh_large")
let totalCkeckout = document.querySelector(".totalCkeckout")
let checkout = document.querySelector(".checkout")



large_plus.addEventListener("click", function () {
    let curr = currentStringSetlarge.value
    currentTotal2+=large
    currentStringSetlarge.innerHTML = currentTotal2

    
})

large_minus.addEventListener("click", function () {
    let curr = currentStringSetlarge.value
    currentTotal2-=large
    currentStringSetlarge.innerHTML = currentTotal2
   
    
})

refresh_large.addEventListener("click", function () {
    currentStringSetlarge.innerHTML = 0
    
})

let check_small = document.querySelector(".smallCurrent")
let check_medium = document.querySelector(".mediumCurrent")
let check_large = document.querySelector(".largeCurrent")


checkout.addEventListener("click", function () {
  

    
    totalCkeckout.innerHTML = parseInt(check_small.innerHTML) + parseInt(check_medium.innerHTML) + parseInt(check_large.innerHTML)
    
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