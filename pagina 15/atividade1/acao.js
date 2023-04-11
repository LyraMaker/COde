botao = document.querySelector("#botao")
caixa = document.querySelector("#nome")
container = document.querySelector(".container")

botao.addEventListener("click",function(){
    nome = document.createElement("p")
    nome.classList.add('has-text-centered')
    nome.innerHTML = `O nome digitado foi <strong class='is-uppercase'>${caixa.value}</strong>`
    container.appendChild(nome)
})