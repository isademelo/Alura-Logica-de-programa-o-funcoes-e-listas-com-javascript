/*
1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.*/

let cidade, numero1, numero2, soma;
let alterarH1 = document.querySelector("h1");
alterarH1.innerHTML = ("Hora do Desafio");

function consolePressionado(){
    console.log("O botão console foi pressionado.");
}

function  alertaPressionado(){
    console.log("Eu amo JavaScript.");
}

function perguntarCidade() {
    cidade = prompt("Digite o nome de uma cidade do brasil.");
    alert(`Estive em ${cidade} e lembre de você`);
}

function somarNumeros(){
    alert("Digite dois números inteiros");
    numero1 = parseInt(prompt("Número 1"));
    numero2 = parseInt(prompt("Número 2"));
    soma= numero1 + numero2;
    alert(soma);
}

