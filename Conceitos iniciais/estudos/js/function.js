/*

Forma 2:

function processar(limite, statusCallback){
    for(let i=0; i<limite; i++){
        if(i % 10 == 0){
            statusCallback(i);
        }
    }
}

processar(100, function(step){
    console.log('Step:', step);
});

Forma 4:

let somar =(a,b) => a + b;

*/
