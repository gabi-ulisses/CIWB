const offset = 4;
const secret = 'LIPPSASVPH';
let message = '';

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function decifrar(letra){
    for(let i = 0; i < alfabeto.length; i++){
        if(alfabeto[i] === letra){
            let novoIndice = i - offset;
            if(novoIndice < 0){
                novoIndice += alfabeto.length; // Final do alfabeto
            }
            return alfabeto[novoIndice];
        }
    }
    return letra;
}

function ex11(){

    for(let i = 0; i < secret.length; i++){
        message += decifrar(secret[i]);
    }
    
    console.log(message);
}

