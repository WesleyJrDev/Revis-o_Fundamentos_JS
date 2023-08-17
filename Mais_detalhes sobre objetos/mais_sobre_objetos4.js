let nome = "Wesley Damazio";
let num = 9;
console.log( nome.toLocaleUpperCase());
console.log( `Esse nome contêm ${nome.length} caracteres`);
console.log( `O caracter numero ${num} é ${nome.charAt(num).toUpperCase()}`);

let peso = 85.55;
console.log( peso.toFixed(0));

// Juntanto Strings

let string1 = "um, ";
let string2 = "dois, ";
let string3 = "três";

let string_total = string1 + string2 + string3;

console.log(string_total);
console.log(string_total.length)

let outra_string_total = string1.concat(string2, string3);
console.log(outra_string_total);

// Verificar se uma string inclui outra

console.log(nome.includes('Junior'));

// dividir uma string

let frase = 'Está frase tem varias palavras'

console.log(frase.split(" "));

let novo = num.toString();
console.log(typeof(novo));
