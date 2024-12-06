function exercicio8(){
    const sapatos = [
    {tamanho: 38, pe: 'E'},
    {tamanho: 42, pe: 'E'},
    {tamanho: 39, pe: 'E'},
    {tamanho: 40, pe: 'D'},
    {tamanho: 38, pe: 'D'},
    {tamanho: 40, pe: 'D'},
    {tamanho: 37, pe: 'E'},
    {tamanho: 44, pe: 'D'},
    {tamanho: 37, pe: 'D'},
    {tamanho: 42, pe: 'D'},
    {tamanho: 41, pe: 'E'},
    {tamanho: 44, pe: 'E'},
    {tamanho: 37, pe: 'E'},
    {tamanho: 42, pe: 'D'}
    ];
    
    const base = 37;
    const qtdTamanhos = 8; 
    let esquerdos = new Array(qtdTamanhos); 
    let direitos = new Array(qtdTamanhos);  
    
    for(let i = 0; i < qtdTamanhos; i++){
        esquerdos[i] = 0; 
        direitos[i] = 0;  
    }
    
    for(let i = 0; i < sapatos.length; i++){

        const tamanho = sapatos[i].tamanho;
        const pe = sapatos[i].pe;
    
        const posicao = tamanho - base;

        if(pe === 'E'){
            esquerdos[posicao]++;
        } else{
            direitos[posicao]++;
        }
    }
    
    for(let i = 0; i < esquerdos.length; i++){
        const quantidade = esquerdos[i] < direitos[i] ? esquerdos[i] : direitos[i];
        if(quantidade > 0){
            const num = base + i;
            console.log(num, quantidade);
        }
    }
    
}