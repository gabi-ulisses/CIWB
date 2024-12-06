document.addEventListener('DOMContentLoaded', function(){
    const paragrafo = document.querySelector('#paragrafo');

    paragrafo.addEventListener('click', function(){
        paragrafo.style.display = 'none';
    });
});
