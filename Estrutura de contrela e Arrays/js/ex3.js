function calcularMediana(array, tamanho){

    let meio = tamanho / 2;
    let mediana = 0;

    if(tamanho % 2 == 0){
        mediana =(array[(meio - 1)] + array[meio])/2;
    }else{
        mediana = array[meio - 1];
    }
   
    return mediana;
}


function ex3(){
    let array = [1, 2, 7, 8, 9, 2];
    const tamanho = array.length;
    
    console.log("Sequência de números:",array.join('-'));
    console.log("Mediana:", calcularMediana(array, tamanho));
}

