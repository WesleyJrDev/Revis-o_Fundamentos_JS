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