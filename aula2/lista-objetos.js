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

  cliente.enderecos.push({
    rua: "Rua Alguma Coisa",
    numero: 404,
    apartamento: false,
  });

  const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === false
  );

  console.log(listaApenasApartamentos);
  