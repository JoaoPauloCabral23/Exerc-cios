function boasVindas(nome){
    console.log(`${nome}`);
}

function despedida(nome){
    console.log(`${nome}`);
    return;
}

let autorSistema = "Maria Lizier";

module.exports = {
    boasVindas,
    despedida,
    autorSistema
};
