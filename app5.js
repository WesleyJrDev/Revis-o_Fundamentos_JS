
for(let valor = 1; valor <=10; valor++){
    console.log(valor)

    if (valor == 3) break;
}

console.log("Situação 2")

for(let valor1 = 1; valor1 <= 4; valor1++ ){
    
    for(let valor2 = 1; valor2 <= 3; valor2++){
        console.log(`${valor1} x ${valor2} = ${valor1*valor2}`)
    }
    
}