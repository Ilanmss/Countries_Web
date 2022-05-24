import { createXMLHttpRequest } from "./createXMLHttpRequest.js";

const url = "https://restcountries.com/v2/all"

createXMLHttpRequest("GET", url, teste)

function teste(dados) {
    console.log(dados)
    const pgf = document.getElementById("pgf")

    pgf.innerHTML = dados;
}