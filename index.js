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
  console.log(aluno.notas);
  aluno.mediaGeral = somaNotas / aluno.notas.length;
});

console.log(alunos);
