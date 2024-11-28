document.addEventListener('DOMContentLoaded', function () {
    const select = document.querySelector('#marca');
    const logo = document.querySelector('#logo');

    select.addEventListener('change', function () {
        const logos = {
            audi: 'img/audi.png',
            bmw: 'img/bmw.png',
            mercedes: 'img/mercedes.png',
            volvo: 'img/volvo.png'
        };

        if (logos[select.value]) {
            logo.src = logos[select.value];
            logo.style.display = 'block';
        } else {
            logo.style.display = 'none';
        }
    });
});


/**
 * document.addEventListener('DOMContentLoaded', function(){
 *      const select = document.querySelector('#marca');
 *      select.addEventListener('change', function() {
 *          const img = document.querySelector('#logo');
 *          img.src = select.value + '.png';
 * 
 *      });
 * });
 * 
 */