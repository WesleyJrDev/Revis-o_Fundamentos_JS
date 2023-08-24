console.clear();

let nomes = [ 'Wesley', 'Leonice', 'Lara', 'Lorena'];

// Cria um novo ARREY entre entre o Indice A(incluindo) e o Indice B(excluindo), onde arreyX.slice(A,B).  

let recorte_nomes= nomes.slice(1,3)

console.log(nomes);

console.log(recorte_nomes);

// Cria um novo ARREY a partir do Indice A (contado do final para o inicio), até o final. Onde arreyX.slice(-A)

let recorte_nome_inverso = nomes.slice(-3);

console.log(recorte_nome_inverso);

// Para criar dois novos ARREYS, um até metade e outro da metade final.

let nomesA = ['Paulo', 'Lucas', 'Mateus', 'Tome não vai aparecer', 'Miguel', 'Gabriel', 'Isaque']

console.log('Arrey completo:', nomesA);

let metade1 = nomesA.slice(0, nomesA.length/2);

console.log('Primeira metade: ', metade1);

let metade2 = nomesA.slice(-nomesA.length/2)

console.log('Metade final do arrey: ', metade2)

// Podemos copiar um ARREY usando o SLICE sem nenhum argumento

let nomesB = nomes.slice()

console.log(nomesB);

nomesB[0] = 'Junior'

// Não altera o ARREY original
console.log('original: ', nomes);

console.log('cópia por slice alterada: ', nomesB);

