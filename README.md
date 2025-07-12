# Alura-Logica-de-programa-o-funcoes-e-listas-com-javascript
📚 Este repositório foi criado como parte do conteúdo didático de aulas de lógica de programação, com JavaScript para explorar conceitos fundamentais como estruturas de listas (arrays) e funções.  

🎯 Objetivos

 * Compreender a lógica por trás das listas (arrays) e como manipulá-las.
 * Desenvolver e aplicar funções para resolver problemas.
 * Praticar a decomposição de tarefas em passos lógicos e reutilizáveis.
 * Aprender boas práticas de organização de código.

DESAFIOS

**2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.**

```ruby
let cidade, numero1, numero2, soma;
let alterarH1 = document.querySelector("h1");
alterarH1.innerHTML = ("Hora do Desafio");
```

3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

```ruby
function consolePressionado(){
    console.log("O botão console foi pressionado.");
}
```

4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

```ruby
function alertaPressionado(){
    console.log("Eu amo JavaScript.");
}
```

5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

```ruby
function perguntarCidade() {
    cidade = prompt("Digite o nome de uma cidade do brasil.");
    alert(`Estive em ${cidade} e lembre de você`);
}
```

6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

```ruby
function somarNumeros(){
    alert("Digite dois números inteiros");
    numero1 = parseInt(prompt("Número 1"));
    numero2 = parseInt(prompt("Número 2"));
    soma = numero1 + numero2;
    alert(soma);
}
```

7. Criar uma função que exibe "Olá, mundo!" no console.
   
```ruby
function olaMundo(){
    console.log("Olá, mundo!"); 
}
olaMundo();
```

8. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
   
```ruby 
let nome = prompt("Digite seu nome");
function saudacao(nome){
    console.log (`Olá, ${nome}!`);
}
saudacao(nome);
```

9. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

```ruby
let num1 = parseInt(prompt("Digite um número para ser multiplicado por 2"));
function dobrar(num1){
    let dobro = num1 * 2;
    console.log(`o dobro de ${num1} é ${dobro}`);
}
dobrar(num1);
```

10. Criar uma função que recebe três números como parâmetros e retorna a média deles.

```ruby 
alert("digite 3 números para calcular a média entre eles");
let n1 =  parseInt(prompt("Digite o número 1"));
let n2 =  parseInt(prompt("Digite o número 2"));
let n3 =  parseInt(prompt("Digite o número 3"));
function mediaDeTresNumeros(n1, n2, n3){
    let media = (n1 + n2 + n3)/3
    console.log(`a média dos números ${n1}, ${n2} e ${n3} é igual a: ${media}`);
}
mediaDeTresNumeros(n1, n2, n3);
```

11. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

```ruby
alert("Digite 2 numeros para comparar e mostrar qual é maior");
let numero1 = parseInt(prompt("Digite o número 1"));
let numero2 = parseInt(prompt("Digite o número 2"));
let comparacao;
function comparaNumeros(numero1, numero2){
    comparacao = numero1 > numero2 ? `o número ${numero1} é maior que ${numero2}` : `o número ${numero2} é maior que ${numero1}`;
    console.log(comparacao);
}
comparaNumeros(numero1, numero2);
```

12. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

```ruby
let numero = parseInt(prompt("Digite um número para ser multiplicado por ele mesmo"));
function potenciacao (numero){
    let multiplicacao =  numero * numero;
    console.log(`A multiplicação de ${numero} por ele mesmo é ${multiplicacao}`);
}

potenciacao(numero)
```
