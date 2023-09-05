// Se usado dentro de uma Função, o Var é global apenas dentro dessa função

console.clear();

function somar(a,b){
    var resultado = a + b;
    console.log('dentro do bloco: ', resultado);
};

somar(10,5);
console.log('Fora do bloco: ', resultado);
