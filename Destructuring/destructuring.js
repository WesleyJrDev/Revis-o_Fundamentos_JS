console.clear();

// Desestruturação é uma declaração especial da sintaxe que permite transformas elementos de um Arrey ou propriedades de um Objeto em variaveis separadas

// Arreys

let nomes = ['Ana', 'João', 'Maria'];

let [nome_1,nome_2,nome_3] = nomes;

console.log(nome_1);
console.log(nome_2);
console.log(nome_3);

console.log('-'.repeat(100));

// Podemos usar a mesma sitaxe com métodos que retornam Arrey

let nome_completo = 'Wesley Junior';

let [nome, sobrenome] = nome_completo.split(' ');

console.log(nome);
console.log(sobrenome);

// IMPORTANTE: Os valores do Arrey e da String permanecem inalterados. Apenas são criadas novas variaveis. 



