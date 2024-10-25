let cliente = {
    nome: 'Gabi',
    email: 'gabrielle.ulisses@aluno.ifsp.edu.br',
    isAdmin: true,

    dizerOi: function(){
        console.log('Oi! Eu sou a',this.nome,'!');
    }
};

let produtos = [
    {
        nome: 'Sabão',
        preco: 2.40
    },
    {
        nome: 'Arroz',
        preco: 40.00
    },
    {
        nome: 'Café',
        preco: 20.00
    },
];
    
// Exibindo quantidade de nomes com push():

let nomes = [];

for(let prod of produtos){
    nomes.push(prod.nome);
}


// Com map():

let nomes = produtos.map(p => p.nome);


let caros = [];

for(let prod of produtos){
    if(prod.preco > 10){
        caros.push(prod);
    }
}

// Com filter

let caros = produtos.filter(p => p.preco > 10);

function clearConsole(){
    console. clear();
}