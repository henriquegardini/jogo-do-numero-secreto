let numeroSecreto = geraNumeroAleatorio(10);
console.log(`O número secreto é o ${numeroSecreto}`);
let chute;
let tentativa = 1;

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (numeroSecreto == chute) {
        escreverTexto("h1", `ACERTOOOU!!!`);
        if (tentativa > 1) {
            if (tentativa <= 3) {
                escreverTexto("p", `Parabéns, você acertou o número secreto na ${tentativa}º tentativa!!!`);
            } else {
                escreverTexto("p", `Você acertou o número secreto na ${tentativa}º tentativa.`);
            }
        } else {
            escreverTexto("p", `Você é um vidente!? kkk<br> Conseguiu acertar o número secreto na ${tentativa}º tentativa.`);
        }
        document.getElementById("chute").setAttribute("disabled", true);
        document.getElementById("chutar").setAttribute("disabled", true);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        escreverTexto("h1", `ERROOOU!!!`);
        if (numeroSecreto > chute) {
            escreverTexto("p", `Você errou, o número secreto é maior que ${chute}.`);
        } else {
            escreverTexto("p", `Você errou, o número secreto é menor que ${chute}.`);
        }
        tentativa++;
        limparCampo();
    }

    console.log("O botão Chutar foi clicado!");
}

function geraNumeroAleatorio(numeroMaximo) {
    return parseInt(Math.random() * numeroMaximo + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    console.log("O botão Novo jogo foi clicado!");
    numeroSecreto = geraNumeroAleatorio(10);
    console.log(`O número secreto é o ${numeroSecreto}`);
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
    document.getElementById("chute").removeAttribute("disabled");
}

function escreverTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial () {
    escreverTexto("h1", "Jogo do número secreto.");
    escreverTexto("p", "Escolha um número entre 1 e 10.");
}