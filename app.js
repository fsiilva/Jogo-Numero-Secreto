let listaNumerosSorteador = [];
let numeroLimite = 3;
let numeroSec = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela(`h1`, `Jogo do numero secreto`);
    exibirTextoNaTela(`p`,`Escolha u numero entre 1 e 10`);   
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    if (chute == numeroSec){
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativa = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela(`h1`, `Acertou!`);
        exibirTextoNaTela(`p`, mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSec){
            exibirTextoNaTela(`p`, `numero secreto e menor`);
        } else{
            exibirTextoNaTela(`p`, `numero secreto e maior`);
        }
        tentativas ++;
        limparCampo();
        
    }
}

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroLimite +1);
    let qtdNumerosEscolidos = listaNumerosSorteador.length;

    if(qtdNumerosEscolidos == numeroLimite){
        listaNumerosSorteador = [];
    }

    if(listaNumerosSorteador.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteador.push(numeroGerado);
        return numeroGerado;
    }
    
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarNovoJogo() {
    numeroSec = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}