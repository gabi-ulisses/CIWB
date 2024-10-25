function vogal(c){
    let vogais = "aeiouAEIOU";
    let i, res;

    for(i = 0; i < 10; i++){
        if(c === vogais[i]){
            res = true;
            return console.log(c+" é uma vogal, então: "+res);
        }else{
            res = false;
            return console.log(c+" não é uma vogal, então: "+res);        
        }
    }
}
