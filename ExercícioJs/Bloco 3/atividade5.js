function criarPersonagem(nome, classe, nivel) {
  return {
    nome,
    classe,
    nivel,
    hp: nivel * 10,

    apresentar() {
      console.log(
        `${this.nome} é um(a) ${this.classe} nível ${this.nivel} com ${this.hp} HP`
      );
    }
  };
}

const personagem1 = criarPersonagem("Aragorn", "Guerreiro", 10);
const personagem2 = criarPersonagem("Merlin", "Mago", 8);

personagem1.apresentar();
personagem2.apresentar();