// let cliente1 = 'João';
// let cliente2 = cliente1;

// console.log(cliente1);
// console.log(cliente2);

// cliente1 = 'ana';

// console.log(cliente1);
// console.log(cliente2);

// let cliente1 = {
//     nome: 'Ana'
// };

// let cliente2 = cliente1;

// console.log(cliente1.nome);
// console.log(cliente2.nome);

// let obj1 = {
//     valor: 10
// };

// let obj2 = {
//     valor:20
// };

// if (obj1 == obj2){
//     console.log('Iguais');
//     console.log(obj1.valor, ' = ', obj2.valor)
// }else{
//     console.log('Diferentes')
//     console.log(obj1.valor, ' ! ', obj2.valor)
// };

// obj1 = obj2

// if(obj1 == obj2){
//     console.log('Iguais')
//     console.log(obj1.valor, ' = ', obj2.valor)
// }else{
//     console.log('Diferentes')
//     console.log(obj1, ' ! ' , obj2)
// }

// CLONANDO OBJETOS método 1

let user1 = {
    nome: 'joão'
};

let user2 = {};

for (let k in user1){
    user2[k] = user1[k];
}

console.log(user1.nome);
console.log(user2.nome);

user1.nome = 'Ana';

console.log(user1.nome);
console.log(user2.nome);

// CLONANDO OBJETOS método 2, Object.assign:

let usuario1 = {
    nome: 'Junior'
};

let usuario2 = {};

Object.assign(usuario2, usuario1);

console.log(usuario1.nome);
console.log(usuario2.nome);

usuario2.nome = 'Wesley';

console.log(usuario1.nome);
console.log(usuario2.nome);



