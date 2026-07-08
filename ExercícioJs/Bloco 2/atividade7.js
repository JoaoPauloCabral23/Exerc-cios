const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log("Média:", media.toFixed(2));