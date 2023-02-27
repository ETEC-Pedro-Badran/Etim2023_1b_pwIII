function diaDaSemana(){
    var dia =parseInt( prompt("Digite um número de 0 a 6"));
    switch(dia) {
        case 0: alert("Domingo");
                break; 
                case 1: alert("Segnda-feira");
                break; 
                case 2: alert("Terça-feira");
                break; 
                case 3: alert("Quarta-feira");
                break; 
                case 4: alert("Quinta-feira");
                break; 
                case 5: alert("Sexta-feira");
                break; 
                case 6: alert("Sábado");
                break; 
        default: alert("Número inválido")   
      }
}

function numerosPares(){
    var numero = parseInt( prompt("Digite o número limite"));
    var saida = "";
    var linha = "";
    for(var n=2;n<numero;n=n+2) {
       linha += n+" ";
       if (linha.length >= 100) {
        saida += '\n';
        saida += linha;
        linha = "";
       }
       limitelinha++;
    }
    if (linha.length>0) {
        saida += '\n';
        saida += linha;
    }
    alert(saida);
}

function tabuada(){
    var numero = parseInt( prompt("Digite é multiplicador da tabuada"));
    var saida = "";
    for(var n=0;n<10;n++) {
        saida+= numero+"X"+n+"="+(numero*n)+"\n";
    }
    alert(saida);
}