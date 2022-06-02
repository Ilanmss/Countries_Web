export function createFetch(method, url, data = null, ) {

    const div_bandeiras = document.getElementById('main_div');
    div_bandeiras.textContent = '';
    const select = document.querySelector("#select_filter")
    let value = select.value

    return fetch(url)
        .then((response) => response.json())
        .then(function(data) {
            return data.map(function(dados) {

                if (value === dados.region) {
                    showCountries(dados)
                } else if (value === 'All') {
                    showCountries(dados)
                }

            })
        })
        .catch(function(error) {
            console.log(error);
        })

    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function showCountries(dados) {
        let div = createNode('div')
        div.classList.add("bandeiras")
        let div_text = createNode("div")
        div_text.classList.add("bandeiras_conteúdo")
        let flag = createNode('img')
        let name = createNode('h2')
        let region = createNode('p')
        let population = createNode('p')
        let capital = createNode('p')

        let populacao = numberWithCommas(dados.population)
        flag.src = dados.flag
        name.innerHTML = `${dados.name}`
        region.innerHTML = `<b>Region:</b> ${dados.region}`
        population.innerHTML = `<b>Population:</b> ${populacao}`
        capital.innerHTML = `<b>Capital:</b> ${dados.capital}`

        append(div, flag)
        append(div_text, name)
        append(div_text, population)
        append(div_text, region)
        append(div_text, capital)
        append(div, div_text)
        append(div_bandeiras, div)
    }
}