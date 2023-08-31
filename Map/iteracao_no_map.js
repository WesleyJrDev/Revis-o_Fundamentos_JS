console.clear();

let valores = new Map();

 valores.set('nome', 'João' );
 valores.set('idade', 35);
 valores.set(1,'111111');
 valores.set(2,'222222');
 valores.set(3,'333333');

// Existem 3 formas de fazer iteração no MAP

// map.keys() para obeter as chaves

for (let chave of valores.keys()){
    console.log(chave);
}

console.log('_'.repeat(100));

// map.values() para obter os valores

for (let valor of valores.values()){
    console.log(valor);
};

console.log('_'.repeat(100))

// map.entries() para obter as entradas(chave e valores)

for (let entrada of valores.entries()){
    console.log(entrada);
}

console.log('_'.repeat(100));

// E existe o map.forEach que é um método não exclusivo do MAP

valores.forEach(( valor, chave) => {
console.log(`O valor da chave '${chave}', é ${valor}`);    
});