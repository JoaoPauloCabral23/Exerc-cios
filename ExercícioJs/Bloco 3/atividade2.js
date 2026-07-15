const saudacao = nome => `Olá, ${nome}! Bem-vindo ao sistema.`;

const ehPositivo = numero => numero > 0;

const calcularArea = (largura, altura) => largura * altura;

console.log(saudacao("Ana"));
console.log(saudacao("Carlos"));

console.log(ehPositivo(10));
console.log(ehPositivo(-5));
console.log(ehPositivo(0));

console.log(calcularArea(5, 8));
console.log(calcularArea(10, 3));