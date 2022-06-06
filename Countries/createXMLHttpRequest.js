export function createXMLHttpRequest(method, url, callback, data = null) {
    // código para aprender sobre XMLHttpRequest
    // não utilizei ele no projeto em si, usei apenas para testes
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    console.log(xhr)
    console.log(xhr.status)
    console.log(xhr.readyState)

    function verificaAjax() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                console.log(xhr.responseText)
                    // o tipo disso é string, então não é facil de trabalhar
                    // portanto a gnt transforma para objeto com o metodo abaixo

                const json = JSON.parse(xhr.responseText)
                console.log(json)
                if (typeof callback === "function") callback(json)
            } else if (typeof callback === "function") {
                callback({
                    status: xhr.status,
                    message: "algo errado com a conexão"
                })
            }
        }
    }
}