const titulo = document.querySelector("#titulo")
const btnAzul = document.querySelector("#btnAzul")
const btnVermelho = document.querySelector("#btnVermelho")

btnAzul.addEventListener("click",function(){
    titulo.classList.toggle("has-text-info")
})

btnVermelho.addEventListener("click",function(){
    titulo.classList.toggle("has-text-danger")
})