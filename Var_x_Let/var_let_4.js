// Com o Let não podemos declarar uma variavel mais que uma vez

// let nome = 'João';
// let nome = 'Ana';

// console.log(nome);

// Já com o Var isso é possivel

var nome2 = 'Maria';
var nome2 = 'Manuel';

console.log(nome2);

// Podemos definir uma variavel sem usar Let, Const ou Var, e depois declarar Var mas não Let

menssagem = 'olá';
console.log(menssagem);

var menssagem;

// Erro:
// let menssagem;