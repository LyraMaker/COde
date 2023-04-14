container = document.querySelector("#caixa")
botao = document.querySelector("#botao")
valor = document.querySelector("#valor")
listaOrdenada = document.createElement("ol")

container.appendChild(listaOrdenada)

botao.addEventListener('click', function () {
    valorLista = document.createElement("li")
    valorLista.textContent = valor.value
    listaOrdenada.appendChild(valorLista)
})