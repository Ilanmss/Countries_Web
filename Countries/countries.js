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

const btn = document.getElementById('btn_back')

btn.addEventListener('click', function() {
    window.location.reload()
        //createFetch("GET", url)
})