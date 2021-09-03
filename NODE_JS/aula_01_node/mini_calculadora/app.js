const calculadora = require('./app'); //método para importar os modulos exportados do arquivo app.js

console.log(calculadora.nome);
console.log('soma: ', calculadora.soma(1,2));
console.log('sub: ', calculadora.sub(5,3));
console.log('multi: ', calculadora.multi(3,5));
console.log('div: ',calculadora.div(15,3));
