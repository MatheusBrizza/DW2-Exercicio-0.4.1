// run `node index.js` in the terminal

const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

alunos.forEach((aluno) => {
  const somaNotas = aluno.notas.reduce((acumulador, proximoValor) => {
    return acumulador + proximoValor.nota;
  }, 0);
  //console.log(aluno.notas);
  aluno.mediaGeral = somaNotas / aluno.notas.length;
});

console.log(alunos);

// correção com forOf;

function gerarMediaGeral(notas) {
  let mediaGeral = 0;
  for (let aluno of alunos) {
    mediaGeral = mediaGeral + aluno.nota;
    mediaGeral = mediaGeral + nota.nota;
  }
  return mediaGeral / notas.length;
}

// correção com forEach

function gerarMediaGeral2(notas) {
  let mediaGeral = 0;
  notas.forEach((nota) => {
       mediaGeral = mediaGeral + nota.nota;
  });
  return mediaGeral / notas.length;
}

const alunoComMediaGeral = alunos.map((aluno) => {
  const mediaGeral = gerarMediaGeral2(aluno.notas);
  aluno.mediaGeral = mediaGeral;
});

//const mediaGeral = gerarMediaGeral(alunos[1].notas);

console.log(mediaGeral);

