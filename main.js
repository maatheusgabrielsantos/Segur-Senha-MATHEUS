const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanahoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-sneha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho() {
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha;
}