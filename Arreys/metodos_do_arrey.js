// POP remove o ultimo elemento

let nomes = ['wesley','leonice', 'lara', 'lorena'];
console.log(nomes)
nomes.pop()
console.log(nomes)

let nomes_retirado = nomes.pop();
console.log(nomes_retirado)

// PUSH adiciona um elemento no final

nomes.push('lore')
console.log(nomes);

// SHIFT remove o primeiro elemento

nomes.shift()
console.log(nomes)

nome_retirado2 = nomes.shift()
console.log(nome_retirado2)

// UNSHIFT adiciona um elemento no inicio

nomes.unshift('lara')
console.log(nomes)

// Os Arreys são copiados por referência

let nomes2 = ['joão', 'ana', 'manuel'];
console.log(nomes2);

let novo_nomes2 = nomes2
novo_nomes2[2] = 'antonio'

console.log(novo_nomes2, nomes2)

// Os indices podem não ser sequenciais

let nome3 = ['ana', 'antonio', 'joão'];
nome3[100] = 'joaquim';

console.log(nome3);
console.log(nome3[50]);

// length pode não corresponder ao numero total de elemento de um arrey
// Length não conta o número de elemento, apenas vê o ultimo indice e acrecenta + 1.

console.log(nome3.length)

// Importante: 
// Push e Pop são mais rápido do que o método Shift e Unshift, pois não precisam alterar toda a arrey para adicionar um munero no inicio. 

// Existe outra forma de interação nos Arreys

let nomes4 = ['ana', 'joão', 'pedro']

for( let nome of nomes4){
    console.log(nome);
};

