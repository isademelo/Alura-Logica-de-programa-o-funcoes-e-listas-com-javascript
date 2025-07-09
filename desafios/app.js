
//2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let cidade, numero1, numero2, soma;
let alterarH1 = document.querySelector("h1");
alterarH1.innerHTML = "Hora do Desafio";

//3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function consolePressionado(){
    console.log("O botão console foi pressionado.");
}

//4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function  alertaPressionado(){
    alert("Eu amo JavaScript.");
}

//5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function perguntarCidade() {
    cidade = prompt("Digite o nome de uma cidade do Brasil.");
    alert(`Estive em ${cidade} e lembrei de você`);
}

//6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somarNumeros(){
    alert("Digite dois números inteiros");
    numero1 = parseInt(prompt("Número 1"));
    numero2 = parseInt(prompt("Número 2"));
    soma= numero1 + numero2;
    alert(soma);
}

