
//Array que vai guardar valores
nomes = [];
valores = "";

//Selecionando componentes da tela
 txtNomes = document.querySelector("#nomes");
 btn = document.querySelector("#iniciar");

 btn.addEventListener("click",function(){
    valores = txtNomes.value;
    nomes = valores.split(" ");
 })