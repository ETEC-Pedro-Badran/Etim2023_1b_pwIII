var btDiaDaSemana = document.getElementById('diaDaSemana');
var btNumerosPares = document.getElementById('numerosPares');
var btTabuada = document.getElementById('tabuada');
var divPares = document.getElementById('divNumerosPares');
btDiaDaSemana.addEventListener('click',diaDaSemana);
btNumerosPares.addEventListener('click',()=>{
    numerosPares((numeros)=>{
        divPares.innerHTML = "Números: "+numeros;
    });

});
btTabuada.addEventListener('click',tabuada);
