const produto = {
  nome: "Notebook",
  preco: 4500,
  categoria: "Eletrônicos",
  emEstoque: true
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.emEstoque);

produto.preco = 4000;
produto.desconto = 0.1;

const precoFinal = produto.preco - produto.preco * produto.desconto;

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);