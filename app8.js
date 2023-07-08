
function adição (a,b){
    console.log(`A soma de ${a} + ${b} é ${a+b}`)
}

adição(5,10);

// Situação 2

function multiplicar(x,y){
    return x * y;
}

let valor = multiplicar(5,10);
console.log("O resultado da multiplicação é " + valor);

// Situação 3

let nome = "Junior";

function apresentar_nome(){
    console.log(nome);
    nome = "Wesley";
};

apresentar_nome();
console.log(nome);

// Situação 4

function mult( A, B = 2 ){
  return  A*B;
}

console.log(mult(3));
console.log(mult(3,4));

// Situação 5

function apresentar_valor(valor_){
    // if (valor_ === undefined) valor_ = 100;
    // valor_ = valor_ || 200;
    console.log(valor_)
}

apresentar_valor();
