let nacionalidade = 'Brasileiro'

const cliente = {

    nome: 'Wesley',
    sobrenome: 'Damazio',
    "tipo de cliente": 'VIP',
    [nacionalidade]: 'BR'
}

console.log(cliente.nome);

cliente.telefone = 996572911;

console.log(cliente['telefone']);

cliente.idade = 34;

console.log(cliente['idade']);

delete cliente.idade;

console.log(cliente.idade);

console.log(cliente ["tipo de cliente"]);

console.log(cliente.Brasileiro);