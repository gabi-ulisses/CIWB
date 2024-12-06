let pessoas = [];

const forms = document.querySelector('#forms');
const tabela = document.querySelector('#tabela');
const total = document.querySelector('#total');

const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const tel = document.querySelector('#tel');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const pais = document.querySelector('#pais');

forms.addEventListener('submit', function(e){
    e.preventDefault();

    let valueNome = nome.value;
    let valueIdade = parseInt(idade.value);
    let valueTel = tel.value;
    let valueCidade = cidade.value;
    let valueEstado = estado.value;
    let valuePais = pais.value;

    const pessoa ={
        nome: valueNome, 
        idade: valueIdade, 
        tel: valueTel, 
        cidade: valueCidade, 
        estado: valueEstado, 
        pais: valuePais
    };

    pessoas.push(pessoa);

    atualizarTabela();
    calcularTotal();

});

function atualizarTabela(){
    const tbody = tabela.querySelector('tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < pessoas.length; i++){
        const pessoa = pessoas[i];
        const linha = document.createElement('tr');
        const colN = document.createElement('td');
        const colI = document.createElement('td');
        const colT = document.createElement('td');
        const colC = document.createElement('td');
        const colE = document.createElement('td');
        const colP = document.createElement('td');

        colN.textContent = pessoa.nome;
        colI.textContent = pessoa.idade;
        colT.textContent = pessoa.tel;
        colC.textContent = pessoa.cidade;
        colE.textContent = pessoa.estado;
        colP.textContent = pessoa.pais;

        linha.appendChild(colN);
        linha.appendChild(colI);
        linha.appendChild(colT);
        linha.appendChild(colC);
        linha.appendChild(colE);
        linha.appendChild(colP);

        tbody.appendChild(linha);
    }
}

function calcularTotal(){
    total.textContent = pessoas.length;
}