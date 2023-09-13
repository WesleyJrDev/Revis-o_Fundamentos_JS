// Construtor no class
// O constroctor não será ignorado, sendo necessariamente executado mesmo quando não mencionado por uma função.

class Pessoa {

    // nome 
    // idade

    constructor(n,i) {
        this.nome = n
        this.idade = i
    }

    apresentar(){
        return `Olá, eu sou o ${this.nome} e tenho ${this.idade} anos`
    }

};

let eu = new Pessoa('Wesley', 35);

eu.nome = 'Joaquim';

console.log(eu.apresentar());