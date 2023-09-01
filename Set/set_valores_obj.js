// Podemos criar no Set valores que são objetos
console.clear();

let joao = {nome: 'João', idade: 45};
let ana = {nome:'Ana', idade: 35};
let maria = {nome: 'Maria', idade: 31};

let valores = new Set([joao,ana,maria]);

console.table(valores);

console.log('-'.repeat(100));

// Fazendo iteração

valores.forEach(valor => {
    console.log(valor.nome,'tem', valor.idade, 'anos');
});



