// Pegando os dados do jogador do HTML
const pegandoDados = function () {
    // Pegando o número do jogador do HTML
    const numeroJogador = document.getElementById('inputNumero').value;

    // Pegando o nome do jogador do HTML
    const nomeJogador = document.getElementById('inputNome').value;

    // Pegando a posição do jogador do HTML
    const posicaoJogador = document.getElementById('inputPosicao').value;

    // Mudança: retornando um objeto com os valores
    return { numeroJogador, nomeJogador, posicaoJogador };
}

// Adicionar os dados do jogador escalado no HTML
function escalarJogador() {
    // Desestruturando o objeto retornado por pegandoDados
    const { numeroJogador, nomeJogador, posicaoJogador } = pegandoDados(); // Quando feito assim é um atralho pra criar e atribuir variaveis com o mesmo nome

    // Pegando a div onde será adicionado os dados
    const divJogadoresEscalados = document.getElementById('divJogadoresEscalados');

    // Criando a ul onde será adicionado os dados
    const ulJogadorEscalados = document.createElement('ul');
    ulJogadorEscalados.id = numeroJogador;

    // Criando elemento li com o número do jogador escalado
    const liJogadorNumero = document.createElement('li');
    liJogadorNumero.innerText = "Número do Jogador: " + numeroJogador;

    // Criando elemento li com o nome do jogador escalado
    const liJogadorNome = document.createElement('li');
    liJogadorNome.innerText = "Jogador escalado: " + nomeJogador;

    // Criando elemento li com a posição do jogador escalado
    const liJogadorPosicao = document.createElement('li');
    liJogadorPosicao.innerText = "Posição do Jogador: " + posicaoJogador;

    function confirmarJogador() {
        // Adicionando os filhos no HTML
        ulJogadorEscalados.appendChild(liJogadorNumero);
        ulJogadorEscalados.appendChild(liJogadorNome);
        ulJogadorEscalados.appendChild(liJogadorPosicao);

        divJogadoresEscalados.appendChild(ulJogadorEscalados);
    }

    const confirmarJogadorEscalado = confirm(`Deseja confirmar o jogador ${nomeJogador}, número: ${numeroJogador} na posição ${posicaoJogador}`);

    if (confirmarJogadorEscalado) {
        confirmarJogador();
    } else {
        alert(`Jogador ${nomeJogador} não escalado!`);
    }
}

// Função para remover jogador
function removerJogador() {
    // Pegando o número do jogador a ser removido
    const numeroJogadorRemover = document.getElementById('inputRemoverNumero').value;
    
    // Pegando a div onde será removido os dados
    const divJogadoresEscalados = document.getElementById('divJogadoresEscalados');
    
    // Pegando a ul do jogador a ser removido
    const ulJogadorRemover = document.getElementById(numeroJogadorRemover);

    // Pegando as li do jogador a ser removido
    const itensUlJogadorRemover = ulJogadorRemover.getElementsByTagName('li');

    // Pegando a li do nome do jogador a ser removido
    const nomeJogadorRemover = itensUlJogadorRemover[1].textContent;

    if (numeroJogadorRemover) {
        const jogadorParaRemoverConfirmacao = confirm(`Deseja realmente remover o ${nomeJogadorRemover} número: ${numeroJogadorRemover}?`);

        if (jogadorParaRemoverConfirmacao) {
            divJogadoresEscalados.removeChild(ulJogadorRemover);
            alert(`O ${nomeJogadorRemover} número: ${numeroJogadorRemover} foi removido!`);
        } else {
            alert(`Jogador não foi removido`);
        }
    } else {
        alert("Jogador não encontrado!");
    }
}