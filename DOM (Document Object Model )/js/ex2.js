const response = `[
    {"id": 1, "nome": "Chai", "preco": 18.00},
    {"id": 2, "nome": "Chang", "preco": 19.00},
    {"id": 3, "nome": "Aniseed Syrup", "preco": 10.00},
    {"id": 4, "nome": "Chef Anton's Cajun Seasoning", "preco": 22.00},
    {"id": 5, "nome": "Chef Anton's Gumbo Mix", "preco": 21.35},
    {"id": 6, "nome": "Grandma's Boysenberry Spread", "preco": 25.00},
    {"id": 7, "nome": "Uncle Bob's Organic Dried Pears", "preco": 30.00},
    {"id": 8, "nome": "Northwoods Cranberry Sauce", "preco": 40.00},
    {"id": 9, "nome": "Mishi Kobe Niku", "preco": 97.00},
    {"id": 10, "nome": "Ikura", "preco": 31.00}
]`;

function preencherTabela() {
    // Converte a string JSON em um array de objetos
    const produtos = JSON.parse(response);
    
    // Seleciona o corpo da tabela usando getElementById
    const tabelaBody = document.getElementById("tabela-produtos").getElementsByTagName("tbody")[0];

    // Adiciona cada produto como uma nova linha na tabela
    produtos.forEach(produto => {
        const linha = `<tr>
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.preco.toFixed(2)}</td>
        </tr>`;
        tabelaBody.innerHTML += linha;
    });
}

// Chama a função para preencher a tabela
preencherTabela();
