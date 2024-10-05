
function jogar(numero){

    do{
        var palpite = parseInt(prompt("Informe um palpite para adivinhar o número: "));
        if(palpite > numero){
            alert('Hmmmm, o número é menor que '+ palpite +'.');
        }else if(palpite < numero){
            alert('Hmmmm, o número é maior que '+ palpite +'.');
        }
    }while(palpite != numero);

    alert('Você acertou! O número é: '+ numero);
}

var numero = 47;

jogar(numero);
