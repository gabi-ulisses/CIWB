function potencia(a, b){
    let potencia = 1;
    for(let i = 0; i < b; i++){
        potencia *= a;
    }
    console.log(a+" elevado a "+b+" é igual a "+potencia);
}