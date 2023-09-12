console.clear();

// Classe é uma maneira de definir uma estrutura de propriedades e métodos para objetos sem definir seus respectivos valores. 
// Ao criar novos objetos ligados a essa classe, esse altomaticamente herdará essas definições e apenas será necessário implementar os valores para cada propriedade. 

class Pessoa {

    // propriedade | fields | campos

    nome
    sobrenome
    idade

    // Método

    apresentar(){
        return `Olá, me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos \n`
    }

};

let eu = new Pessoa();

eu.idade = 35;
eu.nome = 'Wesley';
eu.sobrenome = 'Damazio';

let voce = new Pessoa();

voce.idade = 50;
voce.nome = 'Leonice';
voce.sobrenome = 'Damazio';

console.table(eu);

console.table(voce);

console.log('-'.repeat(100));

console.log(eu.apresentar());

console.log(voce.apresentar());