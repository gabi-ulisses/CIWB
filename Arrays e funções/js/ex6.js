
function verificaIdade(){

    let idades = [10, 12, 11, 23, 34, 19, 25, 29, 45, 32, 41, 26, 37, 28, 31, 24, 30, 35, 33, 27, 22, 36, 38, 20, 40, 21, 44, 39, 18];
    let alturas = [1.72, 1.80, 1.65, 1.70, 1.75, 1.60, 1.78, 1.82, 1.68, 1.74, 1.71, 1.73, 1.67, 1.69, 1.77, 1.66, 1.79, 1.64, 1.76, 1.81, 1.62, 1.83, 1.63, 1.61, 1.84, 1.85, 1.58, 1.59, 1.56, 1.57];

    let soma = 0;
    let i;

    for(i = 0; i < alturas.length; i++){
        soma += alturas[i];
    }

    let media = soma / alturas.length;
    
    let cont = 0;

    for(let i = 0; i < idades.length; i++){
       if(idades[i] > 13){
            if(alturas[i] < media){
                cont++;
            }
       }
    }

    console.log("Média da sala: ", media);
    console.log("Alunos com mais de 13 anos possuem altura inferior à média de alturas da sala: ", cont);
}
