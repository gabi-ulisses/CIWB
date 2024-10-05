
function jogar(palpite, numero){
   
        if(palpite > numero){
            console.log('Hmmmm, o número é maior que', palpite);
        }else if(palpite < numero){
            console.log('Hmmmm, o número é menor que', palpite);
        }else{
            console.log('Você acertou! O número é: ', numero);
        }
}

let numero = 47;

let palpite = parseInt(prompt("Informe um palpite para adivinhar o número: "));

    while(palpite != numero){
        jogar(palpite, numero);
    }