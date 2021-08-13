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