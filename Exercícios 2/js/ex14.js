function contarPares(sapatos) {

    let contagem = {};
    
    for (let i = 0; i < sapatos.length; i++) {
        let sapato = sapatos[i];
        let tamanho = sapato.split(' ')[0];
        let lado = sapato.split(' ')[1];
    
        if (!contagem[tamanho]) {
            contagem[tamanho] = { E: 0, D: 0 };
        }
    
        contagem[tamanho][lado]++;
    }
        
    for (let tamanho in contagem) {
        let paresE = contagem[tamanho]['E'] / 2;
        let paresD = contagem[tamanho]['D'] / 2;
        let pares = (paresE - (paresE % 1)) + (paresD - (paresD % 1)); // Soma dos pares
        
        if (pares > 0) {
            console.log(tamanho + ' ' + pares);
        }
    }
}
        
        
contarPares(sapatos);