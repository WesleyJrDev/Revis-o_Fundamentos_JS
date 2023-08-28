let nomes = [ 'João', 'Maria', 'Ana', 'Marta', 'Joaquim', 'Manuel']

let tamanhos = nomes.map(nome => nome.length)
    console.table(tamanhos)

console.table(nomes.map(nome => {
   return `Olá, ${nome}`}));

// ex 2, é possivel fazer operações matemáticas com valores dentro do Arrey.

let valores = [9,16,36,81,25]

console.table(valores.map(n => Math.sqrt(n)));

