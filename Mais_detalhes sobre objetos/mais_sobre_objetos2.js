const client = {
    nome: "Wesley",
    sobrenome:"Damazio",
    telefone:996572911
}

console.log(client.telefone)

console.log('telefone' in client);

if ('telefone' in client){
    console.log(client.telefone);
}else{
    console.log("Sem cadastro de telefone")
};

for (key in client){

    console.log(key + ": " + client[key])

}

const zonas = {

    1:'Fábrica',
    4:'Escritório',
    20:'Armazem',
    3:'Loja',
    

};

for (key in zonas){
    console.log(key + ": " + zonas[key]);
};