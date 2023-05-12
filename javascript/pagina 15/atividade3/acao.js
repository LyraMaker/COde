documento = document.querySelector("#container")
cor = document.querySelector("#cor")
btnCor = document.querySelector("#btnCor")

btnCor.addEventListener('click', function () {
    documento.style.backgroundColor = cor.value
    console.log(documento.style.backgroundColor)
})