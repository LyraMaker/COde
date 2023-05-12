
//Array que vai guardar valores
nomes = [];
valores = "";
ponto = 0;

//Selecionando componentes da tela
 txtNomes = document.querySelector("#nomes");
 btn = document.querySelector("#iniciar");

 btn.addEventListener("click",function(){
    valores = txtNomes.value;
    nomes = valores.split(" ");
 })