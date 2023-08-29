// O Sort coloca em ordem alphanumérica

// let nomes = [ 'João', 'Maria', 'Ana', 'Marta', 'Joaquim', 'Manuel']

// nomes.sort()

// console.table(nomes)

// Atenção, o ordenador considera apenas o primeiro digito do numero.

let valores = [25,1,20,3,15,35,40,90];

// valores.sort()

// console.table(valores)

// Para resolver

function comparar(a,b){
    console.log(`comparando, ${a} com ${b} temos:`)
    if (a>b) return 1, console.log(`${a} > ${b}`)
    
    if (a==b) return 0, console.log(`${a} == ${b}`)
    
    if (a<b) return -1, console.log(`${a} < ${b}`)
    
};

console.table(valores.sort(comparar));

// console.table(valores.sort((a,b) => {
//     console.log(`${a} compara com ${b}`);
//     return a - b;
// }));