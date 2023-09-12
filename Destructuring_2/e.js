// Tirar um parte de um objeto mais complexo

console.clear();

let empresa = {

    nome: 'Microsoft',
    área: 'Software',
    produtos: [
        'Windows 11',
        'Oficce',
        'Age of Empire IV',
        'Age of Mitology',
    ]

}

let {nome} = empresa;
let {produtos} = empresa;

console.log(nome);
console.log(produtos);