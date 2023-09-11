// tambem é possivel definir valores padrão para propriedades inexistentes

let cliente = {
    nome:'João',
    sobrenome: 'Manuel',
    idade:45
}

let {nome, sobrenome, idade, profissão = 'indefinido'} = cliente;

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(profissão);

profissão = 'professor';

console.log(profissão);

console.log('-'.repeat(100));

// Alteração da ordem das propriedades

let fornecedor = {
    marca: 'Microsoft',
    produto: 'Windows11'
};

let { area = 'software', produto: software = 'WINDOWS', marca: empresa = 'indefinido' } = fornecedor;

console.log(area);
console.log(software);
console.log(empresa);

