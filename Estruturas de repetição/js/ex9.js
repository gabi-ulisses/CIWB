let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];
let abrev = [];

for (let fruta of frutas) {
    abrev.push(fruta.substring(0,3));
}

for (let abreviacao of abrev) {
    console.log(abreviacao.toUpperCase());
}