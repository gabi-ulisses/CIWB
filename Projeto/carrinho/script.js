document.addEventListener('DOMContentLoaded', function() {
    const botoesAdicionar = document.querySelectorAll('.adicionar');

    for (let botao of botoesAdicionar) {
        botao.addEventListener('click', function() {
            const itemProduto = botao.parentElement;
            const nomeProduto = itemProduto.textContent.split(' - ')[0].trim();
            const precoProduto = itemProduto.textContent.split(' - ')[1].trim();

            adicionarAoCarrinho(nomeProduto, precoProduto);
        });
    }

    document.querySelector('.esvaziar').addEventListener('click', esvaziarCarrinho);
});

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const carrinho = document.querySelector('.carrinho ul');
    const itensCarrinho = carrinho.querySelectorAll('li');

    let produtoExistente = false;

    for (let item of itensCarrinho) {
        if (item.textContent.includes(nomeProduto)) {
            const quantidade = item.querySelector('.quantidade');
            quantidade.textContent = parseInt(quantidade.textContent) + 1;
            produtoExistente = true;
            break;
        }
    }

    if (!produtoExistente) {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${nomeProduto} - ${precoProduto} | Quantidade: 1`;

        const quantidade = document.createElement('span');
        quantidade.className = 'quantidade';
        quantidade.textContent = '1';

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', function() {
            novoItem.remove();
            atualizarTotal();
        });

        novoItem.appendChild(quantidade);
        novoItem.appendChild(botaoRemover);
        carrinho.appendChild(novoItem);
    }

    atualizarTotal();
}

function atualizarTotal() {
    const carrinho = document.querySelector('.carrinho ul');
    let total = 0;

    carrinho.querySelectorAll('li').forEach(item => {
        const preco = parseFloat(item.textContent.split(' - ')[1].trim().replace('R$', '').replace(',', '.'));
        total += preco;
    });

    document.querySelector('.total').textContent = total.toFixed(2);
}

function esvaziarCarrinho() {
    document.querySelector('.carrinho ul').innerHTML = '';
    atualizarTotal();
}