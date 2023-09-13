// Definir propriedades privadas dentro do class
// Serve para tirar o acesso direto a propriedade

class Pessoa {
    #nome 
    idade 

    constructor(n,i){
        this.#nome = n
        this.idade = i

    }


    // 2 métodos para buscar uma propriedade SET E GET

    setNome(nome){
        if(nome == 'wesley'){

            this.#nome = 'Olá, ' + 'Wesley Damazio'.toUpperCase() + ' Seja bem vindo!';

        }else{

            this.#nome = nome.toUpperCase() + ', Você não está autorisado!!!';

        }
    }

    getNome(){

        return this.#nome
    }

    #apresentar_interno() {
        console.log('nome: ' + this.#nome);
    } 

    apresentar(){
        this.#apresentar_interno();
    }

}
console.clear();

let eu = new Pessoa ( 'joaquim', 35 );

// eu.setNome('wesley');

// console.log(eu.getNome());

eu.apresentar();