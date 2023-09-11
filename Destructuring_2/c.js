console.clear();

// tambem podemos alterar o nome das variaveis de saida definindo um aliás na desestruturação

let cliente = {
    nome: 'João',
    email: 'joao@hotmail.com',
    telefone: 9090909090,
}

let {nome: nome_completo, email: endereco_de_email, telefone: celular} = cliente;

console.log(nome_completo);
console.log(endereco_de_email);
console.log(celular);

console.log('-'.repeat(100));

// Essa regra tambem vale para alteração da ordem das variaveis

let fornecedor = {
    nome_da_marca: 'Microsoft',
    produto: 'Windows 11',
    categoria: 'Sistema operacional'
}

let { categoria: area, produto:software, nome_da_marca: marca } = fornecedor;

console.log(area);
console.log(software);
console.log(marca);