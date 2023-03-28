var soma = function(){
    var soma = 0
    for(var i = 0; i < arguments.length; i++){
        soma +=arguments[i]
    }
    return soma
}

var resultado = soma(1,2,4,6)
