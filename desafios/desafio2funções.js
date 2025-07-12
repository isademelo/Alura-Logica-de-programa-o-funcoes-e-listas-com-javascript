//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    console.log("Olá, mundo!"); 
}
olaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = prompt("Digite seu nome");
function saudacao(nome){
    console.log (`Olá, ${nome}!`);
}
saudacao(nome);

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let num1 = parseInt(prompt("Digite um número para ser multiplicado por 2"));
function dobrar(num1){
    let dobro = num1 * 2;
    console.log(`o dobro de ${num1} é ${dobro}`);
}
dobrar(num1);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
alert("digite 3 números para calcular a média entre eles");
let n1 =  parseInt(prompt("Digite o número 1"));
let n2 =  parseInt(prompt("Digite o número 2"));
let n3 =  parseInt(prompt("Digite o número 3"));
function mediaDeTresNumeros(n1, n2, n3){
    let media = (n1 + n2 + n3)/3
    console.log(`a média dos números ${n1}, ${n2} e ${n3} é igual a: ${media}`);
}
mediaDeTresNumeros(n1, n2, n3);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
alert("Digite 2 numeros para comparar e mostrar qual é maior");
let numero1 = parseInt(prompt("Digite o número 1"));
let numero2 = parseInt(prompt("Digite o número 2"));
let comparacao;
function comparaNumeros(numero1, numero2){
    comparacao = numero1 > numero2 ? `o número ${numero1} é maior que ${numero2}` : `o número ${numero2} é maior que ${numero1}`;
    console.log(comparacao);
}
comparaNumeros(numero1, numero2);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.*/
let numero = parseInt(prompt("Digite um número para ser multiplicado por ele mesmo"));
function potenciacao (numero){
    let multiplicacao =  numero * numero;
    console.log(`A multiplicação de ${numero} por ele mesmo é ${multiplicacao}`);
}

potenciacao(numero)