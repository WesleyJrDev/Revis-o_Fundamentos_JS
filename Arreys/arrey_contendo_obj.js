let clientes = [
    {nome: 'wesley', sobrenome: 'damazio', idade: 35},
    {nome: 'leonice', sobrenome: 'damazio', idade: 51},
    {nome: 'lara', sobrenome: 'damazio', idade: 13},
    {nome: 'lonera', sobrenome: 'nogueira', idade: 15},
];

// console.log(clientes[2].nome);

// clientes.forEach(cliente => {
//     console.log(`O cliente ${cliente.nome} ${cliente.sobrenome} tem ${cliente.idade} anos`)
// });

for( let i = 0; i <= clientes.length; i++){
    console.log(`O cliente ${clientes[i].nome} ${clientes[i].sobrenome} tem ${clientes[i].idade} anos`);
};