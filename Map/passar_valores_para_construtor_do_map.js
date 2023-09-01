console.clear();

// Quando criamos um Map podemos passar um conjunto de chaves e valores para o Contrutor do Map

let valores1 = new Map([

    ['nome','João'],
    ['idade', 35],
    [1,'111111'],
    [2,'222222'],
    [3,'333333'],

]);

console.table(valores1);

console.log('-'.repeat(100));

// Para passar um objeto para um MAP

let objeto = {
    nome: 'joão',
    sobrenome: 'ribeiro',
    idade: 45,
}

let valores2 = new Map(Object.entries(objeto));

console.table(valores2);

console.log(valores2.get('sobrenome'));