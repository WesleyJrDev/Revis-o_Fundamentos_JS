// MAP é um tipo de coleção mas com chaves de qualquer tipo -> .set('Chave:', 'valor')
console.clear();

let valores = new Map();

 valores.set('nome', 'João' );
 valores.set('idade', 35);
 valores.set(1,'111111');
 valores.set(2,'222222');
 valores.set(3,'333333');

console.table(valores);
console.log('_'.repeat(100));

// Usamos o método GET para buscar um determinado valor

console.log(valores.get(1));
console.log(valores.get('nome'));

console.log('_'.repeat(100));

// Para perguntar se tem uma determinada chave na coleção, usamos o HAS(tem)

if (!valores.has('apelido')){
    console.log('não tem o apelido');
}else{
    console.log('tem o apelido')
};

console.log('_'.repeat(100));

// Para remover um elemento da coleção usamos o método .DELETE

valores.delete(2);
console.table(valores);

console.log('_'.repeat(100));

// Para saber quantos elementos tem o Map usamos a propriedade .SIZE

console.log('Essa coleção possui',valores.size, 'elementos');

console.log('_'.repeat(100));

// Para limpar toda coleção usamos o método .CLEAR

valores.clear();

console.table(valores);

console.log('Essa coleção possui',valores.size, 'elementos');

console.log('_'.repeat(100));
