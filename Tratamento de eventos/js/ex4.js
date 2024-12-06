document.addEventListener('DOMContentLoaded', function(){
    const btnAdicionarParagrafo = document.getElementById('btn');
    const container = btnAdicionarParagrafo.parentElement;

    btnAdicionarParagrafo.addEventListener('click', function(){
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = 'Oi, mundo!';
        container.appendChild(novoParagrafo);
    });
});
