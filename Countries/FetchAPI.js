export function createFetch(method, url, data = null, ) {
    // esse fetch recebe um url com método GET, limpa o html e cria os card das bandeiras.
    // Ele pega o value do filtro de continentes para filtar a mostragem de países

    const div_bandeiras = document.getElementById('main_div');
    div_bandeiras.textContent = '';
    const select = document.querySelector("#select_filter")
    let value = select.value

    return fetch(url)
        .then((response) => response.json())
        .then(function(data) {

            // Um map que roda todos os 250 dados no array do jason
            // verifica qual o filtro colocado e mostra ele
            return data.map(function(dados) {

                if (value === dados.region) {
                    showCountries(dados)
                } else if (value === 'All') {
                    showCountries(dados)
                }

            })
        })
        .catch(function(error) {
            // chamada de erro KKKK
            console.log(error);
        })

    // função para criar um elemento html
    function createNode(element) {
        return document.createElement(element);
    }

    //função para dar append, achei muito mais intuitívo e fácil utilizar assim
    function append(parent, el) {
        return parent.appendChild(el);
    }

    // função para colocar vírgular num número com milhares e milhões
    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // função que cria o card de um país baseado nos dados dele
    function showCountries(dados) {

        let card = createNode('div')
        card.classList.add("bandeiras")
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

        append(card, flag)
        append(div_text, name)
        append(div_text, population)
        append(div_text, region)
        append(div_text, capital)
        append(card, div_text)
        append(div_bandeiras, card)

        // adiciona ao card um evento de click para ir para a página de mostrar detalhes
        card.addEventListener("click", function(event) {
            showDetail(dados)
        })
    }

    // função que mostra as informações da ABA de detalhes
    function showDetail(dados) {
        let filter_section = document.getElementById('filter_section')
        let countries_section = document.getElementById('countries_section')
        let detail_section = document.getElementById('detail_section')
        detail_section.classList.toggle('show')
        filter_section.classList.toggle('dont_show')
        countries_section.classList.toggle('dont_show')

        /* ORGANIZAÇÃO DO HTML A SEGUIR
        div principal - FLEX
            bandeira
            div textos - sem flex 
                h1 - nome
                div infos - flex
                    div main infos - sem felx
                        native name, population, region, subregion, capital
                    div sub infos - sem flex
                        top level domain, currencies, languages
                div borderes - flex
                    border countries
        */

        let div_principal = document.getElementById('div_detail')
        div_principal.classList.add('div_flex')

        let flag = createNode('img')
        flag.src = dados.flag
        append(div_principal, flag)
        flag.classList.add('big_flag')

        let div_texts = createNode('div')
        append(div_principal, div_texts)
        div_texts.classList.add('spacement')

        let name_country = createNode('h1')
        name_country.innerHTML = `${dados.name}`
        append(div_texts, name_country)

        let div_infos = createNode('div')
        div_infos.classList.add('div_flex')
        append(div_texts, div_infos)

        let div_main_infos = createNode('div')
        append(div_infos, div_main_infos)
        let native_name = createNode('p')
        native_name.innerHTML = `<b>Native Name:</b> ${dados.nativeName}`
        append(div_main_infos, native_name)
        let population = createNode('p')
        let populacao = numberWithCommas(dados.population)
        population.innerHTML = `<b>Population:</b> ${populacao}`
        append(div_main_infos, population)
        let region = createNode('p')
        region.innerHTML = `<b>Region:</b> ${dados.region}`
        append(div_main_infos, region)
        let subregion = createNode('p')
        subregion.innerHTML = `<b>Subregion:</b> ${dados.subregion}`
        append(div_main_infos, subregion)
        let capital = createNode('p')
        capital.innerHTML = `<b>Capital:</b> ${dados.capital}`
        append(div_main_infos, capital)

        let div_sub_infos = createNode('div')
        div_sub_infos.classList.add('spacement')
        append(div_infos, div_sub_infos)
        let top_level_domain = createNode('p')
        top_level_domain.innerHTML = `<b>Top Level Domain:</b> ${dados.topLevelDomain}`
        append(div_sub_infos, top_level_domain)
        let currencies = createNode('p')
        let single_currencie = ''
        let all_currencies = []
        for (let id in dados.currencies) {
            single_currencie = ` ${dados.currencies[id].name}`
            all_currencies += `${single_currencie}`
        }
        currencies.innerHTML = `<b>Currencies:</b> ${all_currencies}`
        append(div_sub_infos, currencies)

        let langs = createNode('p')
        let single_language = ''
        let all_languages = []
        for (let id in dados.languages) {
            single_language = ` ${dados.languages[id].name}`
            all_languages += `${single_language}`
        }
        langs.innerHTML = `<b>Languages:</b> ${all_languages}`
        append(div_sub_infos, langs)

        let div_borderes = createNode('div')
        div_borderes.classList.add('div_flex')
        append(div_texts, div_borderes)
        let borders = createNode('p')
        if (typeof(dados.borders) == 'undefined') borders.innerHTML = `<b>Borders:</b> não possui fronteiras por terra `
        else borders.innerHTML = `<b>Borders:</b> ${dados.borders} `
        append(div_texts, borders)
    }
}