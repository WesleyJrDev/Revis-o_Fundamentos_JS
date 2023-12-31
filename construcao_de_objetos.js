// Usando o construtor do Objeto

// let objeto = new Object(); 

// //  Usando o Literal do Objeto

// let Object = {};

// Exemplo de constructor

function Pessoa(nm, sn, tel){
    this.nome = nm;
    this.sobrenome = sn;
    this.telefone = tel;

    this.nome_completo = function(){
        return this.nome + " " + this.sobrenome;
    };

    this.alterar_nome = function(novo_nome){
        this.nome = novo_nome;
    };
}

let cliente = new Pessoa('Wesley', 'Damazio', 18996572911);

console.log(cliente.nome);
console.log(cliente.nome_completo());

cliente.alterar_nome("Leonice");

console.log(cliente.nome_completo());

let cliente2 = new Pessoa('Maria', 'Joaquina', 192308239);

console.log(cliente2.nome_completo());