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

const mediaGeral = gerarMediaGeral(alunos[1].notas);

const alunoComMediaGeral = alunos.map((aluno) => {
  const mediaGeral = null;
  aluno.mediaGeral = mediaGeral;
});

console.log(mediaGeral);

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
  return aluno;
});

console.log(mediaGeral);

// correção com reduce (já fiz com o exercício, mas vamos ter para exemplo)

const mediaGeralCallBack = (acumulador, proximoValor) => {
  const { nota } = proximoValor;
  return acumulador + nota;
};
/* ao invés de ter feito igual eu fiz, dessa vez tiramos o callback do reduce e botamos numa variável separada, isso é usado quando queremos testar melhor aquele callback ou então queremos usar tal callback em outras functions */
function gerarMediaGeral3(notas) {
  const mediaGeral = notas.reduce(mediaGeralCallBack, 0);
  return mediaGeral / notas.length;
}

const alunoComMediaGeral = alunos.map((aluno) => {
  const mediaGeral = gerarMediaGeral3(aluno.notas);
  aluno.mediaGeral = mediaGeral;
  return aluno;
});
