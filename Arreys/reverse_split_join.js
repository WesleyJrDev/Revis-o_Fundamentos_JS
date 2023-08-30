console.clear();

// Reverse inverte o proprio arrey em sua ordem

let nomes = [ 'joao', 'maria', 'pedro', 'paulo', 'marta'];

nomes.reverse();

console.table(nomes);

console.log('_'.repeat(100));

// Split não é um método arrey, mas o resultado de sua aplicação cria um ARREY. Ele define o ponto de separação entre os caracteres, e cria o arrey com o conteudo entre essas delimitações.

let e_mails = 'paulo@hotmail.com,joao@gmail.com,manuel.123@email.com'

let colecao = e_mails.split(',');

console.table(colecao);

console.log('_'.repeat(100));

// Método utilizando o TRIM para separar corretamente quando o espaçamento ao redor da virgula não mantem um padrão

let e_mails2 = 'paulo@hotmail.com, joao@gmail.com , manuel.123@email.com,ana@tabajaramail.com'

let colecao2 = e_mails2.split(',').map(e=> {
    return e.trim();
});

console.table(colecao2);

// Segundo argumento facultativo no Split que indica a quantidade de elementos a serem aproveitados do arrey

let colecao3 = e_mails2.split(',',2).map(e=> {
    return e.trim();
});

console.table(colecao3);

// Separar uma String por letras, criando um arrey com cada uma

let letras = 'Separar por caractér'

let separar = letras.split('');

console.table(separar);

// O método JOIN faz o inverso do SPLIT

let colecao4 = ['ana', 'mario', 'joao' , 'maria']

let string1 = colecao4.join('');
let string2 = colecao4.join(' ; ');
let string3 = colecao4.join(' e ');

console.log(string1);
console.log(string2);
console.log(string3);
