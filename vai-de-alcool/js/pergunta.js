
let respostaCorreta = 42;
let tempo = 30;
let erros = 3;
let intervalo;
let jogoAtivo = true;

function iniciarTemporizador() {
    intervalo = setInterval(function() {
        tempo--;

        document.getElementById("tempo").textContent = tempo;

        if (tempo <= 0) {
            perderJogo("O tempo acabou! Você perdeu!");
        }
    }, 1000);
}

function verificarResposta() {

    if (!jogoAtivo) {
        return;
    }

    let resposta = Number(document.getElementById("resposta").value);

    if (document.getElementById("resposta").value === "") {
        document.getElementById("mensagem").textContent =
            "Digite uma resposta!";
        return;
    }

    if (resposta === respostaCorreta) {

        document.getElementById("mensagem").textContent =
            "Parabéns! Você acertou!";

        document.getElementById("mensagem").style.color = "white";

        clearInterval(intervalo);
        jogoAtivo = false;

    } else {

        erros--;

        document.getElementById("erros").textContent = erros;

        let porcentagem = (erros / 3) * 100;

        document.getElementById("barra").style.width =
            porcentagem + "%";

        document.getElementById("mensagem").textContent =
            "Resposta errada! Tente novamente.";

        document.getElementById("mensagem").style.color = "red";

        if (erros === 0) {
            perderJogo("Você errou 3 vezes! Fim de jogo!");
        }
    }

    document.getElementById("resposta").value = "";
}

function perderJogo(mensagem) {

    jogoAtivo = false;

    clearInterval(intervalo);

    document.getElementById("mensagem").textContent = mensagem;
    document.getElementById("mensagem").style.color = "red";
}

function reiniciarJogo() {

    clearInterval(intervalo);

    tempo = 30;
    erros = 3;
    jogoAtivo = true;

    document.getElementById("tempo").textContent = tempo;
    document.getElementById("erros").textContent = erros;
    document.getElementById("barra").style.width = "100%";
    document.getElementById("mensagem").textContent = "";
    document.getElementById("resposta").value = "";

    iniciarTemporizador();
}

iniciarTemporizador();
