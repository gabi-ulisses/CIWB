function mesclar(vet1, vet2) {
    let resultado = [];

    for (let i = 0; i < vet1.length; i++) {
        resultado.push(vet1[i], vet2[i]);
    }

    console.log("Array mesclado: ",resultado);
}