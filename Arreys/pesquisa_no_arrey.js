// Procura em todo o ARREY o primeiro Match e para a pesquisa

let nomes = [ 'joao', 'maria', 'pedro', 'paulo', 'marta'];

let posicao1 = nomes.indexOf('maria');

console.log(posicao1);

// Procurar o ARREY a partir do indice 2 até o fim

let posicao2 = nomes.indexOf('marta',2);

console.log(posicao2);

// No caso de não existir o valor procurado o retorno no console é -1

let posicao3 = nomes.indexOf('alberto');

console.log(posicao3);

let nomes2 = ['joao','ana', 'maria', 'pedro', 'paulo', 'marta','ana'];

// lastIndexOf pesquisa o valor começando pelo ultimo elemento dentro do arrey e para a pesquisa tambem no primeiro Match

console.log(nomes2.indexOf('ana'));
console.log(nomes2.lastIndexOf('ana'));

// Método INCLUDE devolve uma resposta booleana

let pesquisa = 'ana'

if(nomes2.includes(pesquisa)){
console.log(`${pesquisa} existe no Arrey`);

}else{
    console.log(`${pesquisa} não existe no Arrey`);
};