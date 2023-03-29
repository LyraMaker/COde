var historico = []

function soma() {
    caixa1 = Number(document.querySelector("#txtN1").value)
    caixa2 = Number(document.querySelector("#txtN2").value)

    resultado = caixa1 + caixa2
    historico.push(resultado)
    mostrarResultado(resultado)
}

function subtracao() {
    caixa1 = Number(document.querySelector("#txtN1").value)
    caixa2 = Number(document.querySelector("#txtN2").value)

    resultado = caixa1 - caixa2
    historico.push(resultado)
    mostrarResultado(resultado)
}

function multiplicacao() {
    caixa1 = Number(document.querySelector("#txtN1").value)
    caixa2 = Number(document.querySelector("#txtN2").value)

    resultado = caixa1 * caixa2
    historico.push(resultado)
    mostrarResultado(resultado)
}

function divisao() {
    caixa1 = Number(document.querySelector("#txtN1").value)
    caixa2 = Number(document.querySelector("#txtN2").value)

    resultado = caixa1 + caixa2
    historico.push(resultado)
    mostrarResultado(resultado)
}

function mostrarResultado(texto) {
    resultado = document.querySelector("#resultado")
    resultado.innerHTML += "<p>"+texto+"</p>"
}