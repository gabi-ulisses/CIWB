function ex2(){
    const xs = [5, 3, 6, 1, 2, 4];
    let menor = xs[0];
    
    for(let i = 0; i < xs.length; i++){
        if(xs[i] < menor){
            menor = xs[i];
        }
    }
    
    console.log('Menor número: ', menor);    
}
