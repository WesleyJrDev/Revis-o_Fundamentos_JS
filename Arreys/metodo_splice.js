let nomes =['Ana', 'Carlos', 'Antonio', 'João']

// ---------> Remover um elemento do Arrey(que é um objeto em essência) <--------------------------
console.clear()

// delete nomes[1]

// console.log(nomes)

// //-------------> Mantem a vaga do elemento deletado, que continua sendo contado. <---------------

// console.log(nomes.length)


//-----> SPLICE(*) onde '*' é o numero de elementos de restarão no Arrey. Retirando os ultimos elementos do Arrey primeiro se tiver apenas um numero dentro das '()'. Ou se não (a,b), o primeiro numero se refete a posição do elemento a ser sacado, e o segundo a quantidade de elementos a serem sacados. <-----------------------------------------------------------------------------------------

// Ex: a partir do índice a, remove b elemento.

// nomes.splice(2,1)

// console.log(nomes)

// console.log(nomes.length)

// let nomes_removidos = nomes.splice(3);

// console.log(nomes)

// console.log(nomes_removidos);

// ----------> SUBSTITUIR UM VALOR POR OUTRO/ SPLICE(A,B,C) onde A é indice a ser iniciado, B o numero de Elementos a serem tirados, e C o valor do elemento inserido <------------

nomes.splice(0,2, 'Joaquim', 'Pedro', 'Manuel' )

console.log(nomes)


