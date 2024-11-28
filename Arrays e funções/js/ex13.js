function ex13(palavras){
    let palavrasFiltradas = palavras.filter(palavra => {
        for(let i = 0; i < palavra.length; i++){
            if(palavra[i] === 'a'){
                return true;
            }
        }
        return false;
    }).map(palavra => palavra.length);

    console.log(palavrasFiltradas);
}