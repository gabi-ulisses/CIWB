function contarVogais(palavra){

    let contador = 0;

    for(let i = 0; i < palavra.length; i++){

        let letra = palavra[i].toLowerCase();
        if(letra === 'a' ||  letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
            contador++;
        }
    }

    return contador;

}

function ex7(){
    let qtde = contarVogais('interestelar');
    console.log('Vogais:', qtde);
}
