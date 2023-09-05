console.clear();

// Podemos usar a desestruturação, por exemplo em uma iteração

let cliente = {

    nome: 'Wesley',
    sobrenome: 'Damazio',
    idade: 35

}

for (let [chave,valor] of Object.entries(cliente)){

    console.log(`${chave}: ${valor}`);

}

console.log('-'.repeat(100));

// Podemos trocar o valor de duas variaveis entre si

let valor1 = 1;
let valor2 = 2;

[valor1,valor2] = [valor2,valor1];

console.log(valor1);
console.log(valor2);

console.log('-'.repeat('100'));

// Podemos usar reticencias para criar uma coleção com os demais elementos ignorados, que chamamos de "resto" ou "restante"

let nomes = ['João','Maria', 'Marta', 'Ana', 'Manuel'];

[n1,n2,...nn] = nomes

console.log(n1);
console.log(n2);
console.log(nn);

console.log('-'.repeat('100'));

// Podemos ainda definir valores padrão

let fornecedores = ['Apple', 'Asus', 'Microsoft'];
[fornecedor1, fornecedor2, fornecedor3 = 'Indefinido'] = fornecedores;

console.log(fornecedor1);
console.log(fornecedor2);
console.log(fornecedor3);

console.log('-'.repeat('100'));



