let small = 15
let medium = 22
let large = 36

let currentTotal = 0

let currentStringSet = document.querySelector(".smallCurrent")
let small_plus = document.querySelector(".small_plus")
let small_minus = document.querySelector(".small_minus")
let refresh = document.querySelector(".refresh")

small_plus.addEventListener("click", function () {
    let curr = currentStringSet.value
    currentTotal+=small
    currentStringSet.innerHTML = currentTotal
    console.log(currentTotal)
    
})

small_minus.addEventListener("click", function () {
    let curr = currentStringSet.value
    currentTotal-=15
    currentStringSet.innerHTML = currentTotal
    console.log(currentTotal)
    
})

refresh.addEventListener("click", function () {
    let curr = currentStringSet.value
    currentStringSet.innerHTML = 0
    
})




function mediumCart(b) {
    
}

function largeCart(c) {
    
}