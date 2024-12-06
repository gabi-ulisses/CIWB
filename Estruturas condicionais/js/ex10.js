function corrigirTexto(texto){
    let textoCorrigido = '';
    let i = 0;

    while(i < texto.length){
        if(i + 3 < texto.length && texto[i] === texto[i + 2] && texto[i + 1] === texto[i + 3]){
            textoCorrigido += texto[i] + texto[i + 1];
            i += 4; 
        } else{
            textoCorrigido += texto[i];
            i++;
        }
    }

    return textoCorrigido;
}


const texto1 = 'Juca comprou fafarinha na memercearia e papagou 4 reais o quilo. A mamae de Juca pediu para ele comprar mamais 2 quilos.';
console.log(corrigirTexto(texto1));

const texto2 = 'O papassarinho vovoou para bem longe.';
console.log(corrigirTexto(texto2));

