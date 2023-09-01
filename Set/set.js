console.clear();

// Set é um tipo de coleção, que contem apenas os valores, que não podem ser repetidos

let valores = new Set();
valores.add('João');
valores.add('Ana');
valores.add('Maria');

console.table(valores);

// Possui os mesmos métodos e propriedade do MAP

valores.delete('Ana');

console.table(valores);

console.log('-'.repeat(100));

if (valores.has('Carlos')){
    console.log('Calos existe');
}else{
    console.log('Carlos não existe');
};

console.log('-'.repeat(100));

console.log(valores.size);

console.log('-'.repeat(100));

valores.clear();

console.table(valores);

console.log(valores.size);

console.log('-'.repeat(100));

// A principal caracteristica do Set é não adicionar um valor que já existe

valores.add('Carlos');
valores.add('Ana');
valores.add('Ana');

console.table(valores);
