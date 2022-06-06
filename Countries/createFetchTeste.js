export function createFetch(method, url, data = null) {

    const ul = document.getElementById('pgf');

    return fetch(url)
        .then((response) => response.json())
        .then(function(data) {
            let pgf = data.results
            return pgf.map(function(pgf) {
                let li = createNode('li')
                let img = createNode('img')
                let span = createNode('span')

                img.src = pgf.picture.medium
                span.innerHTML = `${pgf.name.first} ${pgf.name.last}`

                append(li, img);
                append(li, span);
                append(ul, li);
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
}