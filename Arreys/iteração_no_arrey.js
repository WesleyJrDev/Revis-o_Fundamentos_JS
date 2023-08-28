// Iteração usando o ciclo FOR

let nomes = [ 'joao', 'maria', 'pedro', 'paulo', 'marta'];

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
};

// Iteração com o método FOREACH

nomes.forEach( function(nome , indice) {
console.log(`| Indice: ${indice} | Nome: ${nome} |`)
});

nomes.forEach(function(nome, indice, colecao) {
console.log(`Arrey: ${colecao}  |  Indice: ${indice}  |  Nome: ${nome}  |`)
});