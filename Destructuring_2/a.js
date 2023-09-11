// É possivel Desestruturar objetos tambem

console.clear();

let cliente = {
    Nome: 'Wesley',
    Sobrenome: 'Damazio',
    Idade: 35,
    Nacionalidade: 'Brasil',
};

let {Nome,Sobrenome,Idade,Nacionalidade} = cliente;

console.log(Nome);
console.log(Sobrenome);
console.log(Idade);
console.log(Nacionalidade);


