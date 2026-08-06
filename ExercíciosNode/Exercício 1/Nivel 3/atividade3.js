let nomeItem = "Katana";
let preco = 80;
let ouro = 100;

falta = preco - ouro;

if (ouro > preco) {
    console.log(`Voce comprou ${nomeItem}!`);
} else {
    console.log(`Ouro Insuficiente! Faltam ${falta}`);
}