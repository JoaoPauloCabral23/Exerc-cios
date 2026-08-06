function validarNome(nome){
    if (nome.length >= 3){
        console.log("Tudo certo.")
    } else {
        console.log("O nome deve ter pelo menos 3 caracteres.")
    }
}

function validarIdade(idade){
    if (idade > 0){
        console.log("Tudo certo.")
    } else {
        console.log("A idade deve ser maior que 0.")
    }
}

module.exports = {
    validarNome,
    validarIdade
};