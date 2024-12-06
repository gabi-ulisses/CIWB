document.addEventListener('DOMContentLoaded', function(){
    const tabela = document.getElementById('tabela-produtos');

    tabela.addEventListener('click', function(e){
        if(e.target.classList.contains('remover')){
            e.preventDefault();
            const linha = e.target.closest('tr');
            linha.remove();
        }
    });
});
