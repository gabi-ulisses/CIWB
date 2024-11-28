document.addEventListener('DOMContentLoaded', function () {
    const produtos = document.querySelectorAll('.produto');
    const tabelaCarrinho = document.getElementById('itensCarrinho').getElementsByTagName('tbody')[0];
    const totalElement = document.getElementById('total');
    const quantidadeElement = document.getElementById('quantidade');
    const esvaziarCarrinhoBtn = document.getElementById('esvaziarCarrinho');

    let carrinho = [];

    // Função para atualizar o carrinho
    function atualizarCarrinho() {
        tabelaCarrinho.innerHTML = '';  // Limpar carrinho

        let total = 0;
        let quantidade = 0;

        carrinho.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.nome}</td>
                <td>R$ ${item.preco.toFixed(2)}</td>
                <td><input type="number" value="${item.quantidade}" min="1" data-id="${index}" class="quantidade"></td>
                <td><button class="remover" data-id="${index}">Remover</button></td>
            `;
            tabelaCarrinho.appendChild(tr);

            total += item.preco * item.quantidade;
            quantidade += item.quantidade;
        });

        totalElement.textContent = total.toFixed(2);
        quantidadeElement.textContent = quantidade;
    }

    // Adicionar produto ao carrinho
    function adicionarProduto(id, nome, preco) {
        const produtoExistente = carrinho.find((item) => item.id === id);
        if (produtoExistente) {
            produtoExistente.quantidade++;
        } else {
            carrinho.push({ id, nome, preco, quantidade: 1 });
        }
        atualizarCarrinho();
    }

    // Delegação de evento para adicionar produto
    produtos.forEach((produto) => {
        const botaoAdicionar = produto.querySelector('.adicionar');
        const id = produto.getAttribute('data-id');
        const nome = produto.querySelector('span').textContent;
        const preco = parseFloat(produto.querySelector('span:nth-child(2)').textContent.replace('R$ ', '').replace(',', '.'));

        botaoAdicionar.addEventListener('click', function () {
            adicionarProduto(id, nome, preco);
        });
    });

    // Remover produto do carrinho
    tabelaCarrinho.addEventListener('click', function (e) {
        if (e.target.classList.contains('remover')) {
            const id = e.target.getAttribute('data-id');
            carrinho.splice(id, 1);  // Remove o item pelo índice
            atualizarCarrinho();
        }
    });

    // Esvaziar o carrinho
    esvaziarCarrinhoBtn.addEventListener('click', function () {
        carrinho = [];
        atualizarCarrinho();
    });
});
