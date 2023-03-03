function clicou(){
   alert("Botão foi clicado!");
}

var funcao = ()=>{
    alert("Botão com função na variável foi clicado!");
}; 


var botao = document.getElementById("botao");
var botaoVar = document.getElementById("botaoVar");
botao.addEventListener('click',  clicou); //passando a referencia função
botaoVar.addEventListener('click',  funcao);//passando a referencia através da variável 
botaoAnonimo.addEventListener('click',  ()=>{
    alert("Botão com função anônima foi clicado!");
});
