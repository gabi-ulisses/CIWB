async function buscar(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    let response = await fetch(url);

    if(response.ok){
        let data = await response.json();

        /**
         *    var logradouro = prompt('Por favor, informe a logradouro:');
         * 
         * Variável que o usuário digitou:
         * 
         *      console.log('Rua: ', logradouro); 
         * 
         *  Valor que o endpoint retorna:
         *  
         *       console.log('Rua: ', data['logradouro']);
         */

        console.log('Rua: ', data['logradouro']);
    }
}

function main(){
    let btn = document.querySelector('#carregar');
    btn.addEventListener('click', function(){
        let txtCEP = document.querySelector('#cep');
        let cep = txtCEP.value;
        buscar(cep);
    });
}

main();
