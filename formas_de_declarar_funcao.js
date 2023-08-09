console.clear();

function dizer_ola1(){
    console.log("Olá1");
};

// function expression, quando uma variavel é declarada com uma função como.

let dizer_ola2 = function(){
    console.log("Olá2");
};

dizer_ola1()
dizer_ola2()

let nova_variavel = dizer_ola2;

nova_variavel()