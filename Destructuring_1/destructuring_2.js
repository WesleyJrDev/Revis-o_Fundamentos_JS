console.clear();

// Podemos desestruturar ignorando alguns elementos

let nomes = ['Ana','Maria', 'Manuel'];
let [nome_1,,nome_2] = nomes;

console.log(nome_1);
console.log(nome_2);

console.log('-'.repeat(100));

// Podemos desestruturar todas as variaveis iteráveis (MAP, SET, ETC)

let texto = 'Texto';

let [letra1,,letra3,letra4,,] = texto;

console.log(letra1,letra3,letra4);

console.log('-'.repeat(100));

// Ou ainda

let nomes2 = new Set (['João','Ana', 'Marcos']);

let [n1,n2,n3] = nomes2;

console.log(n3,n2,n1);

console.log('-'.repeat(100));

// Podemos tambem fazer o seguinte

let usuario = {};

[usuario.nome, usuario.sobrenome] = 'Wesley Damazio'.split(' ');

console.log(usuario.nome);
console.log(usuario.sobrenome);

console.log('-'.repeat(100));

