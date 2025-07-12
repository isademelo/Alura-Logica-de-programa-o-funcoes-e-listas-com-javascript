const quantidadeNumeros = parseInt(prompt("Digite a quantidade de números que você quer que tenha no jogo de adivinhação"));

let texto = document.querySelector('h1');
texto.innerHTML= "Jogo de adivinhação"
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = `Digite um número entre 1 e ${quantidadeNumeros}`

const numeroSecreto= parseInt(Math.random()* quantidadeNumeros +1);
console.log(numeroSecreto); 
let tentativas = 0;

function verificarChute() {

    let chute = parseInt(document.querySelector('input').value);
    tentativas ++;

        let mensagemChute = tentativas > 1 ? `Você chutou ${tentativas} vezes` : `Você chutou ${tentativas} vez`;
        console.log(mensagemChute);

        if (chute > numeroSecreto){
            alert(`Palpite errado, tente novamente. O número secreto é menor que ${chute}`);
        } else if (chute < numeroSecreto){
            alert(`Palpite errado, tente novamente. O número secreto é maior que ${chute}`);
        } else {
            let qtdTentativa = tentativas > 1 ? `Muito bem, Palpite certo! Você acertou usando ${tentativas} tentativas` : `Muito bem, Palpite certo! Você acertou usando ${tentativas} tentativa`
            alert(qtdTentativa);
        }

} 