let preco = 10.90;
let media = preco /0; 
let nuts = 'abc' / 3;
let z;
let nada = null; 


console.log('Preço: R$', preco);
console.log('Média:', media); // Infinity é maior que tudo
console.log('Nuts:', nuts);  // NaN: Não foi possível realizar o cálculo
console.log('Z:', z); // Undefined: variável não foi declarada;
console.log('Nada:', nada); // NUll: variável vazia sem valor nenhum;


console.log('Tipo da variável preco: ', typeof(preco));
console.log('Tipo da variável media: ', typeof(media));
console.log('Tipo da variável nuts: ', typeof(nuts));
console.log('Tipo da variável x: ', typeof(z));
console.log('Tipo da variável nada: ', typeof(nada));