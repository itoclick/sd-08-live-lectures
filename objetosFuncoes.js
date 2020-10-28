let estudante = {
  nome: 'Joana',
  idade: 43,
  hardSkills: 3,
  softSkills: 6,
  carreiraSkills: 5
};

estudante.cidade = 'São Paulo';
estudante['comidaFavorita'] = 'Doritos';
estudante['nome'] = 'João';
estudante.apelidos = ['Apelido1', 'Apelido2', 'Apelido3'];
estudante.endereco = {
  logradouro: 'Rua Dalvo Trombeta',
  numero: 357
};

//console.log(estudante);



for (let key in estudante ) {
  console.log(key, estudante[key]);
}












function trybe(estudanteTrybe) {
  let pessoaDesenvolvedora = estudanteTrybe;

  pessoaDesenvolvedora.hardSkills = 10;
  pessoaDesenvolvedora.softSkills = 10;
  pessoaDesenvolvedora.carreiraSkills = 10;
  pessoaDesenvolvedora.tryber = true;

  return pessoaDesenvolvedora;
};