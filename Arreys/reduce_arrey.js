// maneira possivel de calcular a soma de um arrey, usando um ciclo

let valores = [10,20,30,40,50];

let total = 0;

valores.forEach(e => total +=e);

console.log(total);

console.log('-'.repeat(100));

// Usando o método REDUCE
// O primeiro elemento(somatório) é o acumulador e o segundo(atual) é o valor do elemento do arrey aonde se encontra o ciclo.

console.log(valores.reduce((somatorio,atual) => somatorio + atual));