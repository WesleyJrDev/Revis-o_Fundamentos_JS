// é possivel utilizar um terceiro argumento na função dentro do REDUCE, o INCIAL, que determinará o valor inicial a partir do qual serão somados os valores do ARREY

let valores = [10,20,30,40,50]

let total = valores.reduce((somatorio,atual)=> somatorio + atual, -100);

console.log(total)

// e o método REDUCERIGTH, que colocará esse valor ao final do ARREY

let total2 = valores.reduceRight((somatorio,atual)=> somatorio + atual, 100);

console.log(total2)
