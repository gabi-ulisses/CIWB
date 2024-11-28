function e_vogal(c){
    let vogais = "aeiouAEIOU";
    let i;

    for(i = 0; i < 10; i++){
        if(c === vogais[i]){
            return true;
        }        
    }
    return false;   
}

function ex9(){
    const word = 'interestelar';
    let vogais = Array.from(word).filter(e_vogal);
    console.log(vogais.length);
} 