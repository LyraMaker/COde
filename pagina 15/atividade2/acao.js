botao = document.querySelector("#botao")
n1 = document.querySelector("#n1")
n2 = document.querySelector("#n2")
container = document.querySelector(".container")

botao.addEventListener("click",function(){
    resultado = Number(n1.value) + Number(n2.value)
    p = document.createElement("p")
    p.classList.add('has-text-centered')
    p.innerHTML = `${n1.value}+${n2.value}=<strong class='is-uppercase'>${resultado}</strong>`
    container.appendChild(p)
})