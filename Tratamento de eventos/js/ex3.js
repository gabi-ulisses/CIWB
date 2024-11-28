document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('button[id^="btn"]');

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            console.log(`Botão clicado: ${botao.id}`);
        });
    });
});
