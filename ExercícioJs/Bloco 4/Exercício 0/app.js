/* Modo Escuro/Claro */

const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener('click', () => {

    document.body.classList.toggle('dark');

    const modoEscuro = document.body.classList.contains('dark');

    btnTema.textContent = modoEscuro ? 'Modo Claro' : 'Modo Escuro';

    console.log('Modo Escuro Ativado!');
});

/* Perfil Ocultar e Mostrar */

const btnToggleInfo = document.querySelector('#btn-toggle-info');
const infoCorpo     = document.querySelector('#info-corpo');

btnToggleInfo.addEventListener('click', () => {

    const visivel = infoCorpo.style.display !== 'none';

    if(visivel){
        infoCorpo.style.display = 'none';
        btnToggleInfo.textContent = 'Mostrar';
    } else {
        infoCorpo.style.display = 'block';
        btnToggleInfo.textContent = 'Ocultar';
    }

    console.log(`Informações Visíveis ${!visivel}`);
});

/* Aumentar Habilidades em JS */

const btnAumentarJS = document.querySelector('#btn-aumentar-js');
const barraJS       = document.querySelector('#barra-js');
const nivelJS       = document.querySelector('#nivel-js');

btnAumentarJS.addEventListener('click', () => {

    const nivelAtual = parseInt(nivelJS.textContent);

    if(nivelAtual >= 100){
        btnAumentarJS.textContent = 'JavaScript Dominado!';
        btnAumentarJS.disable     = true;
        return;
    } 

    const novoNivel = Math.min(nivelAtual + 10, 100);

    nivelJS.textContent = novoNivel + '%';
    barraJS.style.width = novoNivel + '%';

    console.log(`Nível JS Agora: ${novoNivel}%`);
})

/* Edição de Perfil */

const btnEditarNome    = document.querySelector('#btn-editar-nome');
const formEdicao       = document.querySelector('#form-edicao');
const inputNome        = document.querySelector('#input-nome');
const inputProfissao   = document.querySelector('#input-profissao');
const nomeUsuario      = document.querySelector('#nome-usuario');
const profisaoUsuario = document.querySelector('#profissao-usuario');

btnEditarNome.addEventListener('click', () => {

    formEdicao.style.display = 'block';

    inputNome.value = nomeUsuario.textContent;
    inputProfissao.value = profisaoUsuario.textContent;

    console.log(`Formulário Aberto. Nome Atual: ${inputNome.value}`);
});

/* Slavar e Cancelar Alterações de Perfil */

const btnSalvar   = document.querySelector('#btn-salvar');
const btnCancelar = document.querySelector('#btn-cancelar');

btnCancelar.addEventListener('click', () => {

    formEdicao.style.display = 'none';
    console.log("Edição Cancelada")
});

btnSalvar.addEventListener('click', () => {

    const novoNome = inputNome.value.trim();
    const novaProfissao = inputProfissao.value.trim();

    if(novoNome === ''){
        alert('O nome não pode ser vazio! Tongão!');
        return;
    }

    nomeUsuario.textContent = novoNome;
    profisaoUsuario.textContent = novaProfissao || 'Sem Profissão';

    formEdicao.style.display = 'none';

    console.log(`Perfil salvo: ${novoNome} ${novaProfissao}`);
})
