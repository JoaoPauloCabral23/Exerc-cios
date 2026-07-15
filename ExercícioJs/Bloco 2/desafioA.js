const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 4.0 },
  { nome: "Carla", nota: 7.0 },
  { nome: "Diego", nota: 5.5 },
  { nome: "Elena", nota: 9.5 },
  { nome: "Felipe", nota: 6.0 }
];

let somaNotas = 0;
let aprovados = 0;
let melhorAluno = alunos[0];

// Percorre todos os alunos
for (let aluno of alunos) {
  let situacao;

  if (aluno.nota >= 7) {
    situacao = "Aprovado";
    aprovados++;
  } else if (aluno.nota >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

  console.log(`${aluno.nome}: ${situacao}`);

  somaNotas += aluno.nota;

  if (aluno.nota > melhorAluno.nota) {
    melhorAluno = aluno;
  }
}

// Média da turma
const media = somaNotas / alunos.length;

console.log("\nMédia da turma:", media.toFixed(2));
console.log("Quantidade de aprovados:", aprovados);
console.log(
  `Melhor aluno: ${melhorAluno.nome} (${melhorAluno.nota})`
);