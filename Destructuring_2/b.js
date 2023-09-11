console.clear();

// Podemos alterar a ordem das variaveis, pois elas serão declaradas de acordo com o nome correlacionado a chave

let cliente = {
    nome:'Wesley',
    sobrenome:'Damazio',
    idade:35,
    nacionalidade: 'Br'
};

let {idade,nome,nacionalidade,sobrenome} = cliente;

console.log(nome,"\n",sobrenome,'\n',idade,'\n',nacionalidade);


