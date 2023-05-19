resposta = function(result){
    $("#resultado").text(result) 
}   

$("#btnSomar").click(function(){
    n1 = Number($("#txtN1").val());
    n2 = Number($("#txtN2").val());
    resultado = n1 + n2;
    resposta(resultado);
})

$("#btnSubtrair").click(function(){
    n1 = Number($("#txtN1").val());
    n2 = Number($("#txtN2").val());
    resultado = n1 - n2;
    resposta(resultado);
})

$("#btnMultiplicar").click(function(){
    n1 = Number($("#txtN1").val());
    n2 = Number($("#txtN2").val());
    resultado = n1 * n2;
    resposta(resultado);
})

$("#btnDividir").click(function(){
    n1 = Number($("#txtN1").val());
    n2 = Number($("#txtN2").val());
    resultado = n1 / n2;
    resposta(resultado);
})