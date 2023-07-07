
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

console.log("Situação 3")

ciclo: for(let valorA = 1; valorA<= 4; valorA++){

    for(let valorB = 1; valorB <=3; valorB++){
    console.log(`${valorA} x ${valorB} = ${valorA*valorB}`);

    if (valorA*valorB == 9) break ciclo;

    }
}

console.log("Situação 4")

ciclo2: for(let valorX= 1; valorX<= 10; valorX++){

    for(let valorY=1; valorY<= 10; valorY++){
        console.log(`${valorX} x ${valorY} = ${valorX*valorY}`)

        if(valorX * valorY == 10){
            console.log("Interrompido");
            break ciclo2;
        }
    }

}