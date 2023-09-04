console.clear();

let nomes = new Set(['João', 'Ana', 'Maria']);

// Chaves
console.log('KEYS:')

for (let chave of nomes.keys()){
    console.log(chave);
};

console.log('-'.repeat(100));

// Valores
console.log('VALUES:')

for(let valor of nomes.values()){
    console.log(valor);
}

console.log('-'.repeat(100));

// Entradas

for(let entrada of nomes.entries()){
    console.log(entrada);
};

// as keys passam assumir o mesmo valor dos values