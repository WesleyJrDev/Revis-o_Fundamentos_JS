// Podemos ainda usar o REST (...) na desestruturação de objetos

console.clear();

let empresa = {
    nome: 'Microsoft',
    área: 'Software',
    produtos: [
        'Windows 11',
        'Office',
        'Age of Empires IV',
        'Age of Mitology',
    ]
};

let {nome,...outras_propriedades} = empresa;

console.log(nome);
console.log(outras_propriedades);