// Aplicando os métodos anteriores em outras situações
// Pesquisar Arrey em objetos, usando FIND
// Funciona como um forEach que encontrando a primeira ocorrencia devolverá o objeto no console

let clientes = [

    {nome: 'Wesley', idade:35},
    {nome: 'Leonice', idade:51},
    {nome: 'Lara', idade:13},
    {nome: 'Lorena', idade:15},
    {nome: 'Wesley', idade: 63},
    {nome: 'Ismerina', idade: 60},
    {nome: 'Lurdes', idade: 96},

];

let cliente = clientes.find(cli => cli.nome == 'Wesley')

console.log(cliente);

// FINDINDEX devolve o indice do objeto e não o objeto em concreto

let cliente_index = clientes.findIndex(elemento => elemento.idade == 51)

console.log(cliente_index);

// O método FILTER devolve todos os resultados da pesquisa

let cliente_filter = clientes.filter(cli => cli.nome == 'Wesley');

console.log(cliente_filter);

let cliente_filter_idosos = clientes.filter(cli => cli.idade <= 65);

console.log('Os clientes não idosos são:', cliente_filter_idosos)

let cliente_filter_adulto = clientes.filter(cli => cli.idade >= 18);

console.log('Os adultos do grupo são', cliente_filter_adulto);