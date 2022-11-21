const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [{
rua: "Rua Joseph Climber",
numero: "13",
apartamento: true,
complemento: "Apto 51",
}];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}