let cliente = {
    nome: 'Wesley',
    sobrenome: 'Damazio',
    telefone: 99239230923,

    nome_completo: function (){
        return this.nome + " " + this.sobrenome
    },

    alterar_nome: function(novo_nome){
        this.nome = novo_nome;
    },
};

console.log(cliente.nome);
console.log(cliente.nome_completo());
cliente.alterar_nome('Manuel')
console.log(cliente.nome_completo());

