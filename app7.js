// let valor = 0;

// switch (valor){

//     case 1:
//         console.log("O valor é 1");
//         break;  
//     case 2:
//         console.log("O valor é 2");
//         break;
//     case 3:
//         console.log("O valor é 3");
//         break;
//     default:
//         console.log("Nada...");
//         break;

// }

// Situação 2

let valor2 = '1';

switch (valor2){

    case 1: 
        console.log("Numero");
        break;

    case '1':
        console.log("Texto");
        break;

    default:
        console.log("...");
        break;
}

// Situação 3

let valor3 = 10;

switch (valor3) {
    case 1:
    case 2:
    case 3:
        console.log("O numero é inferior a 4")
        break;

    case 4:
        console.log("é o numero 4");
        break;

    default:
        console.log("O numero é superior a 4")
        break;
}