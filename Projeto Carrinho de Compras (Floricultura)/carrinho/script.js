document.addEventListener('DOMContentLoaded', function(){
    const botoesAdicionar = document.querySelectorAll('.adicionar');
    const carrinhoLista = document.querySelector('.carrinho ul');
    const totalItens = document.querySelector('.total');
    const botaoEsvaziar = document.querySelector('.esvaziar');

    // Função para atualizar o total do carrinho
    function atualizarTotal(){
        const itensCarrinho = carrinhoLista.querySelectorAll('li');
        let total = 0;

        itensCarrinho.forEach(function(item){
            const precoItem = parseFloat(item.querySelector('.preco').textContent.replace('R$ ', '').replace(',', '.'));
            const quantidade = parseInt(item.querySelector('.quantidade').textContent);
            total += precoItem * quantidade;
        });

        totalItens.textContent = total.toFixed(2).replace('.', ',');
    }

    // Função para adicionar o produto no carrinho
    function adicionarAoCarrinho(nomeProduto, precoProduto){
        // Verificar se o produto já está no carrinho
        const produtosNoCarrinho = carrinhoLista.querySelectorAll('li');
        let produtoExistente = false;

        produtosNoCarrinho.forEach(function(item){
            const nomeCarrinho = item.querySelector('.nome').textContent;

            if(nomeCarrinho === nomeProduto){
                produtoExistente = true;
                const quantidadeElemento = item.querySelector('.quantidade');
                quantidadeElemento.textContent = parseInt(quantidadeElemento.textContent) + 1; // Aumentar a quantidade
            }
        });

        // Se o produto não existe no carrinho, adicionar um novo item
        if(!produtoExistente){
            const itemCarrinho = document.createElement('li');
            itemCarrinho.innerHTML = 
                '<span class="nome">' + nomeProduto + '</span>' + 
                '<span class="preco">R$ ' + precoProduto + '</span>' + 
                '<span class="quantidade">1</span> unidade(s) ' + 
                '<button class="remover">Remover</button>';

            const botaoRemover = itemCarrinho.querySelector('.remover');
            botaoRemover.addEventListener('click', function(){
                const quantidadeElemento = itemCarrinho.querySelector('.quantidade');
                let quantidade = parseInt(quantidadeElemento.textContent);

                if(quantidade > 1){
                    quantidade -= 1;
                    quantidadeElemento.textContent = quantidade;
                }  else{
                    itemCarrinho.remove();
                }

                atualizarTotal();
            });

            carrinhoLista.appendChild(itemCarrinho);
        }

        atualizarTotal();
    }

    // Adicionar produtos ao carrinho
    botoesAdicionar.forEach(function(botao){
        botao.addEventListener('click', function(){
            const produtoElemento = botao.parentElement;
            const nomeProduto = produtoElemento.querySelector('.nome').textContent;
            const precoProduto = produtoElemento.querySelector('.preco').textContent;

            adicionarAoCarrinho(nomeProduto, precoProduto);
        });
    });

    // Esvaziar o carrinho
    botaoEsvaziar.addEventListener('click', function(){
        carrinhoLista.innerHTML = '';
        atualizarTotal();
    });
});
