const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440", "1163407126"],
};

cliente.endereco = [
    {
        rua: "Rua Joseph Climber",
        numero: "13",
        apartamento: true,
        complemento: "Apto 51",
    }
];

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}.`)
    console.log(`Ligando para ${telefoneResidencial}.`)
}

ligaParaCliente (...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0]
};

console.log(encomenda)