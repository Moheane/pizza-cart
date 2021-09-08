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
    currentTotal = 0
    
    
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
    currentTotal1 = 0
    
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
    currentTotal2 = 0
    
})

let check_small = document.querySelector(".smallCurrent")
let check_medium = document.querySelector(".mediumCurrent")
let check_large = document.querySelector(".largeCurrent")
let amount = document.querySelector(".amount")
let amountTotal = document.querySelector(".amountTotal")

checkout.addEventListener("click", function () {
  
    totalBtn.classList.remove("hidden")
    checkout.classList.add("hidden")
    amount.classList.remove("hidden")
    let tt = parseInt(check_small.innerHTML) + parseInt(check_medium.innerHTML) + parseInt(check_large.innerHTML)
    totalCkeckout.innerHTML = tt
    
})


let buyBtnLarge = document.querySelector(".buyBtnLarge")
let buyBtnMedium = document.querySelector(".buyBtnMedium")
let buyBtnSmall = document.querySelector(".buyBtnSmall")

let cart_small = document.querySelector(".cart-small")
let cart_medium = document.querySelector(".cart-medium")
let cart_large = document.querySelector(".cart-large")
let cart_wrap = document.querySelector(".cart-wrap")
let intro_order = document.querySelector(".intro-order")



buyBtnSmall.addEventListener("click", function () {
    cart_small.classList.remove("hidden")
    cart_wrap.classList.remove("hidden")
    intro_order.classList.add("hidden")
    
})
buyBtnMedium.addEventListener("click", function () {
    cart_medium.classList.remove("hidden")
    cart_wrap.classList.remove("hidden")
    intro_order.classList.add("hidden")
    
})
buyBtnLarge.addEventListener("click", function () {
    cart_large.classList.remove("hidden")
    cart_wrap.classList.remove("hidden")
    intro_order.classList.add("hidden")
    
})


let small_remove = document.querySelector(".small_remove")
let medium_remove = document.querySelector(".medium_remove")
let large_remove = document.querySelector(".large_remove")

small_remove.addEventListener("click", function () {
    cart_small.classList.add("hidden")
    currentTotal = 0
    currentStringSet.innerHTML = 0
    totalCkeckout.innerHTML = 0
})

medium_remove.addEventListener("click", function () {
    cart_medium.classList.add("hidden")
    currentTotal1 = 0
    currentStringSetMedium.innerHTML = 0
    totalCkeckout.innerHTML = 0
})

large_remove.addEventListener("click", function () {
    cart_large.classList.add("hidden")
    currentTotal2 = 0
    currentStringSetlarge.innerHTML = 0
    totalCkeckout.innerHTML = 0
})


let totalBtn = document.querySelector(".totalBtn")
let message = document.querySelector(".message")
let enjoy = document.querySelector(".enjoy")


totalBtn.addEventListener("click",  function () {
    let mes = "Enjoy your Meal! your change is :R"+(parseFloat(amountTotal.value)-parseFloat(totalCkeckout.innerHTML))
    let mes2 = "Not enough money! you need R"+(parseFloat(totalCkeckout.innerHTML)-parseFloat(amountTotal.value)+" more to comlete the transaction")
    console.log(mes2)
    
    if (parseFloat(totalCkeckout.innerHTML) < parseFloat(amountTotal.value)) {
        message.classList.remove("hidden")
        totalBtn.classList.add("hidden")
        amount.classList.add("hidden")
        enjoy.innerHTML = mes
    } else {
        enjoy.innerHTML = mes2
        message.classList.remove("hidden")
    }
    
})
