const estoque = {
  produtos: [],

  adicionarProduto(nome, preco, quantidade) {
    this.produtos.push({ nome, preco, quantidade });
  },

  listarProdutos() {
    for (const produto of this.produtos) {
      console.log(
        `${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`
      );
    }
  },

  buscarProduto(nome) {
    for (const produto of this.produtos) {
      if (produto.nome === nome) {
        return produto;
      }
    }
    return null;
  },

  valorTotal() {
    let total = 0;

    for (const produto of this.produtos) {
      total += produto.preco * produto.quantidade;
    }

    return total;
  }
};

estoque.adicionarProduto("Notebook", 4500, 2);
estoque.adicionarProduto("Mouse", 120, 5);
estoque.adicionarProduto("Teclado", 280, 3);
estoque.adicionarProduto("Monitor", 1800, 2);

estoque.listarProdutos();

console.log(estoque.buscarProduto("Mouse"));
console.log(estoque.buscarProduto("Celular"));

console.log(`Valor total: R$ ${estoque.valorTotal().toFixed(2)}`);