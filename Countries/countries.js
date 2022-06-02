import { createFetch } from "./FetchAPI.js";

const all = "all"
let url = `https://restcountries.com/v2/${all}`

createFetch("GET", url)

const input = document.querySelector("#input_txt")

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let name = input.value.toLowerCase()
        if (name === '') url = `https://restcountries.com/v2/all`
        else url = `https://restcountries.com/v2/name/${name}`
        createFetch("GET", url)
    }
})

input.addEventListener('blur', function(event) {
    let name = input.value.toLowerCase()
    if (name === '') name = 'Seach for a Country'
})

const select = document.querySelector('#select_filter')

select.addEventListener("click", function(event) {
    let name = input.value.toLowerCase()
    if (name === '' || name === 'seach for a country') url = `https://restcountries.com/v2/all`
    else url = `https://restcountries.com/v2/name/${name}`
    createFetch("GET", url)

})

const bandeira = document.querySelector("#main_div")

bandeira.addEventListener("click", function(event) {
    console.log(event.target)
    if (event.target != bandeira) {
        console.log("contem a classe bandeiras")
            //detail_page()
    }
})

function details(target) {
    let bandeiras = document.querySelectorAll(".bandeiras")

}

function detail_page() {
    window.location.href = "details.html"
}

// document.querySelector("#btn_back").addEventListener("click", function() {
//     console.log("func chamada")
//     window.location.href = "index.html"
// })