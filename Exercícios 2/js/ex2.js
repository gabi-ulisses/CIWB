function e_vogal(c){
    let vogais = "aeiouAEIOU";
    let i, res;

    for(i = 0; i < 10; i++){
        if(c === vogais[i]){
            res = true;
            return console.log(res);
        }else{
            res = false;
            return console.log(res);        }
    }

    console.log('Menor número: ', menor);    
}
