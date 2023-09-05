// A principal diferença entre VAR e LET está no funcionamento interno, atualmente Let é predominantemente usado para declarar variaveis em detrimento do Var, e no ESCOPO

// VAR não tem escopo de Bloco, se torna uma variavel Global

console.clear();

if (0 == 0){
    var nome1 = 'Wesley';
};

console.log(nome1);

// Se usarmos o LET ao invés do Var só teremos a variavel exclusiva dentro do IF

if (1 == 1){
    let nome2 = 'Junior';
}

console.log(nome2);