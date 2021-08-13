let small = 15
let medium = 60
let large = 36

let currentTotal = 0

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
    currentTotal+=medium
    currentStringSetMedium.innerHTML = currentTotal
    console.log(currentTotal)
    
})

medium_minus.addEventListener("click", function () {
    let curr = currentStringSetMedium.value
    currentTotal-=medium
    currentStringSetMedium.innerHTML = currentTotal
    console.log(currentTotal)
    
})

refresh_medium.addEventListener("click", function () {
    currentStringSetMedium.innerHTML = 0
    
})